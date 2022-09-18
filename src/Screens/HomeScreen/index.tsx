import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Auth0 from 'react-native-auth0';
import { ScrollView } from 'react-native-gesture-handler';

import { UserData } from '../../Components'


import { fetchUserData } from '../../Services/User';
import { setUserData } from '../../Store/User'
import styles from './index.styles'

const auth0 = new Auth0({ domain: 'dev--ftuzfed.us.auth0.com', clientId: 'smb2OtWHomD8gIy94Bq1eusqSSfYzO8q' })

const HomeScreen = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user?.userData)
  const [accessToken, setAccessToken] = useState(null)
  const getUserInfo = () => {

  }
  const login = () => {
    auth0
      .webAuth
      .authorize({ scope: 'openid profile email' })
      .then(credentials => {
        setAccessToken(credentials.accessToken)
        dispatch(fetchUserData(credentials.accessToken))
      })
      .catch(error => console.log(`Login auth0 error: `, error))
  }

  const logout = () => {
    Alert.alert(
      'Logged out!'
    );
    setAccessToken(null)
    dispatch(setUserData())
  }

  const renderUserData = () => {
    return !!userData && Object.keys(userData).map((userDataVal) => (<UserData label={userDataVal} value={userData[userDataVal]} />))
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>
          Welcome {`${!!userData?.name ? userData?.name : ''}`}
        </Text>
        {renderUserData()}
        {
          !userData ?
            <TouchableOpacity style={styles.loginBtn} onPress={login}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.loginBtn} onPress={logout}>
              <Text style={styles.loginText}>LOGOUT</Text>
            </TouchableOpacity>
        }
      </View>
    </ScrollView>
  )
}

export default HomeScreen