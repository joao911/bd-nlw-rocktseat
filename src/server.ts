import express from "express";
import routes from "./routes";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

// get: buscar ou listar informações
// post: Criar alguma nova informação
// put: atualizar uma informação
// delete: deletar uma informação

// corpo(Request Body): dados para criação ou atualização de um registro
// Route Params: Indentificar quual recurso eu quero indentificar ou deletar
// Query Params: paginação, filtros , ordenação

//endereço da minha api
