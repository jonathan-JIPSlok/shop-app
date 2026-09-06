import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    containerRow: {
        flex: 1,
        flexDirection: 'row',
        width: "100%",
        minHeight: 70,
    },
    contentButtonFilter: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "50%",
        backgroundColor: "white",
        borderColor: "#2567E8",
    },
    contentScroll: {
        paddingTop: 20,
        backgroundColor: 'white',
        paddingLeft: "5%",
        paddingBottom: 120
    },
    contentProducts: {
        width: "100%",
        flexWrap: "wrap",
        flexDirection: "row"
    },
    viewBottomButton: {
        flexDirection: "row",
        width: "100%",
        height: 100,
        position: "absolute",
        backgroundColor: "white",
        borderTopWidth: 1,
        borderColor: "#D3D3D3",
        bottom: 0
    },
    contentButtonsSetView: {
        width: "50%",
        alignItems: 'center'
    },
    logoutButton: {
        backgroundColor: '#E63535',
        height: 40,
        width: "80%",
        marginTop: "100%",
        marginBottom: "105%",
        alignSelf: "center",
        borderRadius: 5,
        paddingTop: "2%",
    }
})