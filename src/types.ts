export interface BlockElement {
  type: string
  name: string
  content: ImageBlock | TextBlock
}

export interface TextBlock {
  text: string
  textSize: number
}

export interface ImageBlock {
  src: string
  alt: string
  caption: string
  width: number
  align: string
  padding: number
}