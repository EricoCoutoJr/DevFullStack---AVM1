const fs = require('fs-extra').promises;

// Nessa função, utilizamos o método readFile para ler o conteúdo
// do arquivo ddatabase.json e o método JSON.parse para converter
// o conteúdo em um objeto JavaScript.
// Em seguida, retornamos os dados lidos do arquivo.

export async function readJson(path) {
  try {
    const arquivo = await fs.readFile(filePath);
    const dados = JSON.parse(arquivo);
    console.log(dados);
    return dados;
  } catch (error) {
    console.error(`Erro ao tentar ler arquivo: ${error.message}`);
  }
}

//  Nessa função, utilizamos o método JSON.stringify para converter
//  o objeto JavaScript em uma string JSON e
//  o método writeFileSync para escrever o conteúdo no
//  arquivo database.json.

export async function writeJson(path, dados) {
  try {
    const json = JSON.stringify(dados);
    await fs.writeFile(path, json);
  } catch (error) {
    console.error(`Ocorreu um erro ao tentar gravar: ${error.message}`);
  }
}

// Abaixo, um exemplo de como utilizar o módulo JsonReadWrite.js
//
// const { readJson, writeJson } = require('../models/JsonReadWrite')

// const path= '../data/database.json'

// const dados = readJson(path)
// console.log(dados)

// Abaixo, o exemplo irá ser dado um push apenas no array farmacias

// dados.farma.push({
//   nome: 'Farmácia 3',
//   endereco: 'Rua C, 789',
//   telefone: '(33) 3333-3333'
// })

// writeJson(path, dados)
