CREATE DATABASE `estoesjerez` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */ 
-- --------------------------------------------------------

CREATE TABLE `comentarios` (
  `id_Comentario` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) DEFAULT NULL,
  `Apellidos` varchar(45) DEFAULT NULL,
  `Telefono` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Direccion` varchar(200) DEFAULT NULL,
  `CP` varchar(45) DEFAULT NULL,
  `Comentario` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id_Comentario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3
-- --------------------------------------------------------
CREATE TABLE `producto` (
  `id_Prod` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) DEFAULT NULL,
  `descripcion` text,
  `url` varchar(200) DEFAULT NULL,
  `tipoProducto` int NOT NULL,
  PRIMARY KEY (`id_Prod`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb3
-- --------------------------------------------------------

CREATE TABLE `servicio` (
  `id_Serv` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `descripcion` text,
  `url` varchar(200) DEFAULT NULL,
  `TipoServicio` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id_Serv`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3
-- --------------------------------------------------------
CREATE TABLE `usuario` (
  `id_Usuario` int NOT NULL AUTO_INCREMENT,
  `RFC` varchar(13) DEFAULT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `PrimerAp` varchar(45) DEFAULT NULL,
  `SegundoAp` varchar(45) DEFAULT NULL,
  `Telefono` varchar(45) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `tipoUsuario` int DEFAULT NULL,
  PRIMARY KEY (`id_Usuario`),
  UNIQUE KEY `RFC_UNIQUE` (`RFC`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb3