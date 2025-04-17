import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";

import Navbar from "../../components/global/navbar";
import UserWidget from "../../components/widgets/user";
import MyPostWidget from "../../components/widgets/my_post";
import PostsWidget from "../../components/widgets/posts";
import FriendListWidget from "../../components/widgets/friend_list";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <FriendListWidget />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <PostsWidget isProfile />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
