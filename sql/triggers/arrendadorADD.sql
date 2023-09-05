delimiter //
CREATE TRIGGER ofertaADD_AI 
AFTER DELETE ON ofertas 
FOR EACH ROW 
BEGIN   
    DECLARE id INT;
    SET id = (SELECT idUsuario FROM arrendadores WHERE idArrendador = OLD.idArrendador);
    
    INSERT INTO notificaciones (idUsuario, fecha, mensaje)
    VALUES (id, NOW(), 'Has eliminado una oferta');
END;