import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface BotonCalcProps {
  texto: string;
  color?: string;
  anchor?: boolean;
  action: (numeroTexto: string) => void;
}

const BotonCalc = ({
  texto,
  color = '#2D2D2D',
  anchor = false,
  action
}: BotonCalcProps) => {
  return (
    <TouchableOpacity
    onPress={() => action(texto)}
    >
      <View
        style={[
          styles.boton,
          {backgroundColor: color, width: anchor ? 150 : 80},
        ]}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotonCalc;
