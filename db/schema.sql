DROP DATABASE IF EXISTS gym_db;

CREATE DATABASE gym_db;

USE gym_db;

CREATE TABLE users (
    id INT NOT NULL,
    name varchar(50) NOT NULL,
    email varchar(50) Not NULL unique,
    
)