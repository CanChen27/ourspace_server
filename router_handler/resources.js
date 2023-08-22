const db = require('../ddbb/index'); 
 

exports.normas = (req, res)=>{
    const sqlIdArrendador = `SELECT * 
                FROM arrendadores 
                where idusuario=?`;

    //coger el id del usuario y encontrar su id arrendador si es que tiene
    console.log(">>misProductos"); 

    db.query (sqlIdArrendador, req.auth.id, (err, results)=>{
        //en caso de error
        if(err) return res.cc(err);

        //en caso de que no encuentre un resultado
        if(results.length != 1){
            return res.cc("Fallo al obtener información del usuario arrendadores");
        }

        //en caso de éxito
        console.log(">>idArrendador", results[0].idArrendador);
        //si eres arrendador se devolverá un id_arrendador 
        //con el que se buscarán las ofertas de dicho id
        const sqlDatosProductos = `SELECT * 
                    FROM ofertas 
                    where idArrendador=?`;

        db.query (sqlDatosProductos, results[0].idArrendador, (err, resultsProductos)=>{
            //en caso de error
            if(err) return res.cc(err);
    
            //en caso de que no encuentre un resultado
            if(resultsProductos.length < 1){
                return res.send({
                    status:201,
                    message:"El arrendador no tiene productos",
                 })
            }
            
            //en otro caso
            res.send({
                status:200,
                message:"Se ha obtenido los productos del usuario exitosamente",
                data: resultsProductos
             })
                        
        })
    })


};


exports.comentarios = (req, res)=>{
    console.log(">>comentarios"); 
    let idOferta = req.query.idOferta;
    const sqlDatosProductos = `SELECT c.fecha, c.text, u.username as nombreUsuario
    FROM comentarios c JOIN usuarios u ON c.idUsuario = u.id
    where idOferta=?`;

    db.query (sqlDatosProductos, idOferta, (err, result)=>{
        //en caso de error
        if(err) return res.cc(err);

        //en caso de que no encuentre un resultado
        if(result.length < 1){
            return res.send({
                status:201,
                message:"La oferta no tiene comentarios.",
            })
        }

        //en otro caso
        res.send({
            status:200,
            message:"Se han obtenido los comentarios del recurso solicitado",
            data: result
        })
            
    })

};

 