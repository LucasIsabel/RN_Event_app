import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from './styles'
import { useState } from "react"
import { Participant } from "../../components/Participant"

export default function Home () {

    const today  = new Date();

    const [ participantList, setParticipantList ] = useState<string[]>([])

    const [ participant, setParticipant ] = useState<string>('')

    const handleParticipantAdd = (name: string) => {

       if (participantList.includes(name)) {
          return Alert.alert("Participant", "This user is already on this event")
       }

       if (name !== '') {
           setParticipantList((old) => [ ...old, name.trim()])    
           setParticipant('')
       }

    }

    const handleRemoveParticipant = (name: string) => {

        return Alert.alert("Remove ?", `Remove participant ${name} ?`, [
            {
                text: "Yes",
                onPress: () => setParticipantList((list => list.filter(data => data !== name)))
            },
            {
                text: "No",
                style: "cancel"
            }
        ])

    }

    return (
        <View style={styles.container}>

            <Text style={styles.eventName}> My Event </Text>

            <Text style={styles.eventDate}> { today.toLocaleDateString('en-US', {
                day: 'numeric',
                weekday: 'long',
                month: 'long',
                year: 'numeric'
            })} </Text>

            <View style={styles.formContainer}>

                <TextInput 
                    style={styles.input} 
                    placeholder="Participant"
                    placeholderTextColor="#6b6b6b"
                    onChangeText={setParticipant}
                    value={participant}
                />

                <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd(participant)}>
                    <Text style={styles.buttonText}> + </Text>
                </TouchableOpacity>
                
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={participantList}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant key={item} onRemove={() => handleRemoveParticipant(item)} name={item} />
                )}
                ListEmptyComponent={(<Text style={styles.listEmptyText}> There is no participants on this event. </Text>)}
            />

        </View>
    )

}