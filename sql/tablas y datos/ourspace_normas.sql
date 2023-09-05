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
-- Table structure for table `normas`
--

DROP TABLE IF EXISTS `normas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `normas` (
  `idNorma` int NOT NULL,
  `text` varchar(255) NOT NULL,
  `value` int DEFAULT NULL,
  PRIMARY KEY (`idNorma`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `normas`
--

LOCK TABLES `normas` WRITE;
/*!40000 ALTER TABLE `normas` DISABLE KEYS */;
INSERT INTO `normas` VALUES (1,'Pago del alquiler a tiempo cada mes.',1),(2,'Cumplir con los plazos establecidos en el contrato de arrendamiento.',2),(3,'Respetar las horas de silencio y no realizar ruidos excesivos.',3),(4,'No realizar modificaciones o alteraciones en la propiedad sin permiso previo.',4),(5,'Mantener el inmueble limpio y en buen estado.',5),(6,'Reportar de inmediato cualquier daño o problema en la propiedad al propietario.',6),(7,'No permitir el ingreso de personas no autorizadas al inmueble.',7),(8,'Cumplir con las restricciones de uso y no utilizar el inmueble para actividades ilegales.',8),(9,'No subarrendar la propiedad sin el consentimiento previo del propietario.',9),(10,'No fumar dentro del inmueble si está prohibido.',10),(11,'Cuidar y mantener en buen estado los electrodomésticos y muebles proporcionados.',11),(12,'No realizar cambios en las cerraduras o sistemas de seguridad sin permiso.',12),(13,'No realizar mejoras o reparaciones estructurales sin autorización del propietario.',13),(14,'No utilizar el inmueble para fines comerciales sin consentimiento previo.',14),(15,'Cumplir con las normas de seguridad y emergencia establecidas por el propietario.',15),(16,'No causar daños intencionales a la propiedad.',16),(17,'No dejar objetos personales o basura en áreas comunes.',17),(18,'No utilizar la propiedad para almacenar materiales peligrosos o inflamables.',18),(19,'Cumplir con las regulaciones de estacionamiento si corresponde.',19),(20,'No desactivar o modificar sistemas de alarma o seguridad sin autorización.',20),(21,'Mantener los jardines y áreas exteriores en buen estado si es responsabilidad del inquilino.',21),(22,'No molestar o acosar a otros inquilinos o vecinos.',22),(23,'No utilizar el inmueble para criar animales sin el consentimiento del propietario.',23),(24,'No alterar las instalaciones eléctricas, de plomería o HVAC sin permiso.',24),(25,'Respetar las políticas de reciclaje y eliminación de residuos.',25),(26,'No utilizar el inmueble para actividades ilegales o inmorales.',26);
/*!40000 ALTER TABLE `normas` ENABLE KEYS */;
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
