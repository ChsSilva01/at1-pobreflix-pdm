
import { styles } from '@/styles/styles';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Sobre() {
    return (
        <View style={styles.container}>
            <View style={styles.cabecalhoDetalhes}>
                <TouchableOpacity onPress={() => router.push('/catalogo')} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.tituloCabecalho}>
                    Detalhes    
                </Text>
                <View style={styles.spacer} />
            </View>
            <Text style={styles.textocorpo}>
                O Pobreflix é um aplicativo de catálogo de filmes desenvolvido como atividade prática para a disciplina de Programação para Dispositivos Móveis I. A aplicação permite aos usuários visualizar uma lista de filmes, favoritar seus títulos preferidos e acessar detalhes de cada obra.
            </Text>
        </View>
    );
}

