import * as S from './styles'

type Props = {
  title: string
  type: 'button' | 'link' | 'submit'
  children: string
  to?: string
  onClick?: () => void
}

const Button = ({ title, type, children, to, onClick }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.StandardButton title={title} onClick={onClick}>
        {children}
      </S.StandardButton>
    )
  }
  return (
    <S.LinkButton title={title} to={to as string}>
      {children}
    </S.LinkButton>
  )
}

export default Button
