const db = require('../ddbb/index'); 


exports.newReserva = (req, res)=>{
    
    const idusuario = req.auth.id;
    const sqlIdArrendatario = `SELECT * 
                FROM arrendatarios 
                where idUsuario=?`;
    console.log(">>newReserva", idusuario); 


    db.query (sqlIdArrendatario, idusuario, (err, results)=>{
        const data = req.body;

        //en caso de error
        if(err) return res.cc(err);

        //en caso de que no encuentre un resultado
        if(results.length != 1){
            return res.cc("Fallo al obtener información del usuario arrendadores");
        }

        //en caso de éxito
        console.log(">>idArrendatario", results[0].idArrendatario);

        let idArrendatario = results[0].idArrendatario; 
 
    
        const sqlReserva = `INSERT INTO reservas (idArrendatario, idOferta,uuid, fecha, hora, compartir, genteCompartir)
        VALUES (?, ?, ?, ?,?, ?, ?);`;
 

        db.query (sqlReserva, [idArrendatario, data.id,data.uuid, data.dia, data.hora, data.buscarCompartir, data.genteCompartir], (err, resQuery)=>{
            //en caso de error
            if(err) return res.cc(err);
            
            //en otro caso
            res.send({
                status:200,
                message:"Se realizado la reserva de forma exitosa"
             })
                        
        }) 
    })


}; 

exports.misReservas = (req, res)=>{
    
    const idusuario = req.auth.id;
    const sqlIdArrendatario = `SELECT * 
                FROM arrendatarios 
                where idUsuario=?`;
    console.log(">>newReserva", idusuario); 


    db.query (sqlIdArrendatario, idusuario, (err, results)=>{
        const data = req.body;

        //en caso de error
        if(err) return res.cc(err);

        //en caso de que no encuentre un resultado
        if(results.length != 1){
            return res.cc("Fallo al obtener información del usuario arrendadores");
        }

        //en caso de éxito
        console.log(">>idArrendatario", results[0].idArrendatario);

        let idArrendatario = results[0].idArrendatario; 
 
    
        const sqlReserva = ` SELECT *
                            FROM reservas r
                            JOIN ofertas o ON r.idOferta = o.idOfertas
                            where r.idArrendatario = ?`;
 

        db.query (sqlReserva, idArrendatario, (err, resQuery)=>{
            //en caso de error
            if(err) return res.cc(err);

            if(resQuery.length < 1){
                return res.send({
                    status:201,
                    message:"El arrendatario no tiene reservas",
                 })
            }
            
            //en otro caso
            res.send({
                status:200,
                message:"Se han obtenido las reservas del usuario de forma exitosa",
                data: resQuery
             })
                        
        }) 
    })


}; 

exports.modificarReserva = (req, res)=>{
    
    const idusuario = req.auth.id;
    const sqlIdArrendatario = `SELECT * 
                FROM arrendatarios 
                where idUsuario=?`;
    console.log(">>newReserva", idusuario); 


    db.query (sqlIdArrendatario, idusuario, (err, results)=>{
        const data = req.body;

        //en caso de error
        if(err) return res.cc(err);

        //en caso de que no encuentre un resultado
        if(results.length != 1){
            return res.cc("Fallo al obtener información del usuario arrendadores");
        }

        //en caso de éxito
        console.log(">>data", data);
 
 
    
        const sqlReserva = `UPDATE reservas
                            SET fecha = ?,
                            hora = ?, 
                            compartir = ?,
                            genteCompartir = ? 
                            where idArrendatario = ? AND idOferta = ? AND uuid= ?`;
 

        db.query (sqlReserva, [data.fecha, data.hora, data.compartir, data.genteCompartir, data.idArrendatario, data.idOferta, data.uuid], (err, resQuery)=>{
            //en caso de error
            if(err) return res.cc(err);

            if(resQuery.length < 1){
                return res.send({
                    status:201,
                    message:"No existe dicha reserva",
                 })
            }
            
            //en otro caso
            res.send({
                status:200,
                message:"Se ha modificaco la reserva de forma exitosa",
                data: resQuery
             })
                        
        }) 
    })


}; 


exports.cancelarReserva = (req, res)=>{
    const data = req.body; 
    console.log(">>cancelarReserva data", data);
    const sql = `DELETE FROM reservas
                WHERE uuid = ?`;

    //coger el id del usuario y encontrar su id arrendador si es que tiene
    console.log(">>eliminarProducto", data); 
    db.query (sql, data.uuid ,(err, resQuery)=>{
        //en caso de error
        if(err) return res.cc(err);
        
        //en otro caso
        res.send({
            status:200,
            message:"Se cancelado la reserva de forma exitosa"
         })
                    
    }) 



}; 
