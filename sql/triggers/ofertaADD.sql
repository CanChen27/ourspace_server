delimiter //
CREATE TRIGGER ofertaADD_AI 
AFTER INSERT ON ofertas 
FOR EACH ROW 
BEGIN   
    DECLARE id INT;
    SET id = (SELECT idUsuario FROM arrendadores WHERE idArrendador = NEW.idArrendador);
    
    INSERT INTO notificaciones (idUsuario, fecha, mensaje)
    VALUES (id, NOW(), 'Has creado una nueva oferta');
END;
