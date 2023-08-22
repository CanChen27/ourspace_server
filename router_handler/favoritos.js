const db = require('../ddbb/index'); 


exports.aniadirFavorito = (req, res)=>{
    
    const idusuario = req.auth.id;
    console.log("idUsuario", idusuario);
    const sqlIdArrendatario = `SELECT * 
                FROM arrendatarios 
                where idUsuario=?`;
    console.log(">>newReserva", idusuario); 


    db.query (sqlIdArrendatario, idusuario, (err, results)=>{
        const data = req.body;

    console.log("data", data.idOferta);


        //en caso de error
        if(err) return res.cc(err);

        //en caso de que no encuentre un resultado
        if(results.length != 1){
            return res.cc("Fallo al obtener información del usuario arrendatario");
        }

        //en caso de éxito
        console.log(">>idArrendatario", results[0].idArrendatario);

        let idArrendatario = results[0].idArrendatario; 
 
    
        const sqlFavorito = `INSERT INTO favoritos (idArrendatario, idOferta)
        VALUES (?, ?);`;
 

        db.query (sqlFavorito, [idArrendatario, data.idOferta], (err, resQuery)=>{
            //en caso de error
            if(err) return res.cc(err);
            
            //en otro caso
            res.send({
                status:200,
                message:"Se ha añadido a favoritos"
             })
                        
        }) 
    })


};


exports.quitarFavorito = (req, res)=>{
    const idusuario = req.auth.id;
    const idOferta = req.body.idOferta;
 
    const sqlIdArrendatario = `SELECT * 
                FROM arrendatarios 
                where idUsuario=?`;
    console.log(">>quitarFavorito"); 


    db.query (sqlIdArrendatario, idusuario, (err, results)=>{ 

        //en caso de error
        if(err) return res.cc(err);

        //en caso de que no encuentre un resultado
        if(results.length != 1){
            return res.cc("Fallo al obtener información del usuario arrendatario");
        }
 

        let idArrendatario = results[0].idArrendatario; 
 
        const sqlFavorito = `DELETE FROM favoritos
                    WHERE idArrendatario = ? AND idOferta = ?`;
     
        db.query (sqlFavorito, [idArrendatario,idOferta] ,(err, resQuery)=>{
            //en caso de error
            if(err) return res.cc(err);
            
            //en otro caso
            res.send({
                status:200,
                message:"Se ha quitado de favoritos"
             })
                        
        }) 
    })

}; 

exports.consultarFavorito = (req, res)=>{
    const idusuario = req.auth.id;
    const idOferta = req.query.idOferta;
 
    console.log(">>consultarFavorito", idOferta); 

    const sqlIdArrendatario = `SELECT * 
                FROM arrendatarios 
                where idUsuario=?`;
                
                
    db.query (sqlIdArrendatario, idusuario, (err, results)=>{ 
        
        //en caso de error
        if(err) return res.cc(err);
        
        //en caso de que no encuentre un resultado
        if(results.length != 1){
            return res.cc("Fallo al obtener información del usuario arrendatario");
        }
        
        
        let idArrendatario = results[0].idArrendatario; 
        
        const sqlFavorito = `SELECT * FROM favoritos
        WHERE idArrendatario = ? AND idOferta = ?`;
                    
        db.query (sqlFavorito, [idArrendatario,idOferta] ,(err, resQuery)=>{
            //en caso de error
            if(err) return res.cc(err);
            
            if(resQuery.length<1){
                return res.send({
                    status:201,
                    message:"El usuario no ha añadido la oferta como favorito"
                 })
            }
            //en otro caso
            res.send({
                status:200,
                message:"El usuario tiene la oferta guardado como favorito"
             })
                        
        }) 
    })

}; 


exports.consultarFavorito = (req, res)=>{
    const idusuario = req.auth.id;
    const idOferta = req.query.idOferta;
 
    console.log(">>consultarFavorito", idOferta); 

    const sqlIdArrendatario = `SELECT * 
                FROM arrendatarios 
                where idUsuario=?`;
                
                
    db.query (sqlIdArrendatario, idusuario, (err, results)=>{ 
        
        //en caso de error
        if(err) return res.cc(err);
        
        //en caso de que no encuentre un resultado
        if(results.length != 1){
            return res.cc("Fallo al obtener información del usuario arrendatario");
        }
        
        
        let idArrendatario = results[0].idArrendatario; 
        
        const sqlFavorito = `SELECT * FROM favoritos
        WHERE idArrendatario = ? AND idOferta = ?`;
                    
        db.query (sqlFavorito, [idArrendatario,idOferta] ,(err, resQuery)=>{
            //en caso de error
            if(err) return res.cc(err);
            
            if(resQuery.length<1){
                return res.send({
                    status:201,
                    message:"El usuario no ha añadido la oferta como favorito"
                 })
            }
            //en otro caso
            console.log("resQuery", resQuery)
            res.send({
                status:200,
                message:"El usuario tiene la oferta guardado como favorito"
             })
                        
        }) 
    })

}; 

exports.listaFavoritos = (req, res)=>{
    const idusuario = req.auth.id; 
 
    console.log(">>listaFavoritos"); 

    const sqlIdArrendatario = `SELECT * 
                FROM arrendatarios 
                where idUsuario=?`;
                
                
    db.query (sqlIdArrendatario, idusuario, (err, results)=>{ 
        
        //en caso de error
        if(err) return res.cc(err);
        
        //en caso de que no encuentre un resultado
        if(results.length != 1){
            return res.cc("Fallo al obtener información del usuario arrendatario");
        }
        
        
        let idArrendatario = results[0].idArrendatario; 
        
        const sqlFavorito = `SELECT * FROM favoritos f JOIN ofertas o ON f.idOferta = o.idOfertas
        WHERE idArrendatario = ?`;
                    
        db.query (sqlFavorito, [idArrendatario] ,(err, resQuery)=>{
            //en caso de error
            if(err) return res.cc(err); 
            //en otro caso
            res.send({
                status:200,
                message:"El usuario tiene la oferta guardado como favorito",
                data: resQuery
             })
                        
        }) 
    })

}; 