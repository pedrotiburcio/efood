import { TagContainer } from './styles'

export type TagProps = {
  children: string | boolean
  size: 'small' | 'big'
}

const Tag = ({ children, size }: TagProps) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
