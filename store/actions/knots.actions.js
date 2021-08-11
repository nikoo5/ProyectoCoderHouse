export const SELECT_KNOT = "SELECT_KNOT";
export const LOAD_KNOTS = "LOAD_KNOTS";
export const ADD_KNOT = "ADD_KNOT";
export const DELETE_KNOT = "DELETE_KNOT";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const GET_FAVORITES = "GET_FAVORITES";

import { URL_DATABASE } from "../../constants/Firebase";
import { author_coder } from "../../data/knots";
import { fetchAuthor, fetchKnot, insertNewKnot, removeKnot } from "../../db";
import { insertAuthor } from "../../db/index";

export const selectKnot = (id) => ({
  type: SELECT_KNOT,
  knotID: id,
});

// export const loadKnots = (auth) => {
//   return async (dispatch) => {
//     const cloud = await fetch(`${URL_DATABASE}/knots.json?auth=${auth.token}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!cloud.ok) {
//       throw new Error("No se pudo cargar los nudos");
//     }

//     const knots = await cloud.json();
//     let newKnots = [];

//     if (knots !== null) {
//       for (const knot in knots) {
//         let local = { rows: { length: 0 } };
//         try {
//           local = await fetchKnot(knot.id);
//         } catch (err) {}

//         if (local.rows.length === 0) {
//           let local_author = await fetchAuthor(knot.author_id);
//           if (local_author.rows.length === 0) {
//             const cloud_author = await fetch(
//               `${URL_DATABASE}/authors/${knot.author_id}.json?auth=${auth.token}`,
//               {
//                 method: "GET",
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//               }
//             );

//             if (cloud.ok) {
//               const author = await cloud_author.json();
//               const local_author = await insertAuthor(
//                 author.id,
//                 `${author.name} ${author.lastName}`,
//                 author.profileImage
//               );
//             }
//           }
//         } else {
//           //update
//         }
//       }
//     }

//     dispatch({
//       type: LOAD_KNOTS,
//       newKnots,
//     });
//   };
// };

export const addKnot = (auth, author, message, location) => {
  return async (dispatch) => {
    const uuid = require("uuid");
    const newId = uuid.v4();

    const cloud_knot = await fetch(
      `${URL_DATABASE}/knots/${newId}.json?auth=${auth.token}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: newId,
          author_id: author.id,
          date: Date.now(),
          message: message,
          location: location,
        }),
      }
    );

    const cloud_author = await fetch(
      `${URL_DATABASE}/authors/${author.id}.json?auth=${auth.token}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: author.id,
          name: author.name,
          lastName: author.lastName,
          profileImage: author.profileImage,
        }),
      }
    );

    const local = await insertNewKnot(
      author,
      author.id,
      newId,
      message,
      location
    );

    dispatch({
      type: ADD_KNOT,
      knotItem: {
        id: newId,
        author: author,
        date: new Date(),
        message: message,
        location: location,
        favorite: false,
      },
    });
  };
};

export const deleteKnot = (auth, id) => {
  return async (dispatch) => {
    const cloud = await fetch(
      `${URL_DATABASE}/knots/${id}.json?auth=${auth.token}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const local = await removeKnot(id);

    dispatch({
      type: DELETE_KNOT,
      knotID: id,
    });
  };
};

export const toggleFavorite = (id) => ({
  type: TOGGLE_FAVORITE,
  knotID: id,
  userID: author_coder.id,
});

export const getFavorites = () => ({
  type: GET_FAVORITES,
});
