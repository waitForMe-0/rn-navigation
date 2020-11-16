import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
class Detail extends Component {
  render() {
    // const {
    //   navigation,
    //   route: {params},
    // } = this.props;
    // console.log(params);
    return (
      <>
        <Text>Detail</Text>
        {/* <Button
          title="跳转Product"
          onPress={() => {
            navigation.setOptions({title: '更新product'});
          }}
        /> */}
      </>
    );
  }
}
export default Detail;
