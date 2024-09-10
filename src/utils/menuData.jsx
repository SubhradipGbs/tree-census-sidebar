import { BsClipboard2DataFill } from "react-icons/bs";
import { FaTachometerAlt, FaUsers, FaClipboardList } from "react-icons/fa";
const menuData = [
  {
    title: "Dashboard",
    icon: <FaTachometerAlt size={18} />,
    roles: [1, 3],
    link: "/",
  },
  {
    title: "Reports",
    icon: <BsClipboard2DataFill size={20} />,
    roles: [1],
    subMenu: [
      { title: "Tree Survey Reports", link: "/tree-survey", roles: [1] },
      { title: "Area Survey Reports", link: "/area-survey", roles: [1] },
      { title: "Payment Reports", link: "/payment-report", roles: [1] },
    ],
  },
  {
    title: "Users",
    icon: <FaUsers size={20} />,
    roles: [1],
    subMenu: [
      { title: "Users", link: "/userlist", roles: [1] },
      { title: "Assignments", link: "/user-assinments", roles: [1] },
    ],
  },
  {
    title: "Manage Applications",
    icon: <FaClipboardList size={20} />,
    roles: [1],
    link: "/",
  },
  {
    title: "Forms",
    icon: <FaClipboardList size={20} />,
    roles: [3],
    subMenu: [
      {
        title: "Tree Cutting/Pruning",
        link: "/forms",
        roles: [3],
      },
      {
        title: "Payments",
        link: "/payment-forms",
        roles: [3],
      },
    ],
  },
  {
    title: "Applications",
    icon: <FaClipboardList size={20} />,
    roles: [3],
    subMenu: [
      {
        title: "Tree Cutting/Pruning",
        link: "/applications",
        roles: [3],
      },
      {
        title: "Payment Status",
        link: "/payments",
        roles: [3],
      },
    ],
  },
];

export default menuData;
