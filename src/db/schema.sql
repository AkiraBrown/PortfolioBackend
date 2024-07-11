DROP DATABASE IF EXISTS portfolio_db;

CREATE DATABASE portfolio_db;

\c portfolio_db

CREATE TABLE projects(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    lastCommit DATE NOT NULL,
    status VARCHAR(255) NOT NULL
);

CREATE TABLE blogs(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    date_uploaded DATE NOT NULL,
    file_path VARCHAR NOT NULL
);