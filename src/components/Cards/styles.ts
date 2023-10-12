import styled from 'styled-components'

export const CardContent = styled.div`
  background: ${(props) => props.theme['green-700']};
  padding: 1.5rem;
  border-radius: 6px;

  display: flex;
  justify-content: space-between;

  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-500']};
  }
`

export const Name = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`

export const Time = styled.time`
  font-size: 1.5rem;
  font-weight: 700;
`
