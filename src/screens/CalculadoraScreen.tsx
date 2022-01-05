import React from 'react';
import {Text, View} from 'react-native';
import BotonCalc from '../components/BotonCalc';
import useCalculadora from '../hooks/useCalculadora';
import {styles} from '../theme/appTheme';

const CalculadoraScreen = () => {
  const {
    numeroAnterior,
    numero,
    clear,
    positivoNegativo,
    btnDelete,
    btnDividir,
    numbers,
    btnMultiplicar,
    btnSumar,
    btnRestar,
    calcular,
    
  } = useCalculadora();
  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.resultado}>
        {numero}
      </Text>

      <View style={styles.fila}>
        {/* BOTON */}
        <BotonCalc action={clear} texto="C" color="#9B9B9B" />
        <BotonCalc action={positivoNegativo} texto="+/-" color="#9B9B9B" />
        <BotonCalc action={btnDelete} texto="del" color="#9B9B9B" />
        <BotonCalc action={btnDividir} texto="/" color="#FF9427" />
      </View>

      <View style={styles.fila}>
        {/* BOTON */}
        <BotonCalc texto="7" action={numbers} />
        <BotonCalc texto="8" action={numbers} />
        <BotonCalc texto="9" action={numbers} />
        <BotonCalc texto="x" action={btnMultiplicar} color="#FF9427" />
      </View>

      <View style={styles.fila}>
        {/* BOTON */}
        <BotonCalc texto="4" action={numbers} />
        <BotonCalc texto="5" action={numbers} />
        <BotonCalc texto="6" action={numbers} />
        <BotonCalc texto="-" action={btnRestar} color="#FF9427" />
      </View>

      <View style={styles.fila}>
        {/* BOTON */}
        <BotonCalc texto="1" action={numbers} />
        <BotonCalc texto="2" action={numbers} />
        <BotonCalc texto="3" action={numbers} />
        <BotonCalc texto="+" action={btnSumar} color="#FF9427" />
      </View>

      <View style={styles.fila}>
        {/* BOTON */}
        <BotonCalc texto="0" action={numbers} anchor />
        <BotonCalc texto="." action={numbers} />

        <BotonCalc texto="=" action={calcular} color="#FF9427" />
      </View>

      {/* GRIS: #2d2d2d */}
      {/* Naranja #FF9427 */}
    </View>
  );
};

export default CalculadoraScreen;
