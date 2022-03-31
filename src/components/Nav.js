import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,

  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            backgroundColor: "#7E65E2",
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            {!open ? (
              <ChevronRightIcon sx={{ color: "#C9E265" }} />
            ) : (
              <ChevronLeftIcon sx={{ color: "#C9E265" }} />
            )}
          </IconButton>
        </DrawerHeader>

        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            margin: "2rem 0rem",
          }}
        >
          <ListItem button component={Link} to="/">
            <ListItemIcon
              sx={{
                color: "#C9E265",
              }}
            >
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#C9E265",
                fontFamily: "Arial",
              }}
              primary="Home"
            />
          </ListItem>

          <ListItem button component={Link} to="/portfolio">
            <ListItemIcon
              sx={{
                color: "#C9E265",
              }}
            >
              <AppsIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#C9E265",
                fontFamily: "Arial",
              }}
              primary="Portfolio"
            />
          </ListItem>
          <ListItem button component={Link} to="/contact">
            <ListItemIcon
              sx={{
                color: "#C9E265",
              }}
            >
              <ContactSupportIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#C9E265",
                fontFamily: "Arial",
              }}
              primary="Contact"
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            href="https://www.linkedin.com/in/leanne-gallagher/"
          >
            <ListItemIcon
              sx={{
                color: "#C9E265",
              }}
            >
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#C9E265",
                fontFamily: "Arial",
              }}
              primary="LinkedIn"
            />
          </ListItem>
          <ListItem button component={Link} href="https://github.com/lenny-g">
            <ListItemIcon
              sx={{
                color: "#C9E265",
              }}
            >
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#C9E265",
                fontFamily: "Arial",
              }}
              primary="Github"
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            href="https://www.canva.com/design/DAE3w_aJfJA/qmqNA_SubSdwsIb86hGFmg/view?utm_content=DAE3w_aJfJA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          >
            <ListItemIcon
              sx={{
                color: "#C9E265",
              }}
            >
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#C9E265",
                fontFamily: "Arial",
              }}
              primary="CV"
            />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
