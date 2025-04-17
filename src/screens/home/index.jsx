import { Box, useMediaQuery } from "@mui/material";

import Navbar from "../../components/global/navbar";
import UserWidget from "../../components/widgets/user";
import MyPostWidget from "../../components/widgets/my_post";
import PostsWidget from "../../components/widgets/posts";
import AdvertWidget from "../../components/widgets/advert";
import FriendListWidget from "../../components/widgets/friend_list";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={1} picturePath={"/assets/dummy_dp.jpg"} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={"/assets/dummy_dp.jpg"} />
          <PostsWidget userId={1} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={1} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
