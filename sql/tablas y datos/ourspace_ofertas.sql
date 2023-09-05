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
-- Table structure for table `ofertas`
--

DROP TABLE IF EXISTS `ofertas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ofertas` (
  `idOfertas` int NOT NULL AUTO_INCREMENT,
  `idTipo` int NOT NULL,
  `idArrendador` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(750) NOT NULL,
  `precio` varchar(45) NOT NULL,
  `img` varchar(255) NOT NULL,
  `normas` varchar(255) DEFAULT NULL,
  `plazoOferta` int NOT NULL,
  `nArrendatarios` int NOT NULL,
  PRIMARY KEY (`idOfertas`),
  KEY `idArrendador_idx` (`idArrendador`),
  CONSTRAINT `idArrendador` FOREIGN KEY (`idArrendador`) REFERENCES `arrendadores` (`idArrendador`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ofertas`
--

LOCK TABLES `ofertas` WRITE;
/*!40000 ALTER TABLE `ofertas` DISABLE KEYS */;
INSERT INTO `ofertas` VALUES (60,1,1,'Tenis top','Bienvenidos a Tenis TOP \r\nEsta es la descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum est volutpat lacus convallis molestie. Donec luctus pharetra arcu, ut tristique quam rutrum a. Nam ultricies urna sed interdum sagittis. Sed vitae molestie mi, at iaculis mauris. Etiam lorem nibh, gravida maximus sem eget, laoreet sagittis tellus. Morbi semper sed urna id porta. Aliquam congue sem nunc, eu sagittis felis mollis eu. Nulla aliquet a lacus vel vulputate. Sed quis malesuada augue. Cras mauris leo, sollicitudin in magna eu, tempus varius nisl. In a rhoncus nunc.','20','[\"6e9ea4cb-1495-4734-8e11-27791017c049.jpeg\",\"2223eebc-de68-499a-8a64-e7cd87a717eb.jpg\",\"7fc8ff71-ed00-468d-909a-1e5fe843aeec.jpeg\"]','[\"8\",\"10\",\"11\",\"16\"]',0,8),(61,1,1,'Tenis BASISSS 1','Bienvenidos a Tenis BASISSS \r\nEsta es la descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum est volutpat lacus convallis molestie. Donec luctus pharetra arcu, ut tristique quam rutrum a. Nam ultricies urna sed interdum sagittis. Sed vitae molestie mi, at iaculis mauris. Etiam lorem nibh, gravida maximus sem eget, laoreet sagittis tellus. Morbi semper sed urna id porta. Aliquam congue sem nunc, eu sagittis felis mollis eu. Nulla aliquet a lacus vel vulputate. Sed quis malesuada augue. Cras mauris leo, sollicitudin in magna eu, tempus varius nisl. In a rhoncus nunc.','7','[\"7ac0ffce-0d88-4512-91e7-5c91635c09bd.jpeg\",\"bcd53264-fbff-46fc-a6ab-6d8f54f145d9.jpeg\"]','[\"8\",\"10\",\"11\",\"16\"]',0,4),(62,2,2,'Fúlbol |@#','Fúlbol |@# Fúlbol |@# Fúlbol |@# Fúlbol |@# \r\nBienvenidos a Tenis BASISSS \r\nEsta es la descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum est volutpat lacus convallis molestie. Donec luctus pharetra arcu, ut tristique quam rutrum a. Nam ultricies urna sed interdum sagittis. Sed vitae molestie mi, at iaculis mauris. Etiam lorem nibh, gravida maximus sem eget, laoreet sagittis tellus. Morbi semper sed urna id porta. Aliquam congue sem nunc, eu sagittis felis mollis eu. Nulla aliquet a lacus vel vulputate. Sed quis malesuada augue. Cras mauris leo, sollicitudin in magna eu, tempus varius nisl. In a rhoncus nunc.','5','[\"6f651285-ec49-49bd-a7fc-330fb94f464c.jpg\",\"72414ed8-7b1b-4d78-81bc-ab5f1b9bdc9a.jpg\",\"bb06b624-fead-405c-ab69-5dc0fea4418a.jpg\"]','[\"8\",\"10\",\"11\",\"16\"]',0,50),(64,2,2,'Fútbol FUTOL Pista 1','Fútbol FUTOL. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum est volutpat lacus convallis molestie. Donec luctus pharetra arcu, ut tristique quam rutrum a.','10','[\"6bf3bbef-d62e-4c6e-89de-9aec4ad9bade.jpeg\",\"87265f7d-c6c4-4c26-8962-7b25431d28b7.jpeg\"]','[\"8\",\"10\",\"11\",\"16\"]',0,30),(65,2,2,'Fútbol FUTOL Pista 2','Fútbol FUTOL. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum est volutpat lacus convallis molestie. Donec luctus pharetra arcu, ut tristique quam rutrum a.','10','[\"6bf3bbef-d62e-4c6e-89de-9aec4ad9bade.jpeg\",\"87265f7d-c6c4-4c26-8962-7b25431d28b7.jpeg\"]','[\"8\",\"10\",\"11\",\"16\"]',0,30),(66,2,2,'Fútbol FUTOL Pista 3','Fútbol FUTOL. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum est volutpat lacus convallis molestie. Donec luctus pharetra arcu, ut tristique quam rutrum a.','10','[\"6bf3bbef-d62e-4c6e-89de-9aec4ad9bade.jpeg\",\"87265f7d-c6c4-4c26-8962-7b25431d28b7.jpeg\"]','[\"8\",\"10\",\"11\",\"16\"]',0,30),(67,1,1,'Tenis BASISSS 2','Bienvenidos a Tenis BASISSS \nEsta es la descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum est volutpat lacus convallis molestie. Donec luctus pharetra arcu, ut tristique quam rutrum a. Nam ultricies urna sed interdum sagittis. Sed vitae molestie mi, at iaculis mauris. Etiam lorem nibh, gravida maximus sem eget, laoreet sagittis tellus. Morbi semper sed urna id porta. Aliquam congue sem nunc, eu sagittis felis mollis eu. Nulla aliquet a lacus vel vulputate. Sed quis malesuada augue. Cras mauris leo, sollicitudin in magna eu, tempus varius nisl. In a rhoncus nunc.','7','[\"7ac0ffce-0d88-4512-91e7-5c91635c09bd.jpeg\",\"bcd53264-fbff-46fc-a6ab-6d8f54f145d9.jpeg\"]','[\"8\",\"10\",\"11\",\"16\"]',0,4),(68,1,1,'Tenis BASISSS 3','Bienvenidos a Tenis BASISSS \nEsta es la descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum est volutpat lacus convallis molestie. Donec luctus pharetra arcu, ut tristique quam rutrum a. Nam ultricies urna sed interdum sagittis. Sed vitae molestie mi, at iaculis mauris. Etiam lorem nibh, gravida maximus sem eget, laoreet sagittis tellus. Morbi semper sed urna id porta. Aliquam congue sem nunc, eu sagittis felis mollis eu. Nulla aliquet a lacus vel vulputate. Sed quis malesuada augue. Cras mauris leo, sollicitudin in magna eu, tempus varius nisl. In a rhoncus nunc.','7','[\"7ac0ffce-0d88-4512-91e7-5c91635c09bd.jpeg\",\"bcd53264-fbff-46fc-a6ab-6d8f54f145d9.jpeg\"]','[\"8\",\"10\",\"11\",\"16\"]',1,6),(69,1,1,'Tenis BASISSS 4','Bienvenidos a Tenis BASISSS \nEsta es la descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum est volutpat lacus convallis molestie. Donec luctus pharetra arcu, ut tristique quam rutrum a. Nam ultricies urna sed interdum sagittis. Sed vitae molestie mi, at iaculis mauris. Etiam lorem nibh, gravida maximus sem eget, laoreet sagittis tellus. Morbi semper sed urna id porta. Aliquam congue sem nunc, eu sagittis felis mollis eu. Nulla aliquet a lacus vel vulputate. Sed quis malesuada augue. Cras mauris leo, sollicitudin in magna eu, tempus varius nisl. In a rhoncus nunc.','7','[\"7ac0ffce-0d88-4512-91e7-5c91635c09bd.jpeg\",\"bcd53264-fbff-46fc-a6ab-6d8f54f145d9.jpeg\"]','[\"8\",\"10\",\"11\",\"16\"]',1,8),(70,6,3,'Piso PISO','Piso PISO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum est volutpat lacus convallis molestie. Donec luctus pharetra arcu, ut tristique quam rutrum a. Nam ultricies urna sed interdum sagittis. Sed vitae molestie mi, at iaculis mauris. Etiam lorem nibh, gravida maximus sem eget, laoreet sagittis tellus.','200','[\"1116319b-1a8d-45f3-a2af-72f6b010d587.jpg\",\"5c06f9ff-da5b-409c-804d-b07e05120a25.jpg\",\"0d40a7fc-52d7-4af1-bb66-13477f0b7e73.jpg\"]','[\"1\",\"2\",\"4\",\"5\",\"6\",\"7\",\"8\",\"10\"]',1,4),(71,6,3,'Piso PISO - 2','Piso PISO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum est volutpat lacus convallis molestie. Donec luctus pharetra arcu, ut tristique quam rutrum a. Nam ultricies urna sed interdum sagittis. Sed vitae molestie mi, at iaculis mauris. Etiam lorem nibh, gravida maximus sem eget, laoreet sagittis tellus.','200','[\"1116319b-1a8d-45f3-a2af-72f6b010d587.jpg\",\"5c06f9ff-da5b-409c-804d-b07e05120a25.jpg\",\"0d40a7fc-52d7-4af1-bb66-13477f0b7e73.jpg\"]','[\"1\",\"2\",\"4\",\"5\",\"6\",\"7\",\"8\",\"10\"]',1,4),(72,6,3,'Piso PISO - 3','Piso PISO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum est volutpat lacus convallis molestie. Donec luctus pharetra arcu, ut tristique quam rutrum a. Nam ultricies urna sed interdum sagittis. Sed vitae molestie mi, at iaculis mauris. Etiam lorem nibh, gravida maximus sem eget, laoreet sagittis tellus.','200','[\"1116319b-1a8d-45f3-a2af-72f6b010d587.jpg\",\"5c06f9ff-da5b-409c-804d-b07e05120a25.jpg\",\"0d40a7fc-52d7-4af1-bb66-13477f0b7e73.jpg\"]','[\"1\",\"2\",\"4\",\"5\",\"6\",\"7\",\"8\",\"10\"]',1,4),(73,6,3,'Piso PISO - 4','Piso PISO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum est volutpat lacus convallis molestie. Donec luctus pharetra arcu, ut tristique quam rutrum a. Nam ultricies urna sed interdum sagittis. Sed vitae molestie mi, at iaculis mauris. Etiam lorem nibh, gravida maximus sem eget, laoreet sagittis tellus.','200','[\"1116319b-1a8d-45f3-a2af-72f6b010d587.jpg\",\"5c06f9ff-da5b-409c-804d-b07e05120a25.jpg\",\"0d40a7fc-52d7-4af1-bb66-13477f0b7e73.jpg\"]','[\"1\",\"2\",\"4\",\"5\",\"6\",\"7\",\"8\",\"10\"]',1,4),(74,6,3,'Piso Nuevo','Piso NUEVO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum est volutpat lacus convallis molestie. Donec luctus pharetra arcu, ut tristique quam rutrum a. Nam ultricies urna sed interdum sagittis. Sed vitae molestie mi, at iaculis mauris. Etiam lorem nibh, gravida maximus sem eget, laoreet sagittis tellus.','300','[\"eb2ab0cc-b4a5-409c-8f53-8494e45150ad.jpg\",\"bc57cefc-801d-4490-9843-521dfe503045.jpg\",\"c6cb6a74-0b07-47ba-995c-cc9f63174690.jpg\"]','[\"1\",\"2\",\"4\",\"5\",\"6\",\"17\",\"18\",\"19\",\"20\",\"24\"]',1,3);
/*!40000 ALTER TABLE `ofertas` ENABLE KEYS */;
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
