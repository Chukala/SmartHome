import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

const Room = (props) => {
    console.log(props);
    return(
        <View style={styles.imgContainer}>
            <Image 
                source={props.imagePath}
                style={styles.img}
            />
           <Text style={styles.subTitle}>{props.title}</Text>
        </View>

    )};

 const styles = StyleSheet.create({
  imgContainer: {
    display: 'flex',
    flexFlow: 'coulumn wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: '10px',
    padding: '10px',
    backgroundColor: '#2596be',
  },
   subTitle:{
    fontWeight: '500',  
  },
  img: {
    resizeMode: 'contain',
    width: 80,
    height: 100,
  },
});   

export default Room;