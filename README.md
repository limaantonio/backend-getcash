<h1 align="center">
 <img src="./files/logo.svg"/>
  <br>
  GetCred API 
</h1>

# Indice
- [Sobre](#-Sobre)
- [Tecnologias Utilizadas](#-tecnologias-Utilizadas)
- [Como baixar o projeto](#-como-baixar-o-projeto)
- [Rotas](#-rotas)


## 🗒 Sobre



O **GetCred API**, é uma solução integrada ao aplicativo SuperGet da Getnet que possibilitará ao usuário que precisa recorrer aos empréstimos para financiar seu negócio ou um projeto referente a sua atividade profissional, mas que não tem como dar garantias como imóveis, automóveis ou outras formas mais tradicionais.
---

## 🚀 Tecnologias utilizadas

- [NodeJS](https://nodejs.org/en/')
- [MongoDB](https://www.mongodb.com/')
- [Express](https://expressjs.com/pt-br/')
- [Swagger](https://swagger.io/specification/')


## 📦 Como baixar o projeto

* NodeJS v12.16.1

```bash

  #Clonar o repositório
  $git clone https://github.com/limaantonio/backend-getcred
  
  # Entrar no repositório
  $ cd backend-getcred

  # Instalar as dependencias
  $ yarn ou npm install 

  # Inciar o projeto
  $ yarn dev

```

## Rotas

```
  Todas as requisições do POST para está API devem ter o cabeçalho Content-Type: application/json.A API contém as seguintes rotas:
  
  Rotas Sale:
  
  * GET /sales: lista todas as vendas cadastradas
  * GET /sales/:id: uma venda de acordo com o id
  * POST /sale: cria uma nova venda
  * GET /amount: retorna uma lista com o montande de vendas realizadas por mês e ano

  Documentação:
  * GET /docs: rota para visualizar a documentação da API
  
```


Desenvolvido por Antonio Carlos
