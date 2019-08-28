const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/db_financial', { useNewUrlParser: true })

//tratamento de erros

mongoose.Error.messages.general.required = "o atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o atributo '{PATH}'."