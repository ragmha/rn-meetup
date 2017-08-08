import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { fetchMeetups } from './constants/api';

class App extends React.Component {
  static defaultProps = {
    fetchMeetups,
  };

  state = {
    loading: false,
    meetups: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const data = await this.props.fetchMeetups();
    console.log('Loading Data', data);
    this.setState({ loading: false, meetups: data.meetups });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    if (!this.state.meetups) {
      return (
        <View style={styles.container}>
          <Text>No meetups yo!</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>There is some meetup</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text>Meetup</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
