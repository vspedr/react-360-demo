import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

export default class react_360_demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Not clicked'
    }
  }

  handleClick() {
    this.setState({
      text: 'clicked',
    })
  }
  render() {
    const { text } = this.state;
    return (
      <View style={styles.panel}>
        <VrButton style={styles.greetingBox} onClick={() => this.handleClick()}>
          <Text style={styles.greeting}>
            {text}
          </Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('react_360_demo', () => react_360_demo);
