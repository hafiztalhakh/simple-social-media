import { Box } from "@mui/material";

const UserAvatar = ({ size = "60px" }) => {
  const baseUrl = import.meta.env.BASE_URL ?? "/";

  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${baseUrl}assets/dummy_dp.jpg`}
      />
    </Box>
  );
};

export default UserAvatar;
