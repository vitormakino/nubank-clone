import React from 'react';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import { Container, Top, Logo, Title } from './styles';

import logo from '../../assets/Nubank_Logo.png';

export default function Main() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />  
        <Title>Vitor</Title>
      </Top> 
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  );
};