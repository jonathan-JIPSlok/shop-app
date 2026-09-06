export interface ProductInterface {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    images: string[]
}

export type ProductType = {
    product: ProductInterface
}