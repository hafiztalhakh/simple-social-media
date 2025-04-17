import { useEffect, useState } from "react";
import PostWidget from "../post";
import { newsFeedPosts, profilePosts } from "../../../data";

const PostsWidget = ({ isProfile = false }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    setPosts(newsFeedPosts);
  };

  const getUserPosts = async () => {
    setPosts(profilePosts);
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
