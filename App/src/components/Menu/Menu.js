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
      {map(accountMenu, (menu) => (
        <List.Item
          key={menu.title}
          titleStyle={styles.title} // Aplica el estilo al título
          descriptionStyle={styles.description} // Aplica el estilo a la descripción
          style={styles.listItem}
          title={menu.title}
          description={menu.description}
          left={props => <List.Icon {...props} icon={menu.leftIcon} color='#70d208' />}
          onPress={() => navigation.navigate(menu.screen)}
        />
      ))}
    </List.Section>
  )
}
