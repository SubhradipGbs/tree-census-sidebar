export const filterMenu = (menuData, userRoles) => {
  return (
    menuData
      // .filter((menu) => menu.roles.some((role) => userRoles.includes(role)))
      .filter((menu) => menu.roles.some((role) => role === userRoles))
      .map((menu) => ({
        ...menu,
        subMenu: menu.subMenu
          ? menu.subMenu.filter((subMenu) =>
              subMenu.roles.some((role) => userRoles === role)
            )
          : null,
      }))
  );
};
