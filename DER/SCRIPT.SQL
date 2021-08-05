/*
Created: 4/8/2021
Modified: 4/8/2021
Model: KnotIt
Database: SQLite 3.7
*/


-- Create tables section -------------------------------------------------

-- Table authors

CREATE TABLE authors
(
  id INTEGER NOT NULL,
  db_id TEXT NOT NULL,
  name TEXT NOT NULL,
  image TEXT,
  CONSTRAINT PK_authors PRIMARY KEY (id)
);

CREATE INDEX authos_ix1 ON authors (id);

-- Table knots

CREATE TABLE knots
(
  id INTEGER NOT NULL
        CONSTRAINT PK_knots PRIMARY KEY AUTOINCREMENT,
  author_id INTEGER NOT NULL,
  db_id TEXT NOT NULL,
  date REAL NOT NULL,
  message TEXT NOT NULL,
  favorite INTEGER NOT NULL,
  CONSTRAINT Relationship2 FOREIGN KEY (author_id) REFERENCES authors (id)
);

CREATE INDEX IX_Relationship2 ON knots (author_id);

CREATE INDEX knots_ix1 ON knots (id);

