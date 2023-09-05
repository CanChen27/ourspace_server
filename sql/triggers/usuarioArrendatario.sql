delimiter //
CREATE TRIGGER arrendadorADD_AI 
AFTER INSERT ON arrendadores 
FOR EACH ROW 
BEGIN   
    UPDATE usuarios
    SET arrendador = 1
    WHERE id = NEW.idUsuario;
END;

