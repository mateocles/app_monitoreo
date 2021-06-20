import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  StatusBar
} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button
} from 'native-base';
import { Spinner } from 'native-base';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'

import i18n from '../../../i18n/i18n'
import { auth as AuthActions } from '../../../services/Auth/AuthActions'
import { devices as DeviceActions } from '../../../services/Device/DeviceActions'

const Home = () => {

  const { colors } = useTheme();
  const dispatch = useDispatch()

  const { user, token } = useSelector(state => state.auth)
  const { devices, loading } = useSelector(state => state.devices)

  useEffect(() => {
    dispatch(DeviceActions.getDevices(user.data.idUsuario, token))
  }, [dispatch, user]);

  const logout = () => {
    dispatch(AuthActions.logout())
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#4F8CFB' barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>{i18n.t('title.welcome')}</Text>
        {user && (<Text style={styles.text_header}>{user.data.name} {user.data.lastName} </Text>
        )}</View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, {
          backgroundColor: colors.background
        }]}
      >

        {loading && <Spinner color='blue' />}
        {devices?.map((item) => (
          <TouchableOpacity>
            <View style={styles.row}>
              <Thumbnail square source={{ uri: 'https://img.icons8.com/fluent-systems-regular/452/device-shop--v1.png' }} style={styles.image} />
              <View>
                <View style={styles.nameContainer}>
                  <Text
                    style={styles.nameTxt}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.Dispositivo}
                  </Text>
                  <Text style={styles.mblTxt}>{item.Estado === 1? 'Activo': 'Inactivo'}</Text>
                </View>
                <View style={styles.emailContainer}>
                  <Text style={styles.emailTxt}>Mac:{item.Mac}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#DCDCDC",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    padding: 10,
  },
  image: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: "600",
    color: "#222",
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: "200",
    color: "#777",
    fontSize: 13,
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  emailTxt: {
    fontWeight: "400",
    color: "#008B8B",
    fontSize: 12,
    marginLeft: 15,
  },
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