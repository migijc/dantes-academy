import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, TextInput, Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import addNewNote from '../helperFunctions/addNewNote';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function CommandNotes(props) {
  const [toAddNote, setToAddNote] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [commandNotesSnapshot, setCommandNotesSnapshot] = useState(null);

  useEffect(() => {
    getSnapshot();
  }, []);

  async function getSnapshot() {
    let userId = auth().currentUser.uid;
    let collectionRef = firestore().collection(
      `users/${userId}/${props.thisCommand}Notes`,
    );
    let docs = await collectionRef.get();
    console.log(docs);
    docs.forEach(doc => {
      console.log(doc.data());
    });
  }

  function getTimeStamp() {
    let timestamp = new Date().getTime();
    return timestamp;
  }

  function getNoteDocData() {
    let docData = {
      noteText: newNote,
      noteTitle: props.title || null,
      submissionTimeStamp: getTimeStamp(),
    };

    return docData;
  }

  function addDoc() {
    addNewNote(getNoteDocData(), props.thisCommand.toLowerCase());
  }

  let AddNoteButton = (
    <Pressable
      onPress={() => {
        setToAddNote(!toAddNote);
      }}>
      {plusIcon}
    </Pressable>
  );

  if (!toAddNote) {
    return (
      <View style={{flex: 1, backgroundColor: 'transparent', padding: 20}}>
        <Text style={{color: 'gray', fontSize: 21, width: '100%'}}>
          Command "{props.thisCommand}" Notes
        </Text>
        {AddNoteButton}
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Text style={{color: 'gray', fontSize: 16, width: '100%'}}>
            Notes Go Here
          </Text>
          <Text style={{color: 'gray', fontSize: 16, width: '100%'}}>
            {/* {props.thisCommand} */}
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={{flex: 1}}>
        <Text style={{color: 'white'}}>New Note Screen</Text>
        <View
          style={{
            borderWidth: 3,
            flex: 1,
            backgroundColor: 'rgba(0,0,0,.4)',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}>
          <TextInput
            style={{
              color: 'white',
              width: '100%',
            }}
            placeholderTextColor="gray"
            placeholder="Add text here"
            multiline
            onChangeText={e => setNewNote(e)}
          />
          <Button title="Add Note" onPress={addDoc} />
        </View>
      </View>
    );
  }
}
const plusIcon = (
  <AntDesign
    name="plus"
    color="gray"
    size={19}
    style={{position: 'absolute', top: -25, right: 0}}
  />
);
