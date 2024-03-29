import React from 'react'
import { useEffect, useState } from 'react'

import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

import {
  ConfirmationContainer,
  Container,
  Form,
  InputGroup,
  LoaderContainer,
  ModalContent,
  ModalHeader
} from './styles'
import { RegisterOrEditSaleProps } from './types'
import { CLIENTS_API, SALES_API } from '../../../services/api'
import { cnpjToNumbers } from '../../../utils/cnpj'
import { ModalStatus } from '../../Client/RegisterOrEdit/Components/ModalStatus'
import { Input } from '../../Form/Input'
import { InputDate } from '../../Form/InputDate'
import { SelectInput } from '../../Form/SelectInput'
import { StatusRequest } from '../../StatusRequest'

export const RegisterOrEditSales = ({
  modalIsOpen,
  setModalIsOpen,
  title,
  placeholder,
  placeHolderIsLoading,
  saleId,
  errorEdit
}: RegisterOrEditSaleProps) => {
  const [status, setStatus] = useState<undefined | boolean>(undefined)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const {
    data: dataClientsNames,
    isLoading: loadingClients,
    isFetching: isFetchingClientsNames,
    isError: isErrorClient
  } = useQuery(['clients-names'], async () => {
    const { data } = await CLIENTS_API.getClientsNames()
    return data
  })

  const {
    data: dataStatus,
    isLoading: loadingStatus,
    isFetching: isFetchingStatus,
    isError: isErrorStatus
  } = useQuery(['sales-status'], async () => {
    const { data } = await SALES_API.getPossibleStatus()
    return data
  })

  const getClientDetails = async (cnpj: string) => {
    return (await CLIENTS_API.getPerCNPJ(cnpjToNumbers(cnpj))).data
  }

  const handleMouseCursor = (curosr: string) => {
    document.body.style.cursor = curosr
    const button = document?.getElementById('button-confirm')
    if (button !== null) {
      button.style.cursor = curosr === 'default' ? 'pointer' : curosr
    }
  }

  const editSale = async () => {
    if (
      formInputs?.client?.length &&
      formInputs?.saleDate &&
      formInputs?.situation &&
      formInputs?.valueSale &&
      saleId
    ) {
      await SALES_API.edit(saleId, {
        cliente: (await getClientDetails(formInputs?.client)) as any,
        data: formInputs?.saleDate,
        status: formInputs?.situation,
        valor: formInputs?.valueSale
      })
        .then(function () {
          setStatus(true)
        })
        .catch(function () {
          setStatus(false)
        })
    } else {
      setStatus(false)
    }
  }

  const createSale = async () => {
    if (
      formInputs?.client?.length &&
      formInputs?.saleDate &&
      formInputs?.situation &&
      formInputs?.valueSale
    ) {
      await SALES_API.create({
        cliente: (await getClientDetails(formInputs?.client)) as any,
        data: formInputs?.saleDate,
        status: formInputs?.situation,
        valor: formInputs?.valueSale
      })
        .then(function () {
          setStatus(true)
        })
        .catch(function () {
          setStatus(false)
        })
    } else {
      setStatus(false)
    }
  }

  const navigate = useNavigate()

  const [formInputs, setFormInputs] = useState({
    client: placeholder?.client,
    saleDate: placeholder?.saleDate,
    situation: placeholder?.situation,
    valueSale: placeholder?.valueSale
  })

  const reestoreFilters = () => {
    setFormInputs({
      client: placeholder?.client,
      saleDate: placeholder?.saleDate,
      situation: placeholder?.situation,
      valueSale: placeholder?.valueSale
    })
    setModalIsOpen(false)
  }

  const [modal, setModal] = useState(document?.getElementById('modal'))

  useEffect(() => {
    setModal(document?.getElementById('modal'))
  }, [modalIsOpen, placeholder?.client])

  useEffect(() => {
    setLoading(
      placeHolderIsLoading ||
        loadingClients ||
        loadingStatus ||
        isFetchingClientsNames ||
        isFetchingStatus
    )
    setError(isErrorClient || isErrorStatus)
  }, [
    placeHolderIsLoading,
    loadingClients,
    loadingStatus,
    isFetchingClientsNames,
    isFetchingStatus,
    isErrorStatus,
    isErrorClient
  ])

  return (
    <>
      {modalIsOpen && (
        <Container
          id="modal"
          onClick={(event) => {
            if (event.target === modal && modal) {
              setModalIsOpen(false)
            }
          }}
        >
          <ModalContent>
            <ModalHeader>
              <h3>{title}</h3>
            </ModalHeader>
            {loading || error || errorEdit ? (
              <LoaderContainer>
                <StatusRequest error={error || errorEdit} loading={loading} />
              </LoaderContainer>
            ) : (
              <>
                <Form>
                  <SelectInput
                    data={dataClientsNames}
                    getValue={(value: string) =>
                      setFormInputs({
                        ...formInputs,
                        client: value
                      })
                    }
                    label="Cliente *"
                    valueSelected={placeholder?.client}
                  />
                  <InputGroup>
                    <InputDate
                      title="Data da venda"
                      isRequired
                      getValue={(value: string) =>
                        setFormInputs({
                          ...formInputs,
                          saleDate: value
                        })
                      }
                      value={formInputs?.saleDate}
                    />
                    <SelectInput
                      data={dataStatus}
                      getValue={(value: string) =>
                        setFormInputs({
                          ...formInputs,
                          situation: value
                        })
                      }
                      label="Situação *"
                      valueSelected={placeholder?.situation}
                    />
                  </InputGroup>
                  <InputGroup>
                    <Input
                      isRequired
                      placeholder={placeholder?.valueSale}
                      title="Valor da Venda"
                      content={(value: number) =>
                        setFormInputs({
                          ...formInputs,
                          valueSale: value
                        })
                      }
                      value={formInputs?.valueSale}
                      type="number"
                    />
                    <div style={{ width: '100%' }} />
                  </InputGroup>

                  <ConfirmationContainer>
                    <button
                      className="button-cancel"
                      onClick={() => {
                        setModalIsOpen(false)
                      }}
                    >
                      Cancelar
                    </button>
                    <button
                      className="button-confirm"
                      id="button-confirm"
                      onClick={async () => {
                        handleMouseCursor('wait')
                        if (placeholder?.client) {
                          await editSale()
                        } else {
                          await createSale()
                        }
                        handleMouseCursor('default')
                      }}
                    >
                      Salvar
                    </button>
                  </ConfirmationContainer>
                </Form>
                {status !== undefined ? (
                  <ModalStatus
                    status={status}
                    setStatus={setStatus}
                    confirm={function () {
                      reestoreFilters()
                      navigate(0)
                    }}
                  />
                ) : null}
              </>
            )}
          </ModalContent>
        </Container>
      )}
    </>
  )
}

RegisterOrEditSales.defaultProps = {
  saleId: null,
  placeholder: {
    client: null,
    saleDate: null,
    situation: null,
    valueSale: 'R$ 0,00'
  },
  placeHolderIsLoading: false,
  errorEdit: false
}
