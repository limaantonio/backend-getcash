const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'GetCred API',
    description: 'This is a API from GetCred API.é uma solução integrada ao aplicativo SuperGet da Getnet que possibilitará ao usuário que precisa recorrer aos empréstimos para financiar seu negócio ou um projeto referente a sua atividade profissional, mas que não tem como dar garantias como imóveis, automóveis ou outras formas mais tradicionais.'
  },
  host: "localhost:3333",
  // host: "deploy-vuttr.herokuapp.com",
  schemes: ['http']
}

const outputFile = './src/swagger_output.json'
const endpointsFiles = ['./src/routes.js']

swaggerAutogen(outputFile, endpointsFiles, doc)