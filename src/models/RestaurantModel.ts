class RestaurantModel {
  id: number
  image: string
  title: string
  grade: number
  tags: string[]
  description: string
  to: string

  constructor(
    id: number,
    image: string,
    title: string,
    grade: number,
    tags: string[],
    description: string,
    to: string
  ) {
    this.id = id
    this.image = image
    this.title = title
    this.grade = grade
    this.tags = tags
    this.description = description
    this.to = to
  }
}

export default RestaurantModel
