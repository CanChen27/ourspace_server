delimiter //
CREATE TRIGGER favoritoAdd_AI 
AFTER INSERT ON favoritos 
FOR EACH ROW 
BEGIN
    -- Realizar una consulta para obtener información relacionada
    DECLARE id INT;
    SET id = (SELECT idUsuario FROM arrendatarios WHERE idArrendatario = NEW.idArrendatario);
    
    INSERT INTO notificaciones (idUsuario, fecha, mensaje)
    VALUES (id, NOW(), 'Has añadido una oferta como favorito');
END;