import { useEffect, useState } from "react";
import PostWidget from "../post";

const PostsWidget = ({ userId, isProfile = false }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    setPosts([]);
  };

  const getUserPosts = async () => {
    setPosts([
      {
        _id: 2,
        userId: 1,
        firstName: "Steve",
        lastName: "Ralph",
        location: "New York, CA",
        description: "Some really long random description",
        picturePath: "post1.jpeg",
        userPicturePath: "p3.jpeg",
        likes: [1, 2, 3],
        comments: [
          "random comment",
          "another random comment",
          "yet another random comment",
        ],
      },
      {
        _id: 4,
        userId: 1,
        firstName: "Whatcha",
        lastName: "Doing",
        location: "Korea, CA",
        description:
          "Another really long random description. This one is longer than the previous one.",
        picturePath: "post2.jpeg",
        userPicturePath: "p6.jpeg",
        likes: [1, 2, 3],
        comments: [
          "one more random comment",
          "and another random comment",
          "no more random comments",
          "I lied, one more random comment",
        ],
      },
    ]);
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {posts?.length > 0 &&
        posts?.map(
          ({
            _id,
            userId,
            firstName,
            lastName,
            description,
            location,
            picturePath,
            userPicturePath,
            likes,
            comments,
          }) => (
            <PostWidget
              key={_id}
              postId={_id}
              postUserId={userId}
              name={`${firstName} ${lastName}`}
              description={description}
              location={location}
              picturePath={picturePath}
              userPicturePath={userPicturePath}
              likes={likes}
              comments={comments}
            />
          )
        )}
    </>
  );
};

export default PostsWidget;
