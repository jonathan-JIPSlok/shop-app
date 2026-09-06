import { router } from "expo-router"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { ProductInterface } from "../types/product"
import { style } from "./productCardStyle"

type ProductCardProps = {
    product: ProductInterface
}

export const ProductCard = ({ product }: ProductCardProps) => {

    let priceDiscount = product.price * (1 - product.discountPercentage / 100)

    return (
        <TouchableOpacity
            style = {style.container}
            onPress={() => {
                router.push({
                    pathname: "/productDetails",
                    params: {
                        productId:product.id
                    }
                })
            }}
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