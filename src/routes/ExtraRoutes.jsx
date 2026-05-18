export const extractRoutes = (menuList) => {
  const routes = [];
  const traverse = (items) => {
    items.forEach(item => {
      if (item.component) {
        const Component = item.component;
        routes.push({ path: item.path, element: <Component /> }); 
      }
      if (item.subMenu?.length) traverse(item.subMenu);
    });
  };
  traverse(menuList);
  return routes;
};