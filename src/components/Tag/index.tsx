import { TagContainer } from './styles'

export type TagProps = {
  children: string
  // space?: 'small' | 'big'
}

const Tag = ({ children }: TagProps) => <TagContainer>{children}</TagContainer>

export default Tag
