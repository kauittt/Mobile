import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f9dbdb',
    },
    banner: {
        width: '100%',
        height: 100,
        marginBottom: 10,
    },
    generalItem: {
        padding: 10,
        borderRadius: 5,
    },
    generalItemInfor: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
        marginRight: 10,
    },
    generalItemInforImg: {
        borderRadius: 5,
    },
    generalItemInforImgImg: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    generalItemInforSong: {
        flexDirection: 'column',
    },
    generalItemInforSong__name: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    generalItemInforSong__singer: {
        lineHeight: 28,
    },
    generalItemInforSong__wapTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Vip: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'yellow',
        marginLeft: 6,
        paddingHorizontal: 4,
        borderRadius: 4,
    },
});

export default styles;