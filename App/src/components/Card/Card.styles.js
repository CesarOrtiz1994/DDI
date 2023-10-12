
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({

    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
    },
    contentext: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardText: {
        fontSize: 16,
        marginBottom: 10,
    },
    cardTextSecondary: {
        fontSize: 14,
        color: '#6E6E6E',
    },
});
