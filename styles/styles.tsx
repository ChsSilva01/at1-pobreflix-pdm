import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea:{
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    
    // Home style
    textotituloapp:{
        fontSize: 70,
        fontWeight: 'bold',
        color: '#E50914'
    },
    textocorpo:{
        fontSize: 26,
        textAlign: "center",
        marginBottom: 20,
        lineHeight: 40,
        color: '#B7B7B7',
        width: '85%'
    },
    homeimage: {
        width: 200,
        height: 200,
        marginBottom: 40
    },



    // Catalogo style
    listaFilmes:{ 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-around', 
        width: '100%' 
    },
    cabecalho:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%', 
        position: 'absolute',
        backgroundColor: '#272727', 
        top: 0, 

    },
    tituloCabecalho:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#E50914',
        marginTop: 20
    },
    lista: { 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-evenly', 
        paddingVertical: 20 
    },

    // Detalhes style
    tela: {
        flex: 1, 
        backgroundColor: '#18181b', 
        width: '100%',
      
        justifyContent: 'center',
    },
    conteudoScroll: {
        alignItems: 'center',
        justifyContent: 'center', 
        padding: 20,
        paddingBottom: 40,
        width: '100%',
    },
    spacer: {
        width: 34, 
    },
    posterContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    poster: {
        width: 180,
        height: 270,
        borderRadius: 10,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    metadata: {
        fontSize: 14,
        color: '#aaa',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 25,
    },
    btnAssistir: {
        backgroundColor: '#E50914', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        borderRadius: 15, 
        marginBottom: 25,
        width: '80%',
        height: 50,
    },
    btnAssistirText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    btnFavoritar: {
        backgroundColor: '#d9d9d9',
        paddingVertical: 14,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 30,
        width: '12%',
        height: 50,
        justifyContent: 'center',
    },
    botoesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 30,
    },
    btnFavoritarIcon: {
        width: 30,
        height: 30,
    },
    cabecalhoDetalhes: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        width: '100%',  
        position: 'absolute',   
        backgroundColor: '#272727',
        top: 0, 
        paddingVertical: 25,
        height: '15%',
    },
    backButton: {
        paddingTop: 20,
    },
});
