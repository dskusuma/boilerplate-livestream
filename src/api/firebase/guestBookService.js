import { firestore } from "../firebase";

export const getGuestBook = async () => {
  const commentsRef = await firestore
    .collection("comments")
    .get()
    .then((snapshot) => {
      let datas = snapshot.docs.map((e) => ({
        id: e.id,
        ...e.data(),
      }));

      return datas;
    })
    .catch((err) => {
      return [];
    });

  return commentsRef;
};

export const postComment = async ({ guestName, comment }) => {
  await firestore.collection("comments").add({ guestName, comment });
};
