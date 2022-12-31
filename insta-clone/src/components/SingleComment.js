const SingleComment = ({ textComment }) => {
  return (
    <div className="flex gap-1">
      <p>
        <span className="font-bold">TomHolland: </span>
        {textComment}
      </p>
    </div>
  );
};

export default SingleComment;
