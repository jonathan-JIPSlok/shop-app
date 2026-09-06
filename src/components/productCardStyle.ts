import { StyleSheet } from "react-native";


export const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        width: '45%',
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#D3D3D3",
        borderRadius: 8
    },
    containerRow: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "flex-start",
        paddingLeft: 10
    },
    contentInfos: {
        justifyContent: 'center',
        alignItems: "flex-start",
        width: "100%",
        height: 180
    },
    contentImage: {
        width: "100%",
        height: 100
    },
    title: {
        fontSize: 16,
        height: "auto",
        width: "100%",
        fontWeight: "bold",
        padding: 12,
        borderTopWidth: 1,
        borderColor: "#D3D3D3"
    },
    description: {
        fontSize: 10,
        height: "auto",
        width: "100%",
        fontWeight: "400",
        color: '#656565',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    },
    price: {
        fontSize: 10,
        height: "auto",
        textDecorationLine: "line-through",
        color: "#656565",
        fontWeight: "600",
        marginLeft: 5
    },
    discountPrice: {
        fontSize: 14,
        fontWeight: "bold",
        bottom: 5
    }
})