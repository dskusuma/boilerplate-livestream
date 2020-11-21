import React from "react";

const Card = ({ name, comment }) => {
  return (
    <div className="p-6 border shadow-md flex flex-col items-start justify-start mt-2 mb-1 rounded-md">
      <h5 className="font-bold text-lg mb-2">{name}</h5>
      <p>{comment}</p>
    </div>
  );
};

const CommentList = ({ comments = [] }) => {
  return comments.map((c) => (
    <Card id={c.id} name={c.guestName} comment={c.comment} />
  ));
};

export default CommentList;
