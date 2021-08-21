import React from 'react';
import { TextInputProps } from 'react-native';
import { Control } from 'react-hook-form';

import { Input } from '../Input';

import { Container } from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
}

export function InputForm() {
  return (
    <Container>
      <Input />
    </Container>
  );
}
