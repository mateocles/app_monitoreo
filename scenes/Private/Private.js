import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import { NativeRouter, Route } from "react-router-native";

import home from './Home/Home'

export default function Private() {

  return (
    <NativeRouter>
      <Container>
        <Route exact path="/" component={home} />
      </Container>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
