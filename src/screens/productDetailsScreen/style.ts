import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    containerFrist: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    contentMenu: {
        width: "100%",
        height: 80,
        paddingLeft: 20,
        paddingTop: 40,
    },
    contentImage: {
        width: "100%",
        minHeight: 250,
        alignContent: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        width: "90%",
        marginBottom: 10,
        marginLeft: "5%",
    },
    contentPrice: {
        flexDirection: "row",
        width: "90%",
        minHeight: 30,
        marginBottom: 10,
        marginLeft: "5%",
    },
    newPrice: {
        color: '#B20000',
        fontSize: 24,
        fontWeight: "600",
    },
    price: {
        color: '#656565',
        fontSize: 16,
        fontWeight: "600",
        textDecorationLine: "line-through",
        paddingLeft: 10,
    },
    description: {
        color: '#656565',
        fontSize: 16,
        fontWeight: "400",
        width: "90%",
        marginLeft: "5%",
    }


})