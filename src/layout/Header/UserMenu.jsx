import {
  Avatar,
  Badge,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import userImg from "/default_user.png";
import React from "react";
import { FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../store/reducers/auth";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(logOutUser());
    navigate("/login");
  };

  return (
    <div>
      <Menu>
        <MenuHandler>
          <Avatar
            size="sm"
            // withBorder
            variant="circular"
            alt="tania andrew"
            className="cursor-pointer"
            src={userImg}
          ></Avatar>
        </MenuHandler>
        <MenuList>
          <MenuItem className="flex items-center gap-2">
            <FaUser size={16} />

            <Typography variant="small" className="font-medium">
              My Profile
            </Typography>
          </MenuItem>
          <MenuItem className="flex items-center gap-2">
            <FaGear size={16} />

            <Typography variant="small" className="font-medium">
              Edit Profile
            </Typography>
          </MenuItem>

          <hr className="my-2 border-blue-gray-50" />
          <MenuItem className="flex items-center gap-2">
            <LuLogOut size={16} />
            <Typography
              variant="small"
              className="font-medium"
              onClick={logout}
            >
              Sign Out
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default UserMenu;
