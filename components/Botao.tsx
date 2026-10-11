import { Pressable, StyleSheet, Text } from "react-native";

interface BotaoProps {
    texto: string
    onPress: () => void
    cor?: string
}

export default function Botao({ texto, onPress, cor = '#2563EB' }: BotaoProps) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.botao,
                pressed && styles.botaoPressionado,
                {backgroundColor: cor}
            ]}
            onPress={onPress}
        >
            <Text style={styles.texto}>{texto}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    botao: {
        borderRadius: 25,
        width: '90%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: '#FFF',
        fontSize: 25,

    },
    botaoPressionado: {
        opacity: 0.8
    }
})