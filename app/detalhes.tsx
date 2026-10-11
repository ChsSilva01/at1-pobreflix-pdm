import { styles } from '@/styles/styles';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function Detalhes() {
    const { titulo, genero, ano, imagem, favorito: favoritoParam } = useLocalSearchParams();
    const router = useRouter();
    
    const [favorito, setFavorito] = useState(favoritoParam === 'true');

    function favoritar() {
        setFavorito(!favorito);
    }

    return (
        <View style={styles.tela}>
            <View style={styles.cabecalhoDetalhes}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.tituloCabecalho}>
                    Detalhes    
                </Text>
                <View style={styles.spacer} />
            </View>

            <View style={styles.posterContainer}>
                <Image
                    source={{ uri: String(imagem || 'https://via.placeholder.com/200x300') }}
                    style={styles.poster}
                />
            </View>

            <Text style={styles.titulo}>{titulo || 'Nome do Filme'}</Text>
            
            <Text style={styles.metadata}>
                {genero || 'Ação'} • 2h 00m • {ano || '2023'}
            </Text>

            <View style={styles.botoesContainer}>
                <TouchableOpacity style={styles.btnAssistir}>
                    <Ionicons name="play" size={20} color="#fff" />
                    <Text style={styles.btnAssistirText}>ASSISTIR</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btnFavoritar}
                    onPress={favoritar} 
                >
                    {favorito ? (
                        <Image 
                            source={require('@/assets/images/favorite-icon-true.png')} 
                            style={styles.btnFavoritarIcon}
                        />
                    ) : (
                        <Image 
                            source={require('@/assets/images/favorite-icon-false.png')} 
                            style={styles.btnFavoritarIcon}
                        />
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
}