import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Feather from 'react-native-vector-icons/Feather';

export default function ProfileScreen(props) {
  const [userSessions, setUserSessions] = useState(null);
  let userId = auth().currentUser.uid;
  let userCollection = firestore().collection(`users/${userId}/sessions`);

  async function getUserSessions() {
    let docList = [];
    let result = await userCollection.get();
    let docs = result.docs;
    docs.forEach(doc => {
      let data = doc.data();
      docList.push(data);
    });
    setUserSessions(docList);
  }

  useEffect(() => {
    getUserSessions();
  }, []);

  if (userSessions) {
    return (
      <View style={styles.mainView}>
        <View style={styles.headerSection}>
          <Text style={styles.nameText}>Miguel</Text>
          <Image source={require('../test1.jpg')} style={styles.profileImage} />
        </View>

        <View style={styles.footerSection}>
          <View style={styles.activityWrapper}>
            <Text style={styles.activityTitle}>Sessions</Text>
            <ScrollView>
              {userSessions.map(session => {
                return (
                  <View key={Math.random() * 2} style={styles.sessionContainer}>
                    <Text style={styles.sessionTitle}>
                      {session.sessionDate.toString()}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <View style={styles.activityWrapper}>
            <Text style={styles.activityTitle}>Earned Badges</Text>
            <Text style={{color: 'rgba(0,0,0, .55)', fontWeight: 500}}>COMING SOON</Text>
          </View>
        </View>

        <Pressable
          onPress={() => {
            props.navigation.navigate('Menu Screen');
          }}
          style={styles.menuIconContainer}>
          {menuIcon}
        </Pressable>
      </View>
    );
  }
}

const menuIcon = <Feather name="menu" color="#fff" size={28} />;

let styles = StyleSheet.create({
  mainView: {
    padding: 20,
    backgroundColor: '#1b212e',
    flex: 1,
    // justifyContent: 'space-around',
    alignItems: 'center',
  },

  headerSection: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.6,
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },

  nameText: {
    color: 'white',
    fontWeight: 500,
    paddingBottom: 15,
    fontSize: 20,
  },

  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 9000,
  },

  footerSection: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
  },

  activityWrapper: {
    backgroundColor: 'rgba(0, 118, 110, 1)',
    width: '100%',
    padding: 25,
    borderRadius: 15,
    // maxHeight: '35%',
    height: '40%',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255, .1)',
  },

  sessionContainer: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255, .15)',
    padding: 6,
    margin: 1,
    borderRadius: 900,
  },

  activityTitle: {
    // paddingTop: 80,
    fontSize: 21,
    fontWeight: 500,
    // paddingTop: 10,
    paddingBottom: 10,
    color: 'white',
  },

  menuIconContainer: {
    position: 'absolute',
    right: 0,
    padding: 20,
  },

  sessionTitle: {
    fontSize: 14,
    paddingLeft: 10,
    color: 'rgba(0,0,0, .55)',
    fontWeight: 700,
  },
});
