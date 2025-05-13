/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { spacings } from '../../constants/spacings';
import { fontSizes } from "../../constants/fontSizes";

export const styles = StyleSheet.create({
    container: { flexGrow: 1 },
    body: {
        paddingHorizontal: 16,
        backgroundColor: colors.other.background,
        flex: 1,
    },

    headerContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: spacings.s1,
    },

    titleFija: {
        color: colors.warning.warning100,
        fontWeight: 'bold',
        fontSize: fontSizes.vlarge,
    },

    container1: {
        flex: 1,
        marginTop: '20%',
    },

    imageBackground: {
        flex: 1,
        resizeMode: 'cover', // Puedes ajustar el modo de escala según tus necesidades
        justifyContent: 'center', // Puedes ajustar la alineación según tus necesidades
    },

    text1: {
        textAlign: 'center',
        color: colors.white,
        marginBottom: 4,
    },

    headerImage: { height: 60, alignSelf: 'center', resizeMode: 'contain' },
    jobImage: { height: 200, alignSelf: 'center', resizeMode: 'contain' },

});