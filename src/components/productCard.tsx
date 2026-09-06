import { router } from "expo-router"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { setId } from "../store/slices/productSelected/productSelectedSlice"
import { style } from "./productCardStyle"

type ProductCardProps = {
    product: {
        id: number
        title: string
        description: string
        price: number
        discountPercentage: number
        images: string[]
    }
}

export const ProductCard = ({ product }: ProductCardProps) => {

    let priceDiscount = product.price * (1 - product.discountPercentage / 100)

    const productSelected = useSelector((state: RootState) => state.productSelected.value)
    const productSelectedDispatch = useDispatch()

    return (
        <TouchableOpacity
            style = {style.container}
            onPress={() => {
                productSelectedDispatch(setId({id: product.id}))
                router.push("/productDetails")
                }
            }
        >
            <Image
                source={{uri:product.images[0] }}
                style={style.contentImage}
                resizeMode="contain"
            />

            <View style={style.contentInfos}>
                <Text style={style.title}>{product.title}</Text>
                <Text style={style.description}>{product.description}</Text>
                <View style={style.containerRow}>
                    <Text style={style.discountPrice}>R${priceDiscount.toFixed(2)}</Text>
                    <Text style={style.price}>R${product.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}