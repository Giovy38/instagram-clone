const SingleComment = ({ textComment }) => {
  return (
    <div className="flex gap-1">
      <span className="font-bold">TomHolland: </span>
      <p>{textComment}</p>
    </div>
  );
};

export default SingleComment;
