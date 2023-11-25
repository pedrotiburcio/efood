import Button from '../Button'
import Tag from '../Tag'

import { RestaurantType } from '../../pages/Home'

import star from '../../assets/images/star.svg'

import * as S from './styles'

const Restaurant = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: RestaurantType) => (
  <S.RestaurantCard>
    <S.Image style={{ backgroundImage: `url(${capa})` }}>
      <S.InfosTag className={'message'}>
        <>
          {destacado ? (
            <>
              <Tag size="small">Destaque da semana</Tag>
              <Tag size="small">{tipo}</Tag>
            </>
          ) : (
            <Tag size="big">{tipo}</Tag>
          )}
        </>
      </S.InfosTag>
    </S.Image>
    <S.Infos>
      <div>
        <S.Title>{titulo}</S.Title>
        <div>
          <S.Grade>{avaliacao}</S.Grade>
          <img src={star} alt="Estrela" />
        </div>
      </div>
      <S.Description>{descricao}</S.Description>
      <div>
        <Button
          title="Clique aqui para ver os pratos servidos pelo restaurante"
          type="link"
          to={`restaurant/${id}`}
        >
          Saiba mais
        </Button>
      </div>
    </S.Infos>
  </S.RestaurantCard>
)

export default Restaurant
