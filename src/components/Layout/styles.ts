import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh !important;
  overflow-y: hidden;
`

export const Content = styled.section`
  width: 100%;
  /*100vh - a altura do header */
  height: calc(100vh - 80px);
  overflow-y: scroll;
`

export const PageContainer = styled.div`
  height: 100%;
  width: 100%;
`
