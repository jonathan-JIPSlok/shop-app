import { RootState } from "@/src/store";
import { setUser } from "@/src/store/slices/user/userSlice";
import { AntDesign, Feather } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { style } from "./style";

export const Login = () => {

    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [invalidData, setInvalidData] = useState('')
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoginClicked, setIsLoginClicked] = useState(false)

    const user = useSelector((state: RootState) => state.user.value)
    const dispatch = useDispatch()

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility)
    }

    const checkLoginData = () => {
        setIsLoginClicked(true)
        if (username.length <= 0 || password.length <= 0) {
            return null
        } else if (user.id === 0) {
            dispatch(setUser({id: 1, name: username, password: password}))
        } else if(user.name !== username || user.password !== password){
            setInvalidData("Username ou senha inválidos")
            return null
        }
        router.push("/shop")
    }

    return (
        <LinearGradient
            colors={['#2567E8', '#2567E8', '#fff', '#fff']}
            locations={[0, 0.5, 0.5, 1]}
            start={{ x: 0, y: 0}}
            end={{ x: 0, y: 1 }}
            style={style.container}
        >
            <View style={style.contentInicial}>
                
                <Text style={[style.ContentTitle, {color: 'white'}]}>
                    Bem-vindo de volta!
                </Text>
                <Text style={[style.contentSubtitle, {color: 'white'}]}>
                    insira seus dados para entrar da sua conta.
                </Text>

                <View style={style.contentLogin}>

                    <Text style={{color: "red", textAlign: "center"}}>{invalidData}</Text>
                    
                    <Text style={style.inputText}>
                        Username
                    </Text>
                    <TextInput
                        style={style.contentInput}
                        onChangeText={(text) => {
                            setUsername(text)
                        }}
                    />
                    {
                        username.length <= 0 && isLoginClicked
                        ? 
                        <Text style={style.inputInvalid}><AntDesign name="exclamation-circle" size={16} color="red" />Campo obrigatório</Text>
                        : null
                    }

                    <Text style={style.inputText}>
                        Senha
                    </Text>
                    <View style={style.conteinerRow} >
                        <TextInput
                            secureTextEntry={!passwordVisibility}   
                            style={style.contentInput}
                            onChangeText={(text) => {
                                setPassword(text)
                            }}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility} style={style.eyesStyle}>
                            <Feather name="eye-off" size={12} color="gray"/>
                        </TouchableOpacity>
                    </View>
                    {
                        password.length <= 0 && isLoginClicked
                        ? 
                        <Text style={style.inputInvalid}><AntDesign name="exclamation-circle" size={16} color="red"/>Campo obrigatório</Text>
                        : null
                    }

                    <TouchableOpacity
                    style={style.contentButton}
                    onPress={() => {
                        setIsLoginClicked(true)
                        checkLoginData()
                    }}
                    >
                        <Text style={[style.contentButtonText, {color: 'white'}]}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}