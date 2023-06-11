import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#1f1e25',
        alignItems: 'center',
        marginBottom: 10
    },
    name: {
        color: '#fff',
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
        textTransform: 'capitalize',
        marginRight: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#e23c44',
        textTransform: 'capitalize',
        alignItems: 'center',
        justifyContent: 'center',
    },
})