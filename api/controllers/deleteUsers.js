import { db } from "../db.js";

export const deleteUsers = (req, res) => {
  const query = `delete from tb_funcionarios where id_funcionario = ?;`;
  


 const id_funcionario =  req.body.id_funcionario

  console.log(req.body.id_funcionario);

  db.query(query, [id_funcionario],(err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
