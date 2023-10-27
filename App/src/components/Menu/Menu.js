import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Menu.style'
import { List } from 'react-native-paper'
import { map } from 'lodash'
import { useNavigation } from "@react-navigation/native"
import {accountMenu} from "./menu.data" 


export default function Menu() {

  const navigation = useNavigation()

  return (
    <List.Section>
      <List.Subheader>Mi cuenta</List.Subheader>
      {map(accountMenu, (menu) => (
        <List.Item
          key={menu.title}
          title={menu.title}
          description={menu.description}
          left={props => <List.Icon {...props} icon={menu.leftIcon} />}
          onPress={() => navigation.navigate(menu.screen)}
        />
      ))}
    </List.Section>
  )
}