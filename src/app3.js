const express = require('express') //importacao do pacote
const app = express() //instanciando express

const alunos = [
    {
      nome: 'Luciano',
      idade: 26
    },
    {
      nome: 'Laura',
      idade: 21
    },
    {
      nome: 'Valentim',
      idade: 03
    },
    {
      nome: 'Chloe',
      idade: 01
    }
  ]

app.get('/', function (req, res) { //endereco da requisicao onde e retornado 
  res.send(alunos)
})

app.listen(3000) //execucao do servidor