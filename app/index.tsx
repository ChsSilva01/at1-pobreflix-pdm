import Botao from '@/components/Botao';
import { styles } from '@/styles/styles';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
    const [iniciado, setIniciado] = useState(false)

        function iniciarAplicacao() {
            setIniciado(true);
            router.push("/catalogo");
        }
    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={require('@/assets/images/background-home.png')}
                style={styles.container}
            >
                <View style={{alignItems: 'center', width: '95%'}}>
                    <Text style={styles.textotituloapp}>
                        POBREFLIX
                    </Text>
                    <Text style={styles.textocorpo}>
                        O cinema do trabalhador! Filmes e séries sem complicação
                    </Text>
                </View>
                <Image
                    source={require('@/assets/images/icon-home.png')}
                    style={styles.homeimage}
                >

                </Image>
                <Botao
                    texto="Entrar"
                    onPress={iniciarAplicacao}
                    cor="#E72724"
                >

                </Botao>
            </ImageBackground>
        </SafeAreaView>
    );
}

