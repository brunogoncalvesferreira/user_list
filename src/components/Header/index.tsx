import { useContext } from 'react'
import { ContainerInfoUser, HeaderContainer, Title } from './styles'
import { Contexts } from '../contexts/Contexts'

export function Header() {
  const { getGithub } = useContext(Contexts)

  return (
    <HeaderContainer>
      <Title>Lista de presença</Title>
      <ContainerInfoUser>
        <img src={getGithub.avatar} alt="Foto do usuário" />
        <strong>{getGithub.name}</strong>
      </ContainerInfoUser>
    </HeaderContainer>
  )
}
