import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserProvider } from "../../../../../Context/UserProvider";
const settings = [
  {
    Title: "Profile",
    Link: "/Profile",
  },
  {
    Title: "Wish List",
    Link: "/WishList",
  },
  {
    Title: "Dashboard",
    Link: "/Dashboard",
  },
  {
    Title: "Logout",
    Link: "/",
  },
];

const UserImage = ({ User }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const Navigate = useNavigate();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const { Logout } = useUserProvider();

  const handleCloseUserMenu = (Link) => {
    if (Link == "/") {
      Logout();
    }
    Navigate(Link);
    setAnchorElUser(null);
  };
  return (
    <Box
      sx={{
        flexGrow: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: "10",
      }}
    >
      <Typography sx={{ paddingRight: "20px" }}>
        Welcome , {User.username}
      </Typography>

      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt={User.name.firstname.toUpperCase()}
            src={`./images/Users/${User.id}.jpg`}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={() => handleCloseUserMenu()}
      >
        {settings.map((setting, index) => (
          <MenuItem
            key={`${setting.Title}-${index}`}
            onClick={() => handleCloseUserMenu(setting.Link)}
          >
            <Typography textAlign="center">{setting.Title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default UserImage;
