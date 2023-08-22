const db = require('../ddbb/index'); 


exports.misNotificaciones = (req, res)=>{
    
    const idusuario = req.auth.id;
    const sqlReserva = `SELECT *
    FROM notificaciones
    where idUsuario = ?`;


    db.query (sqlReserva, idusuario, (err, resQuery)=>{
    //en caso de error
    if(err) return res.cc(err);

    if(resQuery.length < 1){
    return res.send({
    status:201,
    message:"El arrendatario no tiene notificaciones",
    })
    }

    //en otro caso
    res.send({
    status:200,
    message:"Se han obtenido las notidicaciones del usuario de forma exitosa",
    data: resQuery
    })

    }) 


};
