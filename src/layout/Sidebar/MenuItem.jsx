import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

const MenuItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const [isMainActive, setIsMainActive] = useState(false);
  const [isOneOfChildrenActive, setIsOneOfChildrenActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const calculateIsActive = () => {
    setIsMainActive(false);
    setIsOneOfChildrenActive(false);
    if (item.subMenu) {
      item.subMenu.forEach((m) => {
        if (location.pathname.startsWith(m.link)) {
          setIsOneOfChildrenActive(true);
        }
      });
    }
    if (item.link == location.pathname) {
      setIsMainActive(true);
    }
  };

  const handleClick = (link) => {
    navigate(link);
    setExpanded(false);
  };

  const handleMenuClick = () => {
    if (item.link) {
      navigate(item.link);
    } else {
      setExpanded(!expanded);
    }
  };

  useEffect(() => {
    calculateIsActive();
  }, [location, item, expanded]);

  return (
    <li className="mb-2">
      <div
        className={`w-full rounded p-3 flex items-center justify-between text-left focus:outline-none hover:text-white hover:bg-blue-700 ${
          isMainActive || isOneOfChildrenActive ? "bg-blue-700 text-white" : ""
        }`}
        onClick={() => {
          handleMenuClick();
        }}
      >
        <div className="flex items-center my-auto">
          {item.icon}
          <Typography className="ml-2 text-sm">{item.title}</Typography>
        </div>
        {item.subMenu && item.subMenu.length > 0 && (
          <div>{expanded ? <FaChevronUp /> : <FaChevronDown />}</div>
        )}
      </div>
      {!!expanded && item.subMenu && !!item.subMenu.length > 0 && (
        <div>
          <ul className="ms-9 list-disc">
            {item.subMenu.map((ch, subIndex) => (
              <li
                key={subIndex}
                className="p-2 cursor-pointer "
                onClick={() => {
                  handleClick(ch.link);
                }}
              >
                <Typography className="text-sm hover:text-blue-800 hover:font-bold">
                  {ch.title}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
