import Post from "./Post";

const AllPosts = (data) => {
  console.log("data da allposts", data.data);
  const fetchPost = () => {
    const myPosts = [];
    for (let key in data.data) {
      myPosts.push({
        postId: data.data[key].postId,
        postImg: data.data[key].postImgUrl,
        description: data.data[key].postDescription,
        verified: true,
      });
    }
    console.log(myPosts);
    const reversePost = [...myPosts].reverse();

    return reversePost.map((post) => {
      return (
        <div key={post.postId}>
          <Post
            postImg={post.postImg}
            description={post.description}
            verified={true}
          />
        </div>
      );
    });
  };

  return <div>{fetchPost()}</div>;
};

export default AllPosts;
