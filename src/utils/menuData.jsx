import { BsClipboard2DataFill } from "react-icons/bs";
import { FaTachometerAlt, FaUsers, FaClipboardList } from "react-icons/fa";
const menuData = [
  {
    title: "Dashboard",
    icon: <FaTachometerAlt size={18} />,
    roles: ["admin", "user"],
    link: "/",
  },
  {
    title: "Reports",
    icon: <BsClipboard2DataFill size={20} />,
    roles: ["admin"],
    subMenu: [
      { title: "Tree Survey Reports", link: "/users/all", roles: ["admin"] },
      { title: "Area Survey Reports", link: "/users/add", roles: ["admin"] },
      { title: "Payment Reports", link: "/users/add", roles: ["admin"] },
    ],
  },
  {
    title: "Users",
    icon: <FaUsers size={20} />,
    roles: ["admin"],
    subMenu: [
      { title: "Users", link: "/settings/profile", roles: ["admin"] },
      { title: "Assignments", link: "/settings/account", roles: ["admin"] },
    ],
  },
  {
    title: "Manage Applications",
    icon: <FaClipboardList size={20} />,
    roles: ["admin"],
    link: "/",
  },
  {
    title: "Forms",
    icon: <FaClipboardList size={20} />,
    roles: ["user"],
    subMenu: [
      {
        title: "Tree Cutting/Pruning",
        link: "/settings/profile",
        roles: ["user"],
      },
      {
        title: "Online Payment",
        link: "/settings/profile",
        roles: ["user"],
      },
    ],
  },
  {
    title: "Applications",
    icon: <FaClipboardList size={20} />,
    roles: ["user"],
    subMenu: [
      {
        title: "Tree Cutting/Pruning",
        link: "/settings/profile",
        roles: ["user"],
      },
      {
        title: "Online Payment",
        link: "/settings/profile",
        roles: ["user"],
      },
    ],
  },
];

export default menuData;
