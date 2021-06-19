import React, { useState, useRef, useLinking, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar
} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'

import i18n from '../../../i18n/i18n'
import { auth as AuthActions } from '../../../services/Auth/AuthActions'
import { user as UserActions } from '../../../services/User/UserActions'
import { devices as DeviceActions } from '../../../services/Device/DeviceActions'

const Home = () => {

  const { colors } = useTheme();
  const dispatch = useDispatch()
  const { userData, loading } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(UserActions.getUser())
    if (userData) {
      dispatch(DeviceActions.getDevices(userData.data.idUsuario))
    }
  }, [dispatch, userData]);

  const logout = () => {
    dispatch(AuthActions.logout())
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#4F8CFB' barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>{i18n.t('title.welcome')}</Text>
        {userData && (<Text style={styles.text_header}>{userData.data.name} {userData.data.lastName} </Text>
        )}</View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, {
          backgroundColor: colors.background
        }]}
      >

        <Container style={[styles.footer, {
          backgroundColor: colors.background
        }]}>
          <Content>
            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: 'https://img.icons8.com/fluent-systems-regular/452/device-shop--v1.png' }} />
                </Left>
                <Body>
                  <Text>Sankhadeep</Text>
                  <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
          </Content>
        </Container>

        <View style={styles.button} >
          <TouchableOpacity
            onPress={logout}
            style={styles.signIn}
          >
            <LinearGradient
              colors={['#4F8CFB', '#4F8CFB']}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, {
                color: '#fff'
              }]}>{i18n.t('button.logout')}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F8CFB'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default Home