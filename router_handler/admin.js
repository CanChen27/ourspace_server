const db = require('../ddbb/index');

exports.misProductos = (req, res)=>{
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
                    code:201,
                    message:"El arrendador no tiene productos",
                 })
            }
            
            //en otro caso
            res.send({
                code:200,
                message:"Se ha obtenido los productos del usuario exitosamente",
                data: resultsProductos
             })
                        
        })
    })


};

exports.crearProducto = (req, res)=>{
    const idArrendador = req.auth.id;
    const sqlIdArrendador = `SELECT * 
                FROM arrendadores 
                where idusuario=?`;

    //coger el id del usuario y encontrar su id arrendador si es que tiene
    console.log(">>crearProducto"); 

    db.query (sqlIdArrendador, idArrendador, (err, results)=>{
        //en caso de error
        if(err) return res.cc(err);

        //en caso de que no encuentre un resultado
        if(results.length != 1){
            return res.cc("Fallo al obtener información del usuario arrendadores");
        }

        //en caso de éxito
        console.log(">>idArrendador", results[0].idArrendador);
        //si eres arrendador se devolverá un id_arrendador 
        //con el que se guardará el nuevo producto

        const data = req.body;
    
        const sqlIdArrendador = `INSERT INTO ofertas (idTipo, idArrendador, nombre, descripcion, precio, img, normas)
        VALUES (?, ?, ?, ?, ?, ?, ?);`;

        db.query (sqlIdArrendador, [1, idArrendador, data.nombre, data.descripcion, data.precio, "1.png", ""], (err, resQuery)=>{
            //en caso de error
            if(err) return res.cc(err);
            
            //en otro caso
            res.send({
                code:200,
                message:"Se ha creado el producto de forma exitosa"
             })
                        
        })
        // res.send({
        //     code:200,
        //     message:"Se ha creado el producto de forma exitosa", 
        //  })
    })

};

exports.eliminarProducto = (req, res)=>{
    const data = req.body; 
    const sql = `DELETE FROM ofertas
                    WHERE idOfertas = ?`;

    //coger el id del usuario y encontrar su id arrendador si es que tiene
    console.log(">>eliminarProducto", data); 
    db.query (sql, data.idOfertas ,(err, resQuery)=>{
        //en caso de error
        if(err) return res.cc(err);
        
        //en otro caso
        res.send({
            code:200,
            message:"Se eliminado el producto de forma exitosa"
         })
                    
    }) 

};

exports.modificarProducto = (req, res)=>{
    const data = req.body; 
    //coger el id del usuario y encontrar su id arrendador si es que tiene
    console.log(">>modificarProducto", data); 


    const idArrendador = req.auth.id;
    const sqlIdArrendador = `SELECT * 
                FROM arrendadores 
                where idusuario=?`;
    db.query (sqlIdArrendador, idArrendador, (err, results)=>{
        //en caso de error
        if(err) return res.cc(err);

        //en caso de que no encuentre un resultado
        if(results.length != 1){
            return res.cc("Fallo al obtener información del usuario arrendadores");
        }

        //en caso de éxito
        console.log(">>idArrendador", results[0].idArrendador);
        //si eres arrendador se devolverá un id_arrendador 
        //con el que se guardará el nuevo producto

        const data = req.body;
    



        const sqlUpdate = `UPDATE ofertas
        SET idTipo = ?,
            idArrendador = ?,
            nombre = ?,
            descripcion = ?,
            precio = ?,
            img = ?,
            normas = ?
        WHERE idOfertas = ?;`;

        db.query (sqlUpdate, [1, idArrendador, data.nombre, data.descripcion, data.precio, "1.png", "", data.idOfertas], (err, resQuery)=>{
            //en caso de error
            
            if(err){
                console.log(">>EEEEEEEEEEEEEEEEEEERRRRR: ", err);
                return res.cc(err);
            } 

            
            //en otro caso
            res.send({
                code:200,
                message:"Se ha modificado el producto de forma exitosa"
             })
                        
        })
        // res.send({
        //     code:200,
        //     message:"Se ha creado el producto de forma exitosa", 
        //  })
    })

};

 