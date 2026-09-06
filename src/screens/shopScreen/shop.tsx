import getMensProducts from "@/src/services/shopService"
import { ProductInterface } from "@/src/types/product"
import { EvilIcons } from "@expo/vector-icons"
import Entypo from '@expo/vector-icons/Entypo'
import { router } from "expo-router"
import { useEffect, useState } from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { ProductCard } from "../../components/productCard"
import { style } from "./style"

export const Shop = () => {

    const [productList, setProductList] = useState<ProductInterface[]>([])

    const [bottomButtonSelected, setBottomButtonSelected] = useState("init")
    const [buttonProductSelected, setButtonProductSelected] = useState("masculino")

    const getProductsMens = async () => {
        const products = await getMensProducts(JSON.parse(process.env.EXPO_PUBLIC_API_CATEGORI_MENS_LIST!))
        setProductList(products);
    }

    const getProductsWomens = async () => {
        const products = await getMensProducts(JSON.parse(process.env.EXPO_PUBLIC_API_CATEGORI_WOMENS_LIST!))
        setProductList(products);
    }

    useEffect(() => {
        getProductsMens()
    }, [])

    return (
        <View>
            {
                bottomButtonSelected === "init"
                ?
                <View style={style.containerRow}>
                    <TouchableOpacity
                        style={[style.contentButtonFilter, buttonProductSelected === "masculino" ? {borderBottomWidth: 0} :  {borderBottomWidth: 2.5}]}
                        onPress={() => {
                            getProductsMens()
                            setButtonProductSelected("masculino")
                            }
                        }
                    >
                        <Text>Produtos Masculinos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[style.contentButtonFilter, buttonProductSelected === "feminino" ? {borderBottomWidth: 0} :  {borderBottomWidth: 2.5}]}
                        onPress={() => {
                            getProductsWomens()
                            setButtonProductSelected("feminino")
                        }}
                    >
                        <Text>Produtos Femininos</Text>
                    </TouchableOpacity>
                </View>
                :
                null
            }
            {
                bottomButtonSelected === "init"
                ?
                <ScrollView
                    contentContainerStyle={style.contentScroll}
                >
                    <View style={style.contentProducts}>
                        {
                            productList != undefined
                            ? productList.map((element) => (
                                <ProductCard key={element.id} product={element}/>
                            ))
                            : null
                        }
                    </View>
                </ScrollView>
                :
                <TouchableOpacity
                    style={style.logoutButton}
                    onPress={() => {
                        router.replace("/")
                    }}
                >
                    <Text style={{color: "white", fontWeight: 'bold', textAlign: "center"}} >Sair da Conta</Text>
                </TouchableOpacity>
            }
            <View
                style={style.viewBottomButton}
            >
                <TouchableOpacity
                    key="init"
                    style={style.contentButtonsSetView}
                    onPress={() => {setBottomButtonSelected("init")}}
                >
                    <Entypo name="home" size={24} color= {bottomButtonSelected === "init" ? "blue" : "black"} />
                    <Text style= {bottomButtonSelected === "init" ? {color: "blue"} : {color: "black"}} >Início</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    key="config"
                    style={style.contentButtonsSetView}
                    onPress={() => {setBottomButtonSelected("config")}}
                >
                    <EvilIcons name="gear" size={24} color={bottomButtonSelected === "config" ? "blue" : "black"} />
                    <Text style= {bottomButtonSelected === "config" ? {color: "blue"} : {color: "black"}} >Configurações</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}