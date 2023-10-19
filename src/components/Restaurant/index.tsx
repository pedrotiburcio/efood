import star from '../../assets/images/star.svg'
import Tag from '../Tag'

import {
  RestaurantCard,
  Title,
  Infos,
  Description,
  Image,
  ButtonLink,
  InfosTag,
  Grade
} from './styles'

export type Props = {
  image: string
  title: string
  grade: number
  description: string
  tags: string[]
  to: string
}

const Restaurant = ({ image, title, grade, tags, to, description }: Props) => (
  <RestaurantCard>
    <Image style={{ backgroundImage: `url(${image})` }}>
      <InfosTag>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </InfosTag>
    </Image>
    <Infos>
      <div>
        <Title>{title}</Title>
        <div>
          <Grade>{grade}</Grade>
          <img src={star} alt="Estrela" />
        </div>
      </div>
      <Description>{description}</Description>
      <div>
        <ButtonLink to={to}>Saiba mais</ButtonLink>
      </div>
    </Infos>
  </RestaurantCard>
)

export default Restaurant
