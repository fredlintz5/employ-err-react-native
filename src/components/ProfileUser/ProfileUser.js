import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  TextInput,
  Image 
} from 'react-native';


class ProfileUser extends Component {
  state = {
    title: "",
    email: "",
    website: "",
    bio: ""
  }

  updateProfile = () => {
    console.log("Profile Update Button Pressed!")
  }

  render() {
    return (
      <View style={styles.profileContainer}>
        <Image 
          style={{width: 200, height: 200, borderRadius: 100}}
          source={{uri: 'https://www.members.eyp.org/system/files/default_images/default-avatar_7.png'}}/>
        
        <Text style={styles.displayName}>Kip Dynamite</Text>

        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({title: text})}
          placeholder='Title'
          value={this.state.title}/>

        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({email: text})}
          placeholder='Email'
          value={this.state.email}/>

        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({website: text})}
          placeholder='Website'
          value={this.state.website}/>

        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({bio: text})}
          placeholder='Bio'
          value={this.state.bio}/>

        <Button 
          style={styles.updateButton}
          onPress={this.updateProfile}
          title="Update Profile"/>
      </View>  
    );
  }
}


export default ProfileUser;


const styles = StyleSheet.create({
  profileContainer: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center', 
    width: '100%', 
    backgroundColor: 'rgba(0,0,0,.93)'
  },
  displayName: {
    color: 'rgb(247,247,247)',
    fontSize: 20, 
    fontWeight: '500',
    marginBottom: 20, 
    marginTop: 20, 
    textAlign: 'center'
  },
  textInput: {
    height: 40, 
    width: 250, 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: '#fff',
    marginBottom: 10
  },
  updateButton: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    color: "#EE5F46"
  }
});

// <h3 style={{color: "#F7F7F7"}}>"Kip Dynamite"</h3>          
        
// <input className="form-control" type="text" id="employee-title" placeholder="Update your Title..." />

// <input className="form-control" type="text" id="employee-email" placeholder="Update your email..." />

// <input className="form-control" type="text" id="employee-website" placeholder="Update your website url" />

// <textarea className="form-control" rows={3} id="employee-bio" placeholder="Insert Catchy Bio here..."/>




