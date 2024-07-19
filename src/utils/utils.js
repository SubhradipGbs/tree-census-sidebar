export const filterMenu = (menuData, userRoles) => {
  return menuData
    .filter((menu) => menu.roles.some((role) => userRoles.includes(role)))
    .map((menu) => ({
      ...menu,
      subMenu: menu.subMenu
        ? menu.subMenu.filter((subMenu) =>
            subMenu.roles.some((role) => userRoles.includes(role))
          )
        : null,
    }));
};
