import { getProductById } from '@/src/services/shopService';
import { ProductInterface } from '@/src/types/product';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Text, View } from "react-native";
import { style } from "./style";

export default function ProductDetails() {
    
    const [products, setProducts] = useState<ProductInterface | null>  (null)

    const { productId } = useLocalSearchParams<{productId: string}>()

    const getInfoProduct = async () => {
        const productList = await getProductById(Number(productId))
        setProducts(productList)
    }

    useEffect(() => {
        getInfoProduct()
        
    }, [])

    return (
        <View style={style.containerFrist}>
            
            <View
                style={style.contentMenu}
            >
                <AntDesign name="arrow-left" size={32} color="black" onPress={()=>{
                    router.back()
                }}/>
            
            </View>
            {
                products !== null
                ?
                <View>
                    <Image
                        source={{uri: products.images[1]}}
                        style={style.contentImage}
                        resizeMode="contain"
                    />
                    <Text
                        style={style.title}
                    >
                        {products.title}
                    </Text>
                    <View
                        style={style.contentPrice}
                    >
                        <Text
                            style={style.newPrice}
                        >
                            R${(products.price * (1 - products.discountPercentage / 100)).toFixed(2)}
                        </Text>
                        <Text
                            style={style.price}
                        >
                            R${products.price}
                        </Text>
                    </View>
                    <Text
                        style={style.description}
                    >
                        {products.description}
                    </Text>
                </View>
                :
                null
            }
        </View>
    )
}