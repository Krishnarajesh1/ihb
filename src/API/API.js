import {React,useState,useEffect} from 'react'
import { View, Text, FlatList } from 'react-native'

import GlobalStyle from '../assets/styles/GlobalStyle'
import axios from 'axios'


const API = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setData(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
        <Text>{item.username}</Text>
        <Text>{item.website}</Text>
      </View>
    )
  }
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default API