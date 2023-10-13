import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 4rem 0;

  strong {
    text-align: center;
    font-size: 0.875rem;
    font-weight: bold;

    color: ${(props) => props.theme['gray-300']};
  }

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 4px solid ${(props) => props.theme['green-700']};
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  max-width: 150px;
  letter-spacing: -4px;
  line-height: 3rem;
  text-align: center;

  color: ${(props) => props.theme['gray-300']};
`

export const ContainerInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`
