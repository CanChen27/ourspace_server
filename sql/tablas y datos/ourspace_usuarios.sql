CREATE DATABASE  IF NOT EXISTS `ourspace` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ourspace`;
-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: ourspace
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(45) NOT NULL,
  `monedas` int NOT NULL,
  `arrendador` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='datos de usuario';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'usuario1','$2a$10$HLP42VeJP3JWfAmFojFXNuySFdnyQ270ugy4p.o3TnpM70J916VVu','usuario1@example.com','123123123',1000,1),(2,'usuario2','$2a$10$KZFQk0sNt7om4SnbM57Ov.dOWEtws85BUsRxOW6toTe2toHNixBZe','usuario2@example.com','123123123',1000,1),(3,'usuario3','$2a$10$ozYD20XCLSHG1Kqb9kXeHuDUgRXjQPLKvUqcHbRb5qSU7TDT.LgKO','usuario3@example.com','123123123',1000,1),(4,'usuario4','$2a$10$tje1W.FXXSRuA6z8QD.uJOYYpSOoUlKKzaIUck8s54D/qgdjt5tja','usuario4@example.com','123123123',1000,1),(5,'usuario5','$2a$10$eZWUMcT/N.yC2v/mHABR0uHEiKI2b8065w07jOwgPtwnEnZ0akQ7G','usuario5@example.com','123123123',1000,1),(6,'usuario6','$2a$10$Qo7b9oGOW2jVPTJrwip9L.wSXOyZYlwJYLuA8O5SHLyTggiygoKXy','usuario6@example.com','123123123',1000,1),(7,'usuario7','$2a$10$v2o3SkUcNYlp25C.PHx4Zei90QK.GVqmtfP.GfDw81RqVzFveOrmO','usuario7@example.com','123123123',1000,1),(8,'usuario8','$2a$10$m1xTEAk2PM6YCXFgEarVd.V.aZLg4CsH2gy3RlkcUe96wMJU3AlkW','usuario8@example.com','123123123',1000,1),(9,'usuario9','$2a$10$h6AJdstEaYBc2RPMbYp92u1elOGjbvlxmu6C6LXqu1xK4c2cwbRBe','usuario9@example.com','123123123',1000,1),(10,'usuario10','$2a$10$ouVQuYJHg2qUKEdjdPBIJ.K1QQIVPAHQTsa6ZHjDlCAaRZ0lmYZZa','usuario10@example.com','123123123',1000,1),(12,'can','$2a$10$Vpj4SCDJauqs5qZyrI5Scud5qUEIkY02UgXhek/ExasX0uXwXjlNW',NULL,'999999999',750,1),(15,'chen','$2a$10$dhIQi/U6UEKp8Le7QiL/KO3pfvhrUwoqf5INfg2hR489.X.xBs4Dy',NULL,'111111111',1000,0),(16,'cchen','$2a$10$NQ/npGlcBlyHlSfeD62Njeu4V1MzcdHE0W03KFxKnAUOzjX/kEUOK','cchen@ucm.es','111111111',1000,0),(17,'our','$2a$10$I2yveenMan/JMgNnhXjjd.7NYXf4HRczl/bWGeAFMVlwuf.daxtlu','our','222222222',1000,1),(32,'asd','$2a$10$E.8j7leHsi6rYUo2agrVNe7F8pmKhooqbgQNat7sFm5onNp1fMj1y','asd@ucm.es','111222333',1000,0),(33,'root','$2a$10$dJJJaRUG90YSZpunzyiZs.4dnyXjlSVLoRPOcl7L/wqd3Szvjp8qe','root@ucm.es','123123123',0,0),(34,'can1','can1','asd@ucm.es','123123123',1000,0),(36,'qwe','$2a$10$40CcUXX6ePHx6PWvrMPhGuhWPE1Ok7aqmdGbCBue9ebt0aso/1F8y','qwe@ucm.es','123123123',1000,0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-05 18:47:45
