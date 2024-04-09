-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: dbfuncionarios
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `rl_atividade_epi`
--

DROP DATABASE IF EXISTS `dbfuncionarios`;

CREATE DATABASE `dbfuncionarios`;

USE `dbfuncionarios`;

DROP TABLE IF EXISTS `rl_atividade_epi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rl_atividade_epi` (
  `id_atividade_epi` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_funcionario` bigint(20) DEFAULT NULL,
  `id_atividade` bigint(20) NOT NULL,
  `id_epi` bigint(20) NOT NULL,
  `nu_ca` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_atividade_epi`),
  KEY `id_epi` (`id_epi`),
  KEY `id_atividade` (`id_atividade`),
  KEY `id_funcionario` (`id_funcionario`),
  CONSTRAINT `rl_atividade_epi_ibfk_1` FOREIGN KEY (`id_epi`) REFERENCES `tb_epi` (`id_epi`),
  CONSTRAINT `rl_atividade_epi_ibfk_2` FOREIGN KEY (`id_atividade`) REFERENCES `tb_atividade` (`id_atividade`),
  CONSTRAINT `rl_atividade_epi_ibfk_3` FOREIGN KEY (`id_funcionario`) REFERENCES `tb_funcionarios` (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rl_atividade_epi`
--

LOCK TABLES `rl_atividade_epi` WRITE;
/*!40000 ALTER TABLE `rl_atividade_epi` DISABLE KEYS */;
/*!40000 ALTER TABLE `rl_atividade_epi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_atividade`
--

DROP TABLE IF EXISTS `tb_atividade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_atividade` (
  `id_atividade` bigint(20) NOT NULL AUTO_INCREMENT,
  `nome_atividade` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_atividade`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_atividade`
--

LOCK TABLES `tb_atividade` WRITE;
/*!40000 ALTER TABLE `tb_atividade` DISABLE KEYS */;
INSERT INTO `tb_atividade` VALUES (1,'atividade-1'),(2,'atividade-2'),(3,'atividade-3');
/*!40000 ALTER TABLE `tb_atividade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_epi`
--

DROP TABLE IF EXISTS `tb_epi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_epi` (
  `id_epi` bigint(20) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_epi`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_epi`
--

LOCK TABLES `tb_epi` WRITE;
/*!40000 ALTER TABLE `tb_epi` DISABLE KEYS */;
INSERT INTO `tb_epi` VALUES (1,'epi-1'),(2,'epi-2'),(3,'epi-3'),(4,'epi-4');
/*!40000 ALTER TABLE `tb_epi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_funcionarios`
--

DROP TABLE IF EXISTS `tb_funcionarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_funcionarios` (
  `id_funcionario` bigint(20) NOT NULL AUTO_INCREMENT,
  `nome` varchar(128) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `dt_nascimento` datetime DEFAULT NULL,
  `sexo` varchar(10) DEFAULT NULL,
  `status` varchar(10) NOT NULL,
  `cargo` varchar(50) NOT NULL,
  `rg` varchar(10) NOT NULL,
  `id_atividade` bigint(20) DEFAULT NULL,
  `id_epi` bigint(20) DEFAULT NULL,
  `nu_ca` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_funcionario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_funcionarios`
--

LOCK TABLES `tb_funcionarios` WRITE;
/*!40000 ALTER TABLE `tb_funcionarios` DISABLE KEYS */;
INSERT INTO `tb_funcionarios` VALUES (1,'Paulo Junior','000.000.000-00','1992-01-30 00:00:00','Masculino','0','Analista','159753',1,1,'12445'),(2,'Junior Junior','111.111.111-11','1992-01-30 00:00:00','Masculino','1','RH','159753',1,1,'12445'),(3,'Junior Junior','222.222.222-22','1992-01-30 00:00:00','Masculino','0','Front','159753',1,1,'12445');
/*!40000 ALTER TABLE `tb_funcionarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'dbfuncionarios'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-08 16:23:16
