import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 60rem;
  width: 90%;
  margin: 0 auto;
`

export const MainContainer = styled.main`
  width: 100%;
`

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Input = styled.input`
  background: ${(props) => props.theme['gray-600']};
  padding: 1.5rem;
  border: none;
  border-radius: 6px;
  outline: none;

  font-size: 1.5rem;
  color: ${(props) => props.theme.white};

  &:hover {
    border-color: ${(props) => props.theme['green-500']};
  }
`

export const Button = styled.button`
  background-color: ${(props) => props.theme['green-500']};
  padding: 1.5rem;
  border: none;
  border-radius: 6px;

  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${(props) => props.theme['green-300']};
  }
`
export const CardContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
