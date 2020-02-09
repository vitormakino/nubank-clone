import React from 'react';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import { Container, Text, Content, Card, CardHeader, CardContent, CardFooter, Description, Title, Annotation } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />
        
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>

          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 18.567,23</Description>
          </CardContent>

          <CardFooter>
            <Annotation>
              Transferência de R$ 40,00 recebida de Vitor às 18:00h
            </Annotation>
          </CardFooter>
        </Card>

      </Content>

      <Tabs />
    </Container>
  );
};