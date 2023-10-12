import {
  ChangeEvent,
  FormEvent,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from 'react'

export interface StudentProps {
  id?: string
  name: string
  time: string
}

export interface GetGithubProps {
  name: string
  avatar: string
}

interface ContextTypes {
  studentName: string
  handleChangeName: (event: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  handleNewStudent: () => void
  student: StudentProps[]
  getGithub: GetGithubProps
}

export const Contexts = createContext({} as ContextTypes)

interface AppContextProps {
  children: ReactNode
}

export function AppContext({ children }: AppContextProps) {
  const [studentName, setStudentName] = useState('')
  const [student, setStudent] = useState<StudentProps[]>([])
  const [getGithub, setGetGithub] = useState({
    name: '',
    avatar: '',
  })

  function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
    setStudentName(event.target.value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  function handleNewStudent() {
    const newStudent = {
      id: crypto.randomUUID(),
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    }
    setStudent([...student, newStudent])
    setStudentName('')
  }

  useEffect(() => {
    handleUserGithub()
  }, [])

  async function handleUserGithub() {
    const response = await fetch(
      'https://api.github.com/users/brunogoncalvesferreira',
    )
    const data = await response.json()

    setGetGithub({
      name: data.name,
      avatar: data.avatar_url,
    })
  }

  const valuesContext = {
    handleChangeName,
    studentName,
    handleSubmit,
    handleNewStudent,
    student,
    getGithub,
  }

  return <Contexts.Provider value={valuesContext}>{children}</Contexts.Provider>
}
