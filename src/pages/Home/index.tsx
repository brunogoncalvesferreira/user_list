import { useContext } from 'react'
import { Cards } from '../../components/Cards'
import { Header } from '../../components/Header'
import {
  Button,
  CardContainer,
  Container,
  FormContainer,
  Input,
  MainContainer,
} from './styles'

import { Contexts } from '../../components/contexts/Contexts'

export function Home() {
  const {
    handleChangeName,
    studentName,
    handleSubmit,
    handleNewStudent,
    student,
  } = useContext(Contexts)

  return (
    <Container>
      <Header />

      <MainContainer>
        <FormContainer onSubmit={handleSubmit}>
          <Input
            onChange={handleChangeName}
            value={studentName}
            placeholder="Digite o nome"
          />
          <Button onClick={handleNewStudent}>Adicionar</Button>
        </FormContainer>

        <CardContainer>
          {student.map((students) => (
            <Cards
              key={students.id}
              name={students.name}
              time={students.time}
            />
          ))}
        </CardContainer>
      </MainContainer>
    </Container>
  )
}
