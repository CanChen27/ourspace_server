delimiter //
CREATE TRIGGER reservaADD_AI 
AFTER INSERT ON reservas 
FOR EACH ROW 
BEGIN   
    DECLARE id INT;
    SET id = (SELECT idUsuario FROM arrendatarios WHERE idArrendatario = NEW.idArrendatario);
    
    INSERT INTO notificaciones (idUsuario, fecha, mensaje)
    VALUES (id, NOW(), 'Has realizado una reserva');
END;

