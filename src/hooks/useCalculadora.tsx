import {useRef, useState} from 'react';
enum Operadores {
    sumar,
    resta,
    multiplicar,
    dividir,
  }
const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const clear = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const numbers = (num: string) => {
    // verificar si ya existe un punto
    if (num === '.' && numero.includes('.')) return;
    // verificar si el numero es 0
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //PUNTO DECIMAL
      if (num === '.') {
        setNumero(numero + num);

        //evaluar si es otro cero y hay un punto
      } else if (num === '0' && numero.includes('.')) {
        setNumero(numero + num);
        //EVALUAR  SI ES DIFEERENTE DE 0 Y NO TIENE PUNTO
      } else if (num !== '0' && !numero.includes('.')) {
        setNumero(num);
        //evitar 0000
      } else if (num === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + num);
      }
    } else {
      setNumero(numero + num);
    }
  };

  const btnDelete = () => {
    let negativo = '';
    let numeroTemp = numero;
    if (numero.includes('-')) {
      negativo = '-';
      numeroTemp = numero.slice(1);
    }

    if (numeroTemp.length > 1) {
      setNumero(negativo + numeroTemp.slice(0, -1));
    } else {
      setNumero('0');
    }

    // setNumero(numero.slice(0, -1));
  };

  const changeNumber = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDividir = () => {
    changeNumber();
    ultimaOperacion.current = Operadores.dividir;
  };

  const btnMultiplicar = () => {
    changeNumber();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnSumar = () => {
    changeNumber();
    ultimaOperacion.current = Operadores.sumar;
  };

  const btnRestar = () => {
    changeNumber();
    ultimaOperacion.current = Operadores.resta;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);

        break;

      case Operadores.resta:
        setNumero(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;

      case Operadores.dividir:
        setNumero(`${num2 / num1}`);
        break;
    }

    setNumeroAnterior('0');
  };
  return {
    btnDividir,
    btnMultiplicar,
    btnSumar,
    btnRestar,
    numbers,
    btnDelete,
    clear,
    positivoNegativo,
    calcular,
    numero,
    numeroAnterior,
  };
};

export default useCalculadora;
