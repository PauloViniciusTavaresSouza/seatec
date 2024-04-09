import { db } from "../db.js";

export const postUsers = (req, res) => {

  const query = `INSERT INTO dbfuncionarios.tb_funcionarios (nome, cpf, dt_nascimento, sexo, status, rg , cargo, id_atividade, id_epi , nu_ca) 
                                                      VALUES(?,     ?,        ?,         ?,    ?,     ?,    ?,      ?,       ?,     ?);`;

                
  const {id_funcionario, nome, cpf, dt_nascimento, sexo, status, rg, cargo, atividade, epi , nu_ca} = req.body.data

  console.log(req.body.data);

  try{
    db.query(query, [nome, cpf, dt_nascimento, sexo, status, rg, cargo, atividade, epi, nu_ca],(err, data) => {
        if (err) return res.json(err); 
        return res.status(200).json(data);
    })   
  } catch( err) {
    console.log(`Erro: ${err} detectado!`);
  }
  


};
