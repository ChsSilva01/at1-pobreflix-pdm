import { router } from 'expo-router';
import { Image, Pressable, StyleSheet, Text } from 'react-native';

interface FMProps {
    titulo: string;
    imagem: string; 
    genero: string;
    ano: number;
    favorito: boolean;
}

export default function FilmeCard({ titulo, imagem, genero, ano, favorito }: FMProps) {

    const abrirDetalhes = () => {
        router.push({
            pathname: '/detalhes',
            params: {
                titulo,
                imagem, 
                genero,
                ano,
                favorito: String(favorito)
            }
        });
    };

    return (
        <Pressable style={styles.card} onPress={abrirDetalhes}>
            <Image 
                source={{ uri: imagem || 'https://via.placeholder.com/200x300' }} 
                style={styles.imagemcard} 
            />
            <Text style={styles.titulo} numberOfLines={2}>{titulo}</Text> 
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '30%',
        height: 200,
        marginBottom: 10, 
    },
    imagemcard: {
        width: '100%',
        height: '70%',
        borderRadius: 10,
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        color: '#FFF',
    }
});