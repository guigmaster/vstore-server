-- MySQL dump 10.16  Distrib 10.3.7-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: vstore__development
-- ------------------------------------------------------
-- Server version	10.3.7-MariaDB-1:10.3.7+maria~sid-log

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
-- Current Database: `vstore__development`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `vstore__development` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `vstore__development`;

--
-- Table structure for table `pro_products`
--

DROP TABLE IF EXISTS `pro_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pro_products` (
  `pro_id` int(11) NOT NULL AUTO_INCREMENT,
  `pro_name` varchar(80) NOT NULL,
  `pro_description` text DEFAULT NULL,
  `pro_price` double(10,2) NOT NULL,
  `pro_quantity` int(11) NOT NULL,
  `pro_image` varchar(255) DEFAULT NULL,
  `pro_created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `pro_updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`pro_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pro_products`
--

LOCK TABLES `pro_products` WRITE;
/*!40000 ALTER TABLE `pro_products` DISABLE KEYS */;
INSERT INTO `pro_products` VALUES (1,'Caneca Geek Side - Dark Side Coffee - Yaay','Essa caneca divertida e moderna e inspirada no universo Star Wars e traz estampa com a sombra do Darth Vader e os dizeres \"I Like My Coffe on the Dark Side\". Divertida e resistente, a caneca feita no material ceramica, pode ser levada ao microondas.',40.00,50,'uploads/1529714237792-caneca-geek.jpeg','2018-06-23 00:37:17',NULL),(2,'Adesivo Decorativo Escritório Nerd Geek Star Trek Predador','Adesivo vazado, fácil aplicação, o fundo será o local aplicado. \r\n\r\n- Material: Vinil, resistente a sol e água. Não causa danos a superfície quando removido.\r\n- Aplicação: O adesivo vinílico é muito versátil, pode ser aplicado em parede, móveis, eletrodomésticos, vidro, metal, madeira, até em automóveis. \r\n- Cor: Preto, branco, vermelho ou escolhida pelo cliente dentre as que temos disponíveis. ',19.99,100,'uploads/1529714578596-adesivo-decorativo.jpg','2018-06-23 00:42:58',NULL),(3,'Placas Decorativas em MDF - Teens e Geek','Material \r\nPlaca de MDF com 3mm de espessura, impressão feita em vinil com acabamento fosco. \r\nA placa já vai com fita dupla face, basta retirar e aplicar na parede, não é necessário furar. \r\nAlém da parede, também pode ser aplicado em paredes lisas, azulejos, madeira, vidros, móveis, geladeiras, portas, etc. ',7.20,200,'uploads/1529714693391-placas-decorativas.jpg','2018-06-23 00:44:53',NULL),(4,'relógio para matemáticos geeks e nerds','dê um presente para o seu amigo nerd\r\ncriativo relógio de pulso unissex com divertido mostrador nerd.\r\no mostrador conta com os números de cálculos matemáticos.\r\nperfeito para presentear os amigos matemáticos ou nerds\r\nproduto de ótima qualidade.',49.00,80,'uploads/1529714840234-relogio-matematico.jpg','2018-06-23 00:47:20',NULL),(5,'Camiseta Raglan Manga Longa Astronomia Nasa Nerd Geek','RAGLAN MANGA LONGA \r\n100% POLIESTER COM AS \r\nMANGAS 100% ALGODÃO ',39.99,200,'uploads/1529714986562-camisa-astronomia-nasa-nerd-geek.jpg','2018-06-23 00:49:46',NULL),(6,'Moletom Blusa Unissex Star Wars Bb-8','',149.90,200,'uploads/1529715191816-moletom-bb8.jpeg','2018-06-23 00:53:11',NULL);
/*!40000 ALTER TABLE `pro_products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-22 21:54:39
