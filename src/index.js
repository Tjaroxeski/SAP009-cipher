import cipher from "./cipher";
// Função para codificar um texto usando a cifra de César
function codificarCifra(texto, deslocamento) {
  // Variável para armazenar o resultado codificado
  let resultado = "";
  
  // Loop para percorrer cada caractere do texto
  for (let i = 0; i < texto.length; i++) {
    // Captura o caractere atual
    const letra = texto[i];
  
    // Verifica se o caractere é uma letra maiúscula
    if (letra >= "A" && letra <= "Z") {
      // Calcula o código ASCII da letra atual em relação à letra "A"
      const codigoLetra = letra.charCodeAt(0) - "A".charCodeAt(0);
  
      // Aplica o deslocamento e assegura que o resultado permanece no alfabeto (26 letras)
      const codigoCodificado = (codigoLetra + deslocamento) % 26;
  
      // Converte o código codificado de volta para um caractere e concatena ao resultado
      const letraCodificada = String.fromCharCode(codigoCodificado + "A".charCodeAt(0));
      resultado += letraCodificada;
    }
    // Verifica se o caractere é uma letra minúscula
    else if (letra >= "a" && letra <= "z") {
      // Calcula o código ASCII da letra atual em relação à letra "a"
      const codigoLetra = letra.charCodeAt(0) - "a".charCodeAt(0);
  
      // Aplica o deslocamento e assegura que o resultado permanece no alfabeto (26 letras)
      const codigoCodificado = (codigoLetra + deslocamento) % 26;
  
      // Converte o código codificado de volta para um caractere e concatena ao resultado
      const letraCodificada = String.fromCharCode(codigoCodificado + "a".charCodeAt(0));
      resultado += letraCodificada;
    }
    // Se o caractere não for uma letra, mantenha-o inalterado
    else {
      resultado += letra;
    }
  }
  
  // Retorna o resultado final
  return resultado;
}
  

  