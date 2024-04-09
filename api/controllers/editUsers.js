import { db } from "../db.js";

export const editUsers = (req, res) => {
  const query = `update tb_funcionarios set nome = ?, cpf = ?, dt_nascimento = ?, sexo = ?, status = ?, rg = ?, cargo = ? where id_funcionario = ?`;


  const {id_funcionario, nome, cpf, dt_nascimento, sexo, status, rg, cargo} = req.body.data
  
  console.log(status);

  db.query(query, [nome, cpf, dt_nascimento, sexo, status, rg, cargo, id_funcionario],(err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
