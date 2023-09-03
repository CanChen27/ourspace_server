const db = require('../ddbb/index');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const config = require('../config');

exports.userInfo = (req, res)=>{
    console.log(">>user token", req.auth);
    const sql = `select id, username, email, phone, monedas, arrendador
                from usuarios WHERE id <> 33`;
    db.query(sql, (err, results)=>{
        if(err) return res.cc(err); 

        res.send({
           status:200,
           message:"Se ha obtenido la información del usuario exitosamente",
           data: results
        })

});
};

exports.eliminarUsuario = (req, res)=>{ 
    console.log(">>user token", req.body);
    userId = req.body.id; 

    const sql = `DELETE FROM usuarios
    WHERE id = ?`;

    db.query(sql,userId, (err, results)=>{
        if(err) return res.cc(err); 

        res.send({
           status:200,
           message:"Se ha eliminado el usuario exitosamente",
           data: results
        })

});
};

exports.aniadirRol = (req, res)=>{ 
    console.log(">>aniadirRol ", req.body);
    userData = req.body; 

    const sql = `INSERT INTO arrendadores (idUsuario, organizacion)
    VALUES (?, ?);`;

    db.query(sql,[userData.idUsuario, userData.organizacion], (err, results)=>{
        if(err) return res.cc(err); 

        res.send({
           status:200,
           message:"Se ha añadido exitosamente el rol arrendador al usuario.",
           data: results
        })

});
};

exports.quitarRol = (req, res)=>{ 
    console.log(">>quitarRol", req.body);
    userId = req.body.idUsuario; 

    const sql = `DELETE FROM arrendadores
    WHERE idUsuario = ?`;

    db.query(sql, userId, (err, results)=>{
        if(err) return res.cc(err); 

        res.send({
           status:200,
           message:"Se ha eliminado el usuario exitosamente",
           data: results
        })

});
};