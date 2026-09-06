import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    conteinerRow: {
        flexDirection: 'row'
    },

    contentInicial: {
        position: 'absolute',
        width: '80%',
        height: '60%'
    },
    contentLogin: {
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#D3D3D3",
        marginTop: "10%",
        paddingTop: "5%",
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingBottom: '20%',
    },
    contentButton: {
        flex: 1,
        backgroundColor: "#2567E8",
        height: 40,
        minHeight: 40,
        justifyContent: 'center',
        marginTop: 20
    },
    contentButtonText: {
        fontSize: 16,
        textAlign: 'center',
    },
    ContentTitle: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    contentSubtitle: {
        fontSize: 16,
        textAlign: 'center'
    },
    contentInput: {
        flex: 1,
        minHeight: 37,
        width: "100%",
        borderWidth: 1,
        borderColor: "#D3D3D3",
        borderRadius: 4,
    },
    eyesStyle: {
        position: "absolute",
        alignSelf: "center",
        right: 10
    },
    inputText: {
        fontSize: 14,
        marginTop: 20
    },
    inputInvalid: {
        fontSize: 12,
        color: "red",
    }
})

