'use strict';

let React = require('react');
let {
   View,
   Text,
   ActivityIndicator,
   StyleSheet
} = require('react-native');
let styles = require('./styles');

module.exports = React.createClass({
   render() {
      return (
         <View style={styles.loadingContainer}>
            <View style={styles.spinnerContainer}>
              <ActivityIndicator
               animating={true}
               size='large'
               color="#fff"
              />
            </View>
            <Text style={styles.loadingText}>{this.props.text}</Text>
         </View>
      );
   }
});
