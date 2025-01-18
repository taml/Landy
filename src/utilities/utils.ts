// Transform the image url so that it can be used dynamically in a component
const imageSrc = (src: string) => new URL(src, import.meta.url).href

export { imageSrc }