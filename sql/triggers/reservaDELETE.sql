delimiter //
CREATE TRIGGER reservaDELETE_AI 
AFTER DELETE ON reservas 
FOR EACH ROW 
BEGIN   
    DECLARE id INT;
    SET id = (SELECT idUsuario FROM arrendatarios WHERE idArrendatario = OLD.idArrendatario);
    
    INSERT INTO notificaciones (idUsuario, fecha, mensaje)
    VALUES (id, NOW(), 'Has cancelado una reserva');
END;

