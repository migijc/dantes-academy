import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function NewRatingContainer(props) {
  let [selectedRating, setSelectedRating] = useState(-1);
  //holding state of <Pressables/>
  const [listOfViews, setListOfViews] = useState(null);

  function handleRatingClick(index) {
    setSelectedRating(index);
  }

  useEffect(() => {
    if (selectedRating >= 0) {
      setTimeout(() => {
        return props.parentRef.current.scrollTo({
          x: props.screenWidth,
          animate: true,
        });
      }, 350);
      props.setState(selectedRating + 1);
    }
    let isLessThanOrEqual = currentIndex => {
      return currentIndex <= selectedRating ? '#ad7934' : 'rgb(205, 205, 205)';
    };
    let list = [];
    for (let i = 0; i < 5; i++) {
      let newView = (
        <Pressable
          key={i}
          style={{margin: 10}}
          onPress={() => handleRatingClick(i)}>
          <Text>
            <FontAwesome name="star" color={isLessThanOrEqual(i)} size={40} />
          </Text>
        </Pressable>
      );
      list.push(newView);
    }
    setListOfViews(list);
  }, [selectedRating, props]);

  if (listOfViews) {
    return (
      <View style={styles.ratingsContainer}>
        {listOfViews.map(item => {
          return item;
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ratingsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
