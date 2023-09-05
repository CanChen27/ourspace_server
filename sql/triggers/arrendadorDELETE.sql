delimiter //
CREATE TRIGGER arrendadorDELETE_AI 
AFTER DELETE ON arrendadores 
FOR EACH ROW 
BEGIN   
    UPDATE usuarios
    SET arrendador = 0
    WHERE id = OLD.idUsuario;
END;

