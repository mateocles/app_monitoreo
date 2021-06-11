import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { useDispatch } from 'react-redux';

import i18n from '../../../i18n/i18n'
import { auth as AuthActions } from '../../../services/Auth/AuthActions'

const Home = () => {

  const dispatch = useDispatch()

  const logout = () => {
    dispatch(AuthActions.logout())
  }

  return (
    <Container>
      <Header>
        <Button onPress={logout}>
          <Text>{i18n.t('button.logout')}</Text>
        </Button>
      </Header>
    </Container>
  )
}

export default Home