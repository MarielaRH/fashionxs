export const ICONS_MENU_CONFIG = {
  with: 20,
  height: 20,
  margin: "0px 5px 2px 0px",
};

export type MENU_OPTIONS_TYPE = {
  id: string;
  title: string;
  path: string;
};

export const MENU_OPTIONS: MENU_OPTIONS_TYPE[] = [
  {
    id: "xs_home",
    title: "Home",
    path: "/#landing",
  },
  {
    id: "xs_about",
    title: "About us",
    path: "/about",
  },
  {
    id: "xs_categories",
    title: "Categories",
    path: "/#categories",
  },
  {
    id: "xs_account",
    title: "My account",
    path: "/profile",
  },
  {
    id: "xs_cart",
    title: "Cart",
    path: "/cart",
  },
  {
    id: "xs_logout",
    title: "Logout",
    path: "/api/auth/logout",
  },
];

export const PAPER_STYLE = {
  overflow: "visible",
  minWidth: "180px",
  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
  mt: 1.5,
  "& .MuiAvatar-root": {
    width: 32,
    height: 32,
    ml: -0.5,
    mr: 1,
  },
  "&:before": {
    content: '""',
    display: "block",
    position: "absolute",
    top: 1,
    right: 17,
    width: 10,
    height: 10,
    bgcolor: "background.paper",
    transform: "translateY(-50%) rotate(45deg)",
    zIndex: 0,
  },
};
