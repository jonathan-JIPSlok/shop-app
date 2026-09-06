import { getProductById } from '@/src/services/shopService';
import { RootState } from '@/src/store';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Text, View } from "react-native";
import { useSelector } from 'react-redux';
import { style } from "./style";

interface productType {
    title: string
    description: string
    images: string[]
    price: number
    discountPercentage: number
}

export default function ProductDetails() {
    
    const [products, setProducts] = useState<productType | null>  (null)

    const productId = useSelector((state:RootState)=> {
        return state.productSelected.value.id
    })

    const getInfoProduct = async () => {
        const productList = await getProductById(productId)
        setProducts(productList)
    }

    useEffect(() => {
        if (products === null) {
            getInfoProduct()
        }
    })

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
                products != null
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