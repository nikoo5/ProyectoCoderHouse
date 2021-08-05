import React from "react";
import * as SQLite from "expo-sqlite";

import {
  initSqlQuery,
  insertAuthorQuery,
  insertKnotQuery,
  insertNewKnotQuery,
  selectAllKnotsQuery,
  selectAuthorByDbId,
} from "./querys.sql";
import moment from "moment";

const db = SQLite.openDatabase("knotit.db");

export const cleanDb = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql("DELETE FROM knots;", [], null, null);
      tx.executeSql("DELETE FROM authors;", [], null, null);
      resolve();
    });
  });
};

export const initDb = () => {
  return new Promise((resolve, reject) => {
    let ok = true;
    db.transaction((tx) => {
      initSqlQuery.forEach((sql) => {
        if (ok) {
          tx.executeSql(
            sql,
            [],
            () => {},
            (_, error) => {
              ok = false;
              reject(error);
            }
          );
        }
      });
      if (ok) resolve();
    });
  });
};

export const insertKnot = (
  user,
  author_db_id,
  db_id,
  message,
  date,
  favorite
) => {
  return new Promise(async (resolve, reject) => {
    let author = await fetchAuthor(author_db_id);

    if (author.rows.length === 0) {
      const insert = await insertAuthor(
        author_db_id,
        `${user.name} ${user.lastName}`,
        user.profileImage
      );
      if (insert.rowsAffected === 1) {
        author = await fetchAuthor(author_db_id);
      }
    }

    if (author.rows.length !== 0) {
      db.transaction((tx) => {
        tx.executeSql(
          insertKnotQuery,
          [
            author.rows.item(0).id,
            db_id,
            moment(date).format("YYYY-MM-DD hh:MM:ss"),
            message,
            favorite,
          ],
          (_, result) => {
            resolve(result);
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    } else {
      reject("No se pudo crear el autor");
    }
  });
};

export const insertNewKnot = (user, author_db_id, db_id, message) => {
  return new Promise(async (resolve, reject) => {
    let author = await fetchAuthor(author_db_id);

    if (author.rows.length === 0) {
      const insert = await insertAuthor(
        author_db_id,
        `${user.name} ${user.lastName}`,
        user.profileImage
      );
      if (insert.rowsAffected === 1) {
        author = await fetchAuthor(author_db_id);
      }
    }

    if (author.rows.length !== 0) {
      db.transaction((tx) => {
        tx.executeSql(
          insertNewKnotQuery,
          [author.rows.item(0).id, db_id, message],
          (_, result) => {
            resolve(result);
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    } else {
      reject("No se pudo crear el autor");
    }
  });
};

export const fetchKnots = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        selectAllKnotsQuery,
        [],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const insertAuthor = (db_id, name, image) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        insertAuthorQuery,
        [db_id, name, image],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const fetchAuthor = (author_db_id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        selectAuthorByDbId,
        [author_db_id],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};
