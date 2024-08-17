DROP TABLE IF EXISTS projects; 
CREATE TABLE projects(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    language VARCHAR(100),
    link VARCHAR(500),
    stars INTEGER,
    forks INTEGER,
    updatedAt DATE NOT NULL
);
DROP TABLE IF EXISTS blogs;
CREATE TABLE blogs(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    date_uploaded DATE NOT NULL,
    file_path VARCHAR NOT NULL
);