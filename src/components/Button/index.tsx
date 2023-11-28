import * as S from './styles'

type Props = {
  title: string
  type: 'button' | 'link' | 'submit'
  children: string
  to?: string
  disabled?: boolean
  onClick?: () => void
}

const Button = ({ title, type, children, to, disabled, onClick }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.StandardButton title={title} onClick={onClick} disabled={disabled}>
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
