import { Text, View, TextInput, TouchableOpacity } from "react-native"
import { styles } from './styles'
import { useState } from "react"

export default function Home () {

    const [ userLis, setUserList ] = useState<string[]>([])

    const handleParticipantAdd = () => {
        console.log('ADDED NEW PARTICIPANT')
    }

    return (
        <View style={styles.container}>

            <Text style={styles.eventName}> Nome do evento </Text>

            <Text style={styles.eventDate}> Sexta, 4 de novembro de 2022 </Text>

            <View style={styles.formContainer}>

                <TextInput 
                    style={styles.input} 
                    placeholder="nome do evento"
                    placeholderTextColor="#6b6b6b"
                    keyboardType="email-address"
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}> + </Text>
                </TouchableOpacity>
                
            </View>

        </View>
    )

}