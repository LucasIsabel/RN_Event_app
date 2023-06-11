import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
        gap: 5
    },
    eventName: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },
    eventDate: {
        color: '#6b6b6b',
        fontSize: 16
    },
    input: {
        height: 56,
        flex: 1,
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        marginRight: 7
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        textTransform: 'capitalize',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },
    listEmptyText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
        width: '100%',
        padding: 5,
        borderRadius: 5,
        lineHeight: 25
    }
})