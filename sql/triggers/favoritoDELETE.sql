delimiter //
CREATE TRIGGER favoritoDELETE_AI 
AFTER DELETE ON favoritos 
FOR EACH ROW 
BEGIN
    -- Realizar una consulta para obtener información relacionada
    DECLARE id INT;
    SET id = (SELECT idUsuario FROM arrendatarios WHERE idArrendatario = OLD.idArrendatario);
    
    INSERT INTO notificaciones (idUsuario, fecha, mensaje)
    VALUES (id, NOW(), 'Has eliminado una oferta como favorito');
END;
