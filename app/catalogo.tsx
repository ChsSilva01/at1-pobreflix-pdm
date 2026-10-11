import FilmeCard from '@/components/FilmeCard';
import { styles } from '@/styles/styles';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ImageBackground, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Catalogo() {
  const [filmes, setFilmes] = useState<any[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFilmes([
        {
          titulo: "Clube da Luta",
          imagem: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
          genero: "Drama, Suspense",
          ano: 1999,
          favorito: false
        },
        {
          titulo: "Forrest Gump",
          imagem: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
          genero: "Drama, Romance",
          ano: 1994,
          favorito: false
        },
        {
          titulo: "Jurassic Park",
          imagem: "https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
          genero: "Aventura, Ficção Científica",
          ano: 1993,
          favorito: false
        },
        {
          titulo: "Coringa",
          imagem: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          genero: "Crime, Thriller",
          ano: 2019,
          favorito: false
        },
        {
          titulo: "Deadpool",
          imagem: "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
          genero: "Ação, Comédia",
          ano: 2016,
          favorito: false
        },
        {
          titulo: "O Resgate",
          imagem: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_FMjpg_UX1000_.jpg",
          genero: "Ação, Thriller",
          ano: 2020,
          favorito: false
        },
        {
          titulo: "Matrix",
          imagem: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
          genero: "Ficção Científica, Ação",
          ano: 1999,
          favorito: false
        },
        {
          titulo: "John Wick",
          imagem: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg",
          genero: "Ação",
          ano: 2014,
          favorito: false
        },
        {
          titulo: "O Poderoso Chefão",
          imagem: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
          genero: "Crime, Drama",
          ano: 1972,
          favorito: false
        }
      ]);
      setCarregando(false);
    }, 1500);
  }, []); 

  return (
    <SafeAreaView style={styles.safeArea}>
        <ImageBackground
            source={require('@/assets/images/background-home.png')}
            style={styles.container}
        >
            {carregando ? (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="#E50914" />
                </View>
            ) : (
                <ScrollView contentContainerStyle={[styles.listaFilmes, { paddingTop: 100, paddingBottom: 40 }]}>
                {filmes.map((filme, index) => (
                    <FilmeCard key={index} {...filme} />
                ))}
                </ScrollView>
            )}

            <View style={styles.cabecalho}>
                <Text style={styles.tituloCabecalho}>
                    Catalogo    
                </Text>
            </View>
        </ImageBackground>
    </SafeAreaView>
  );
}