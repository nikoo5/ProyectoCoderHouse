export const initSqlQuery = [
  `
    CREATE TABLE IF NOT EXISTS authors
    (
      id INTEGER NOT NULL,
      db_id TEXT NOT NULL,
      name TEXT NOT NULL,
      image TEXT,
      CONSTRAINT PK_authors PRIMARY KEY (id)
    );
  `,
  `
    CREATE INDEX IF NOT EXISTS authos_ix1 ON authors (id);
  `,
  `
    CREATE TABLE IF NOT EXISTS knots
    (
      id INTEGER NOT NULL
            CONSTRAINT PK_knots PRIMARY KEY AUTOINCREMENT,
      author_id INTEGER NOT NULL,
      db_id TEXT NOT NULL,
      date INTEGER NOT NULL,
      message TEXT NOT NULL,
      favorite INTEGER NOT NULL,
      CONSTRAINT Relationship2 FOREIGN KEY (author_id) REFERENCES authors (id)
    );
  `,
  `
    CREATE INDEX IF NOT EXISTS IX_Relationship2 ON knots (author_id);
  `,
  `
    CREATE INDEX IF NOT EXISTS knots_ix1 ON knots (id);
`,
];

export const insertNewKnotQuery = `
  INSERT INTO knots (author_id, db_id, date, message, favorite) VALUES (?, ?, strftime('%s','now'), ?, 0);
`;

export const insertKnotQuery = `
  INSERT INTO knots (author_id, db_id, date, message, favorite) VALUES (?, ?, strftime('%s', ?), ?, ?);
`;

export const removeKnotQuery = `
  DELETE FROM knots WHERE db_id = ?;
`;

export const selectOneKnotQuery = `
SELECT a.db_id as "author_id", a.name as "author_name", a.image as "author_image", k.db_id as "id", k.message, datetime(k.date,'unixepoch') as "date", k.favorite FROM knots k JOIN authors a ON a.id = k.author_id WHERE k.db_id = ?;
`;

export const selectAllKnotsQuery = `
  SELECT a.db_id as "author_id", a.name as "author_name", a.image as "author_image", k.db_id as "id", k.message, datetime(k.date,'unixepoch') as "date", k.favorite FROM knots k JOIN authors a ON a.id = k.author_id;
`;

export const insertAuthorQuery = `
  INSERT INTO authors (db_id, name, image) VALUES (?, ?, ?);
`;

export const selectAuthorByDbId = `
  SELECT * FROM authors WHERE db_id = ?;
`;
