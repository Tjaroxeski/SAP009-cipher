const cipher = {
  encode,
  decode
};

export default cipher;

function encode(offset, string) {
  try {
    if (
      offset === "" ||
      string === "" ||
      typeof string !== "string" ||
      offset === null ||
      offset === "0" ||
      isNaN(offset) ||
      parseInt(offset) < 1 ||
      parseInt(offset) > 99
    ) {
      throw new TypeError(
        "Por favor, preencha todos os campos obrigatórios de acordo com as regras de funcionalidades."
      );
    }

    const chave = parseInt(offset);
    const tamanhoAlfabeto = 26;

    let senhaEncriptada = "";

    for (let i = 0; i < string.length; i++) {
      const char = string[i];

      if (char.match(/[a-zA-Z]/)) {
        const isUpperCase = char === char.toUpperCase();
        const primeiraLetra = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);

        const tabela = (char.charCodeAt(0) - primeiraLetra + chave) % tamanhoAlfabeto + primeiraLetra;
        const letra = String.fromCharCode(tabela);
        senhaEncriptada += letra;
      } else {
        senhaEncriptada += char;
      }
    }

    return senhaEncriptada;
  } catch (e) {
    return e.message;
  }
}

function decode(offset, string) {
  try {
    if (
      offset === "" ||
      string === "" ||
      typeof string !== "string" ||
      offset === null ||
      offset === "0" ||
      isNaN(offset) ||
      parseInt(offset) < 1 ||
      parseInt(offset) > 99
    ) {
      throw new TypeError(
        "Por favor, preencha todos os campos obrigatórios de acordo com as regras de funcionalidades."
      );
    }

    const chave = parseInt(offset);
    const tamanhoAlfabeto = 26;

    let senhaDecriptada = "";

    for (let i = 0; i < string.length; i++) {
      const char = string[i];

      if (char.match(/[a-zA-Z]/)) {
        const isUpperCase = char === char.toUpperCase();
        const primeiraLetra = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);

        const tabela = (char.charCodeAt(0) - primeiraLetra - chave + tamanhoAlfabeto) % tamanhoAlfabeto + primeiraLetra;
        const letra = String.fromCharCode(tabela);
        senhaDecriptada += letra;
      } else {
        senhaDecriptada += char;
      }
    }

    return senhaDecriptada;
  } catch (e) {
    return e.message;
  }
}
