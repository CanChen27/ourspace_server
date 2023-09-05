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
-- Table structure for table `notificaciones`
--

DROP TABLE IF EXISTS `notificaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notificaciones` (
  `idNotificaciones` int NOT NULL AUTO_INCREMENT,
  `idUsuario` int NOT NULL,
  `fecha` date NOT NULL,
  `mensaje` varchar(1000) NOT NULL,
  PRIMARY KEY (`idNotificaciones`,`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notificaciones`
--

LOCK TABLES `notificaciones` WRITE;
/*!40000 ALTER TABLE `notificaciones` DISABLE KEYS */;
INSERT INTO `notificaciones` VALUES (5,32,'2023-08-19','Has añadido una oferta como favorito'),(6,32,'2023-08-19','Has añadido una oferta como favorito'),(7,1,'2023-08-19','Has añadido una oferta como favorito'),(8,1,'2023-08-19','Has añadido una oferta como favorito'),(9,32,'2023-08-20','Has añadido una oferta como favorito'),(10,32,'2023-08-20','Has añadido una oferta como favorito'),(11,32,'2023-08-21','Has añadido una oferta como favorito'),(12,32,'2023-08-23','Has añadido una oferta como favorito'),(13,32,'2023-08-23','Has añadido una oferta como favorito'),(14,32,'2023-08-23','Has añadido una oferta como favorito'),(15,32,'2023-08-23','Has añadido una oferta como favorito'),(16,32,'2023-08-23','Has añadido una oferta como favorito'),(17,32,'2023-08-24','Has añadido una oferta como favorito'),(18,1,'2023-08-29','Has añadido una oferta como favorito'),(19,32,'2023-08-29','Has eliminado una oferta como favorito'),(20,1,'2023-08-29','Has creado una nueva oferta'),(21,1,'2023-08-29','Has eliminado una oferta'),(22,1,'2023-08-29','Has creado una nueva oferta'),(23,1,'2023-08-29','Has modificado una reserva'),(24,1,'2023-08-29','Has cancelado una reserva'),(25,1,'2023-08-29','Has realizado una reserva'),(26,1,'2023-08-30','Has creado una nueva oferta'),(27,1,'2023-08-30','Has creado una nueva oferta'),(28,12,'2023-08-30','Has creado una nueva oferta'),(29,12,'2023-08-30','Has creado una nueva oferta'),(30,12,'2023-08-30','Has realizado una reserva'),(31,2,'2023-08-30','Has modificado una reserva'),(32,12,'2023-08-30','Has realizado una reserva'),(33,12,'2023-08-30','Has modificado una reserva'),(34,12,'2023-08-30','Has modificado una reserva'),(35,2,'2023-08-30','Has modificado una reserva'),(36,12,'2023-08-30','Has añadido una oferta como favorito'),(37,12,'2023-08-30','Has eliminado una oferta como favorito'),(38,12,'2023-08-30','Has añadido una oferta como favorito'),(39,12,'2023-08-30','Has eliminado una oferta como favorito'),(40,12,'2023-08-30','Has realizado una reserva'),(41,12,'2023-08-30','Has realizado una reserva'),(42,12,'2023-09-01','Has modificado una reserva'),(43,12,'2023-09-01','Has añadido una oferta como favorito'),(44,1,'2023-09-05','Has eliminado una oferta'),(45,1,'2023-09-05','Has eliminado una oferta'),(46,1,'2023-09-05','Has cancelado una reserva'),(47,1,'2023-09-05','Has cancelado una reserva'),(48,1,'2023-09-05','Has cancelado una reserva'),(49,2,'2023-09-05','Has cancelado una reserva'),(50,2,'2023-09-05','Has cancelado una reserva'),(51,32,'2023-09-05','Has cancelado una reserva'),(52,12,'2023-09-05','Has cancelado una reserva'),(53,12,'2023-09-05','Has cancelado una reserva'),(54,12,'2023-09-05','Has cancelado una reserva'),(55,12,'2023-09-05','Has cancelado una reserva'),(62,1,'2023-09-05','Has eliminado una oferta'),(63,1,'2023-09-05','Has eliminado una oferta'),(64,1,'2023-09-05','Has eliminado una oferta'),(65,1,'2023-09-05','Has eliminado una oferta'),(66,2,'2023-09-05','Has eliminado una oferta'),(67,2,'2023-09-05','Has eliminado una oferta'),(68,12,'2023-09-05','Has eliminado una oferta'),(69,12,'2023-09-05','Has eliminado una oferta'),(70,1,'2023-09-05','Has creado una nueva oferta'),(71,1,'2023-09-05','Has creado una nueva oferta'),(72,2,'2023-09-05','Has creado una nueva oferta'),(73,2,'2023-09-05','Has creado una nueva oferta'),(74,2,'2023-09-05','Has eliminado una oferta'),(75,2,'2023-09-05','Has creado una nueva oferta'),(78,2,'2023-09-05','Has creado una nueva oferta'),(79,2,'2023-09-05','Has creado una nueva oferta'),(80,1,'2023-09-05','Has creado una nueva oferta'),(81,1,'2023-09-05','Has creado una nueva oferta'),(82,1,'2023-09-05','Has creado una nueva oferta'),(83,3,'2023-09-05','Has creado una nueva oferta'),(84,3,'2023-09-05','Has creado una nueva oferta'),(85,3,'2023-09-05','Has creado una nueva oferta'),(86,3,'2023-09-05','Has creado una nueva oferta'),(87,3,'2023-09-05','Has creado una nueva oferta'),(88,3,'2023-09-05','Has añadido una oferta como favorito'),(89,3,'2023-09-05','Has añadido una oferta como favorito'),(90,3,'2023-09-05','Has añadido una oferta como favorito'),(91,12,'2023-09-05','Has añadido una oferta como favorito'),(92,12,'2023-09-05','Has añadido una oferta como favorito'),(93,12,'2023-09-05','Has añadido una oferta como favorito'),(94,12,'2023-09-05','Has realizado una reserva'),(95,12,'2023-09-05','Has eliminado una oferta como favorito');
/*!40000 ALTER TABLE `notificaciones` ENABLE KEYS */;
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
