import { CardContent, Name, Time } from './styles'
import { StudentProps } from '../contexts/Contexts'

export function Cards({ name, time }: StudentProps) {
  return (
    <CardContent>
      <Name>{name}</Name>

      <Time>{time}</Time>
    </CardContent>
  )
}
