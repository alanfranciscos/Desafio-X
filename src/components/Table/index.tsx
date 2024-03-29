import React from 'react'
import { useEffect, useState } from 'react'

import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsChevronDoubleLeft,
  BsChevronDoubleRight
} from 'react-icons/bs'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { v4 as uuidv4 } from 'uuid'

import { Button } from './components/Button'
import { Modal } from './components/Modal'
import {
  Container,
  FooterContainer,
  LoaderContainer,
  SelectPage,
  TableContainer,
  TableTitle
} from './styles'
import { TablePropsType } from './types'
import { StatusRequest } from '../StatusRequest'

export const Table = ({
  data,
  dataKeys,
  setFilter,
  filter,
  numberOfPages,
  totalElements,
  id,
  error,
  loading,
  actionButton,
  setItemSelected,
  titleTable
}: TablePropsType) => {
  const [arrowDirection, setArrowDirection] = useState(
    new Array(...dataKeys)?.fill('Down', 0, dataKeys?.length)
  )

  const uuid = uuidv4()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [coordinatesClick, setCoordinatesClick] = useState({
    x: 0,
    y: 0
  })

  const [pages, setPages] = useState([0])

  useEffect(() => {
    if (numberOfPages) {
      const pages = []
      for (let i = 0; i < numberOfPages; i++) {
        pages.push(i + 1)
      }
      setPages(pages)
    }
  }, [numberOfPages])

  const verifyIfHasArrow = (index: number) => {
    if (filter) {
      if (arrowDirection[index] === 'Down') {
        return <IoIosArrowDown />
      } else {
        return <IoIosArrowUp />
      }
    }

    return null
  }

  const handleArrowDirection = (index: number) => {
    let i = 0
    const aux = []
    while (i < arrowDirection?.length) {
      if (i === index) {
        let direction = null
        if (arrowDirection[i] === 'Up') {
          direction = 'Down'
          aux.push(direction)
        } else {
          direction = 'Up'
          aux.push(direction)
        }
      } else {
        aux.push('Down')
      }
      i = i + 1
    }
    setArrowDirection(aux)
  }

  const handleSortOrder = () => {
    if (filter?.sortOrder === 'asc') {
      return 'desc'
    }
    return 'asc'
  }

  return (
    <>
      <Container id="container">
        {modalIsOpen ? (
          <Modal
            coordinates={coordinatesClick}
            closeModal={() => setModalIsOpen(false)}
            actionButton={actionButton}
          />
        ) : null}
        <TableTitle>{titleTable}</TableTitle>
        {data?.length && dataKeys?.length && totalElements !== -1 ? (
          <>
            <TableContainer>
              <thead className="thead">
                <tr key={uuid}>
                  {dataKeys?.map((value, index) => (
                    <th
                      key={index}
                      onClick={() => {
                        if (value === filter?.sorted) {
                          setFilter((prevState: any) => ({
                            ...prevState,
                            sorted: value,
                            sortOrder: handleSortOrder()
                          }))
                          handleArrowDirection(index)
                        } else {
                          setFilter((prevState: any) => ({
                            ...prevState,
                            sortOrder: 'asc',
                            sorted: value
                          }))
                          handleArrowDirection(index)
                        }
                      }}
                    >
                      {value}
                      {verifyIfHasArrow(index)}
                    </th>
                  ))}
                  {actionButton ? <th>Ações</th> : null}
                </tr>
              </thead>
              <tbody key={uuid}>
                {data?.map((item, index) => {
                  return (
                    <tr key={index}>
                      {dataKeys.map((value) => (
                        <td key={item?.[value.toLowerCase()]}>
                          {
                            item?.[
                              value
                                .toLowerCase()
                                .normalize('NFD')
                                .replace(/[^a-zA-Z\s]/g, '')
                            ]
                          }
                        </td>
                      ))}
                      {actionButton ? (
                        <Button
                          openModal={(event: any) => {
                            setCoordinatesClick({
                              x: event?.clientX,
                              y: event?.clientY
                            })
                            setModalIsOpen(true)
                            if (id) {
                              setItemSelected(item[id])
                            }
                          }}
                        >
                          Ações
                          <IoIosArrowDown />
                        </Button>
                      ) : null}
                    </tr>
                  )
                })}
              </tbody>
            </TableContainer>
            {totalElements && numberOfPages && filter ? (
              <FooterContainer>
                <p>{`Exibindo de ${(filter?.atualPage + 1) * 10 - 9} a ${
                  (filter?.atualPage + 1) * 10 > totalElements
                    ? totalElements
                    : (filter?.atualPage + 1) * 10
                } de ${totalElements} registros`}</p>
                <SelectPage>
                  <BsChevronDoubleLeft
                    onClick={() =>
                      setFilter({
                        ...filter,
                        atualPage: 0
                      })
                    }
                  />
                  <BsChevronCompactLeft
                    onClick={() =>
                      setFilter({
                        ...filter,
                        atualPage:
                          filter?.atualPage - 1 < 0
                            ? filter?.atualPage
                            : filter?.atualPage - 1
                      })
                    }
                  />
                  {pages?.map((i) => {
                    return (
                      <p
                        key={i}
                        className={pages?.length === i ? 'last-item' : 'item'}
                        onClick={() =>
                          setFilter({
                            ...filter,
                            atualPage: i - 1
                          })
                        }
                      >
                        {i}
                      </p>
                    )
                  })}
                  <BsChevronCompactRight
                    onClick={() =>
                      setFilter({
                        ...filter,
                        atualPage:
                          filter?.atualPage + 1 >= numberOfPages
                            ? filter?.atualPage
                            : filter?.atualPage + 1
                      })
                    }
                  />
                  <BsChevronDoubleRight
                    onClick={() =>
                      setFilter({
                        ...filter,
                        atualPage: numberOfPages - 1
                      })
                    }
                  />
                </SelectPage>
              </FooterContainer>
            ) : null}
          </>
        ) : (
          <LoaderContainer>
            <StatusRequest error={error} loading={loading} />
          </LoaderContainer>
        )}
      </Container>
    </>
  )
}

Table.defaultProps = {
  actionButton: null,
  setItemSelected: () => null,
  id: null,
  numberOfPages: null,
  totalElements: null,
  titleTable: null,
  setFilter: () => null,
  filter: null
}
