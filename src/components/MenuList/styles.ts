import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CardapioContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    column-gap: 8px;
    row-gap: 8px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    row-gap: 16px;
  }
`

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${colors.orange};
  color: ${colors.lightPeach};
  padding: 8px;
  display: block;

  img {
    width: 304px;
    max-width: 100%;
    height: 167px;
    padding-bottom: 8px;
  }

  .container {
    background-color: ${colors.lightPeach};
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }
  @media (max-width: ${breakpoints.phone}) {
    width: 80%;
    margin: 0 auto;
  }
`
export const Nome = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 8px;
  color: ${colors.lightPeach};
  line-height: 18.75px;
`
export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding-bottom: 8px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const NomePrato = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 8px;
`

export const ModalContent = styled.div`
  height: 344px;
  max-width: 1024px;
  width: 100%;
  background-color: ${colors.orange};
  padding: 32px;
  display: inline-flex;
  color: ${colors.lightPeach};
  z-index: 1;
  position: relative;

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    height: 80%;
    max-width: 344px;
    padding: 32px;
    ${ButtonContainer} {
      max-width: 100%;
    }
  }
`
export const Foto = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;
  margin-right: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 16px;
    object-fit: cover;
  }
`

export const Fechar = styled.img`
  width: 16px;
  height: 16px;
  right: 8px;
  top: 8px;
  position: absolute;
`
