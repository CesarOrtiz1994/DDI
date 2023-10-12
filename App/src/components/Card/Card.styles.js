
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({

    cardContainer: {
        backgroundColor: 'transparent',
        borderColor: '#70d208',
        borderWidth: 2,
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
        justifyContent: 'center',
        marginLeft: 15,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#fff'

    },
    cardText: {
        fontSize: 16,
        marginBottom: 10,
        color: '#fff'

    },
    cardTextSecondary: {
        fontSize: 16,
        color: '#fff',
        marginTop: 5,
        fontWeight: 'bold',
    },
});
