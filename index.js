//Import a library to create a component
import React from 'react';
import { AppRegistry, Text } from 'react-native';

// Create a component
const App = () => <Text>Some text</Text>;

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
