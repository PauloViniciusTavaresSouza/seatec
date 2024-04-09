import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "usuario_funcionarios",
  password: "123456789",
  database: "dbfuncionarios",
});
