const db = require('../ddbb/index');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const config = require('../config');

exports.regUser = (req, res)=>{
    
    const userinfo = req.body;
    console.log(">>reguser:", userinfo);
    if(!userinfo.username || !userinfo.password){
        return res.cc("Usuario contraseña incorrecto");
    }
    
    //query
    const sqlSearch = 'select * from usuarios where username=?';
    db.query(sqlSearch, userinfo.username, (err, results)=>{
        // si error
        if(err){
            return res.send({status:1, message:err.message});
        }
        //si ya existe
        if(results.length > 0){ 
            userinfo.password = bcrypt.hashSync('contraseña1', 10);

            console.log("token usuario aaaaaaaaaaaaa::", userinfo.password);
            return res.send({status:1, message:"Nombre usuario ya existe"}); 
            
        } 
        
        userinfo.password = bcrypt.hashSync(userinfo.password, 10);
        console.log(">>aaa:", userinfo);

        const sqlInsert = 'insert into usuarios set ?';
        data = {
            "username":userinfo.username,
            "password": userinfo.password, 
            "phone": userinfo.phone,
            "email": userinfo.email
        }
        db.query(sqlInsert, data, (err, results)=>{
            // si error
            if(err){
                return res.send({status:1, message:err.message});
            }
            
            //si filas modificadas distinto de uno
            if(results.affectedRows !== 1) return res.send({status:1, message:"Error al crear un usuario"}); 

            //si todo ha ido bien
            res.send({status:0, message:"El Usuario ha sido registrado"}); 
            console.log("userReg:: El Usuario ha sido registrado");
        }) 

    }) 
};

exports.login = (req, res)=>{ 
    const userinfo = req.body;
    console.log(">>loginuser:", userinfo);
    if(!userinfo.username || !userinfo.password){
        return res.send({status:1, message:"Usuario contraseña incorrecto"});
    }
    
    //query
    const sqlSearch = 'select * from usuarios where username=?';
    db.query(sqlSearch, userinfo.username, (err, results)=>{
        // si error
        if(err){
            return res.send({status:1, message:err.message});
        }
        //si no encontrado
        if(results.length !== 1){ 

            return res.send({status:1, message:"Nombre usuario no existe"}); 
            
        } 
        console.log("usuario", userinfo.password);
        console.log("bbdd", results[0].password);
        const ret = bcrypt.compareSync(userinfo.password, results[0].password);


        // if(ret){
        //     console.log(">>> ret true");
        // }else{
        //     console.log(">>> ret false");
        // }
        //si no iguales
        if(!ret){
            return res.send({status:1, message:"Contraseña incorrecta"})
        }
        //es6 sobreescribir datos innecesarios para general el token
        const user = {...results[0], password: '', user_pic: ''};

        //generar token
        const tokenStr = jwt.sign(user, config.secretKey, {expiresIn: config.expires, algorithm: 'HS256'});
        // console.log(tokenStr);

        //mandar token al cliente
        //IMPORTANTE: hay que añadir prefijo 'Bearer '
        res.send({code:200, message:"Login sucess", data:{ token: 'Bearer '+ tokenStr}}); 
    }) 
};