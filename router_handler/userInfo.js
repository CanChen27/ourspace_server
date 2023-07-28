const db = require('../ddbb/index');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const config = require('../config');

exports.userInfo = (req, res)=>{
    console.log(">>user token", req.auth);
    const sql = `select id, username, email, user_pic, phone
                from usuarios
                where id=?`;
    db.query(sql, req.auth.id, (err, results)=>{
        if(err) return res.cc(err);
        if(results.length != 1){
            return res.cc("Fallo al obtener información del usuario");
        }
        res.send({
           status:200,
           message:"Se ha obtenido la información del usuario exitosamente",
           data: results[0]
        })

});
};

 