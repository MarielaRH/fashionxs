import {
  ClickAwayListener,
  Divider,
  IconButton,
  MenuItem,
  Paper,
  Popper,
} from "@mui/material";
import { useRef, useState } from "react";
import MenuList from "@mui/material/MenuList";
import Grow from "@mui/material/Grow";
import {
  AutoAwesome,
  Home,
  Info,
  Menu,
  Person,
  ShoppingBag,
  ShoppingCart,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import {
  ICONS_MENU_CONFIG,
  MENU_OPTIONS,
  MENU_OPTIONS_TYPE,
  PAPER_STYLE,
} from "@/utils/constants/menu";

const MenuButton = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  // closes menu
  const handleClose = (path?: string) => {
    if (path) {
      router.push(path);
    }

    setOpen(false);
  };


  const getMenuItem = (menuItem: MENU_OPTIONS_TYPE) => {
    // Checks the menuItem title to assign an icon
    const icon = [];
    if (menuItem.title === MENU_OPTIONS[0].title) {
      icon.push(<Home sx={ICONS_MENU_CONFIG} />);
    } else if (menuItem.title === MENU_OPTIONS[1].title) {
      icon.push(<Info sx={ICONS_MENU_CONFIG} />);
    } else if (menuItem.title === MENU_OPTIONS[2].title) {
      icon.push(<ShoppingBag sx={ICONS_MENU_CONFIG} />);
    } else if (menuItem.title === MENU_OPTIONS[3].title) {
      icon.push(<AutoAwesome sx={ICONS_MENU_CONFIG} />);
    } else if (menuItem.title === MENU_OPTIONS[4].title) {
      icon.push(<Person sx={ICONS_MENU_CONFIG} />);
    } else {
      icon.push(<ShoppingCart sx={ICONS_MENU_CONFIG} />);
    }

    // Returns a title-item
    if (menuItem.title === MENU_OPTIONS[5].title) {
      return (
        <div  key={menuItem.id + '_container'}>
          <Divider/>
          <MenuItem
            onClick={() => {
              handleClose(menuItem.path);
            }}
            key={menuItem.id}
          >
            {icon[0]}
            {menuItem.title}
          </MenuItem>
        </div>
      );
    } else {
      return (
        <MenuItem
          onClick={() => {
            handleClose(menuItem.path);
          }}
          key={menuItem.id}
        >
          {icon[0]}
          {menuItem.title}
        </MenuItem>
      );
    }
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={()=> {setOpen((prevOpen) => !prevOpen)}}
        size="small"
        aria-controls={open ? "menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Menu sx={{ with: 32, height: 32, color: "white" }} />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: (placement = "top"),
              marginTop: -5,
              paddingLeft: 8,
              paddingRight: 8,
            }}
          >
            <Paper sx={PAPER_STYLE}>
              <ClickAwayListener
                onClickAway={() => {
                  handleClose();
                }}
              >
                <MenuList
                  autoFocusItem={open}
                  id="menu"
                  aria-labelledby="composition-button"
                >
                  {MENU_OPTIONS.map((menuItem: MENU_OPTIONS_TYPE) => {
                    return getMenuItem(menuItem);
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default MenuButton;
