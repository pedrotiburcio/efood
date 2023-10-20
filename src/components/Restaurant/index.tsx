import star from '../../assets/images/star.svg'
import Tag from '../Tag'

import * as S from './styles'

export type Props = {
  image: string
  title: string
  grade: number
  description: string
  tags: string[]
  to: string
}

const Restaurant = ({ image, title, grade, tags, to, description }: Props) => (
  <S.RestaurantCard>
    <S.Image style={{ backgroundImage: `url(${image})` }}>
      <S.InfosTag>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </S.InfosTag>
    </S.Image>
    <S.Infos>
      <div>
        <S.Title>{title}</S.Title>
        <div>
          <S.Grade>{grade}</S.Grade>
          <img src={star} alt="Estrela" />
        </div>
      </div>
      <S.Description>{description}</S.Description>
      <div>
        <S.ButtonLink to={to}>Saiba mais</S.ButtonLink>
      </div>
    </S.Infos>
  </S.RestaurantCard>
)

export default Restaurant
