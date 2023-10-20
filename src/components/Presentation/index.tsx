import { PresentationContainer, Title } from './styles'

type Props = {
  type: string
  title: string
  image: string
}

const Presentation = ({ type, title, image }: Props) => (
  <PresentationContainer style={{ backgroundImage: `url(${image})` }}>
    <div className="background">
      <div className="container">
        <span>{type}</span>
        <Title>{title}</Title>
      </div>
    </div>
  </PresentationContainer>
)

export default Presentation
