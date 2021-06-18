import React, { useState, useRef, useLinking, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar, Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import { createForm } from 'rc-form';
import { useDispatch, useSelector } from 'react-redux'

import i18n from '../../../i18n/i18n'
import { auth as AuthActions } from '../../../services/Auth/AuthActions'

const Login = ({ form }) => {

  const { colors } = useTheme();
  const dispatch = useDispatch()
  const { getFieldDecorator, setFieldsValue } = form;
  const { loading, error } = useSelector(state => state.auth)
  const [isFormError, setFormError] = useState()

  useEffect(() => {
    if (error.login) {
      Alert.alert(
        i18n.t('error.login.ERROR_LOGIN'),
        i18n.t('error.login.ERROR_MSG'),
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
  });

  const signIn = (e) => {
    if (!loading) {
      form.validateFields({ suppressWarning: true }, (error, value) => {
        if (!error) {
          setFormError(false)
          dispatch(AuthActions.login(value.username, value.password))
        }
        else
          setFormError(true)
      });
    }
  }


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#4F8CFB' barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>{i18n.t('title.welcome')}</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, {
          backgroundColor: colors.background
        }]}
      >
        <Text style={[styles.text_footer, {
          color: colors.text
        }]}>{i18n.t('input.username')}</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color={colors.text}
            size={20}
          />
          {getFieldDecorator('username', { rules: [{ required: true }] })(
            <TextInput
              placeholder={i18n.t('input.username')}
              placeholderTextColor="#666666"
              style={[styles.textInput, {
                color: colors.text
              }]}
              onChangeText={username => setFieldsValue({ username })}
              autoCapitalize="none"
            />)}
        </View>
        <Text style={[styles.text_footer, {
          color: colors.text,
          marginTop: 35
        }]}>{i18n.t('input.pass')}</Text>
        <View style={styles.action}>
          <Feather
            name="lock"
            color={colors.text}
            size={20}
          />
          {getFieldDecorator('password', { rules: [{ required: true }] })(
            <TextInput
              placeholder={i18n.t('input.pass')}
              placeholderTextColor="#666666"
              style={[styles.textInput, {
                color: colors.text
              }]}
              autoCapitalize="none" secureTextEntry
              onChangeText={password => setFieldsValue({ password })}
            />)}
          <TouchableOpacity
          >
          </TouchableOpacity>
        </View>
        <View style={styles.button} >
          <TouchableOpacity
            onPress={signIn}
            style={styles.signIn}
          >
            <LinearGradient
              colors={['#4F8CFB', '#4F8CFB']}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, {
                color: '#fff'
              }]}>{i18n.t('button.login')}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

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

export default createForm()(Login)