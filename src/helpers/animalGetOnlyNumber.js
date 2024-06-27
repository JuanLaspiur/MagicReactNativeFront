function obtenerNumerosDespuesGuion(str) {
    const partes = str.split('-');
  
    const numeroStr = partes[1];
  
    let numero = numeroStr.substring(0, 2);
  
    if (numero.charAt(0) === '0') {
      numero = numero.charAt(1);
    }
  
    return parseInt(numero, 10);
  }
  
  export { obtenerNumerosDespuesGuion };