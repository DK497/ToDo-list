import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext'
import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';


const IndexScreen = ({ navigation }) => {
  const { state, getbps, delbp } = useContext(Context)

  useEffect(() => {
    getbps()
    const listener = navigation.addListener('didFocus', () => {
      getbps()
    })

    return () => {
      listener.remove()
    }
  }, [])


  return (
    <View>
      <FlatList data={state}
        keyExtractor={(i) => i.t}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
              <View style={styles.row}><Text style={styles.title}>{item.t}-----{item.id}</Text>
                <TouchableOpacity onPress={() => delbp(item.id)}>
                  <Feather style={styles.icons} name='trash' />
                </TouchableOpacity></View>
            </TouchableOpacity>
          )
        }
        } />

    </View>
  );
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'ToDOList',
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <AntDesign name="plus" size={24} color="black" />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20, paddingHorizontal: 8,
    borderBottomWidth: 1,

    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icons: {
    fontSize: 24, marginRight: 5
  }
})

export default IndexScreen;