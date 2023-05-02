CREATE DATABASE IF NOT EXISTS db_masc;
USE db_masc;

CREATE TABLE IF NOT EXISTS db_masc.Usuario 
(
  id INT NOT NULL UNIQUE,
  email VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  token VARCHAR(45) NOT NULL,
  createAt DATE,
  updatedAt DATE,
  PRIMARY KEY (id)
  );
  
CREATE TABLE IF NOT EXISTS db_masc.Subcategoria
(
  id INT NOT NULL UNIQUE,
  nombre VARCHAR(20),
  createAt DATE,
  updatedAt DATE
);
  
CREATE TABLE IF NOT EXISTS db_masc.Categoria
(
  id INT NOT NULL UNIQUE,
  nombre VARCHAR(20),
  createAt DATE,
  updatedAt DATE,
  subcategoriaId INT NOT NULL,

  
  FOREIGN KEY (subcategoriaId) REFERENCES Subcategoria(id)
);

CREATE TABLE IF NOT EXISTS db_masc.Producto 
(
  id INT NOT NULL UNIQUE,
  titulo VARCHAR(50),
  descripcion VARCHAR(70),
  precio INT NOT NULL,
  imagen VARCHAR(40),
  stock INT NOT NULL,
  createAt DATE,
  updatedAt DATE,
  PRIMARY KEY (id),
  usuarioId INT NOT NULL,
  categoriaId INT NOT NULL,
  subcategoriaId INT NOT NULL,
  
  FOREIGN KEY (usuarioId) REFERENCES Usuario(id),
  FOREIGN KEY (categoriaId) REFERENCES Categoria(id),
  FOREIGN KEY (subcategoriaId) REFERENCES Subcategoria(id)
  );

CREATE TABLE IF NOT EXISTS db_masc.Mensaje
(
  id INT NOT NULL UNIQUE,
  mensaje VARCHAR(200),
  createAt DATE,
  updatedAt DATE,
  usuarioId INT NOT NULL,
  productoId INT NOT NULL,
  
  FOREIGN KEY (usuarioId) REFERENCES Usuario(id),
  FOREIGN KEY (productoId) REFERENCES Producto(id)
);

CREATE TABLE IF NOT EXISTS db_masc.Carrito
(
  id INT NOT NULL UNIQUE,
  productos VARCHAR (200),
  total INT NOT NULL,
  createAt DATE,
  updatedAt DATE,
  usuarioId INT NOT NULL,
  
  
  FOREIGN KEY (usuarioId) REFERENCES Usuario(id)
);

CREATE TABLE IF NOT EXISTS db_masc.Pago
(
  id INT NOT NULL UNIQUE,
  createAt DATE,
  updatedAt DATE,
  carritoId INT NOT NULL,
  
  FOREIGN KEY (carritoId) REFERENCES Carrito(id)
);

    
