import { View } from "react-native";
import { Card, Text, Button } from "react-native-paper";
import React from "react";

export default function FavotiteScreen() {
  return (
    <View>
      <Card>
        <Card.Title
          title="Card de prueba"
        />
        <Card.Content>
          <Text variant="titleLarge">
            learn more about how to build great products with React Native.
          </Text>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
