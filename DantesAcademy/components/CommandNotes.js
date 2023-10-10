import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, TextInput, Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import addNewNote from '../helperFunctions/addNewNote';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function CommandNotes(props) {
  const [toAddNote, setToAddNote] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [commandNotesSnapshot, setCommandNotesSnapshot] = useState([]);
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    getSnapshot();
  }, []);

  function getSnapshot() {
    let userId = auth().currentUser.uid;
    let listOfSnaps = [];
    let collectionRef = firestore().collection(
      `users/${userId}/${props.thisCommand}Notes`,
    );
    collectionRef.onSnapshot(snapshot => {
      setCommandNotesSnapshot(snapshot);
    });
  }

  useEffect(() => {
    createNoteViews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commandNotesSnapshot]);

  function createNoteViews() {
    let viewsList = [];
    let count = 1;
    commandNotesSnapshot.forEach(snapshot => {
      let data = snapshot;
      data = data._data;
      viewsList.push(
        <View
          key={count++}
          style={{borderBottomColor: 'gray', borderBottomWidth: 1}}>
          <Text
            style={{color: 'gray', fontSize: 17, padding: 8, width: '100%'}}>
            {data.noteText}
          </Text>
        </View>,
      );
    });
    setAllNotes(viewsList);
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
    addNewNote(getNoteDocData(), props.thisCommand);
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
      <View style={{flex: 1, padding: 20}}>
        <Text style={{color: 'gray', fontSize: 21, width: '100%'}}>
          Command "{props.thisCommand}" Notes
        </Text>
        {AddNoteButton}
        <View style={{flex: 1}}>
          {allNotes.map(note => {
            return note;
          })}
        </View>
      </View>
    );
  } else {
    return (
      <View style={{flex: 1}}>
        <Text style={{color: 'gray', padding: 20}}>New Note Screen</Text>
        <View
          style={{
            // borderWidth: 3,
            flex: 1,
            // backgroundColor: 'rgba(0,0,0,.4)',
            // borderBottomRightRadius: 20,
            // borderBottomLeftRadius: 20,
            borderRadius: 20,
          }}>
          <TextInput
            style={{
              color: 'gray',
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

function getTimeStamp() {
  let timestamp = new Date().getTime();
  return timestamp;
}
