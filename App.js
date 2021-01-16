import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import PowerScreen from './Screens/Power';

class App extends React.Component {
 
  render(){
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <PowerScreen title="Functional Threshold Power Calcultor"
                       description="Descript FTP blah blah bullshit"
                       background="https://instagram.fyyz1-1.fna.fbcdn.net/v/t51.2885-15/e35/20067310_333586550418134_8405391233249181696_n.jpg?_nc_ht=instagram.fyyz1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=V_gbc4Q9bL8AX8fs2sQ&se=7&tp=1&oh=ef1e1ad1c79bc838ed038db15932acf9&oe=602DCE91" />
        </SafeAreaView>
      </>
    );
  }

}
export default App;
