import { Stack } from 'expo-router'

export default function Layout(){

    return(
        <Stack>
            <Stack.Screen
            name="index"
            options={{
                headerShown: false
            }}
            />

            <Stack.Screen
            name="catalogo"
            options={{
                headerShown: false
            }}
            />

            <Stack.Screen
            name="detalhes"
            options={{
                headerShown: false
            }}
            />

            <Stack.Screen
            name="sobre"
            options={{
                headerShown: false
            }}
            />
        </Stack>
    )
}