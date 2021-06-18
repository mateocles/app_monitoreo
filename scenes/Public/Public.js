
import React, { useState, useRef, useLinking, useEffect } from 'react';
import { Container } from 'native-base';
import { NativeRouter, Route } from "react-router-native";

import Login from './Login/Login';

const Public = ({ }) => {

  useEffect(() => {

  })

  return (
    <NativeRouter>
      <Container>
        <Route exact path="/" component={Login} />
      </Container>
    </NativeRouter>
  )
}

export default Public