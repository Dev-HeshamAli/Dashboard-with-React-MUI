import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ChevronLeft,
  ChevronRight,
  ContactsOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  PeopleAltOutlined,
  PersonOutlined,
  PieChartOutline,
  RadarOutlined,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import MuiDrawer from "@mui/material/Drawer";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
  Avatar,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
// import React from 'react'

const drawerWidth = 220;

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
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const Arr1 = [
  {
    title: "Dashboard",
    icon: <HomeOutlined />,
    path: "/",
  },
  {
    title: "Manage Team",
    icon: <PeopleAltOutlined />,
    path: "/team",
  },
  {
    title: "Contacts",
    icon: <ContactsOutlined />,
    path: "/contacts",
  },
  {
    title: "Invoices Balances",
    icon: <ReceiptOutlined />,
    path: "/invoices",
  },
];
const Arr2 = [
  {
    title: "Profile Form",
    icon: <PersonOutlined />,
    path: "/form",
  },
  {
    title: "Calendar",
    icon: <CalendarTodayOutlined />,
    path: "/calendar",
  },
  {
    title: "FAQ Page",
    icon: <HelpOutlineOutlined />,
    path: "/faq",
  },
];
const Arr3 = [
  {
    title: "Bar Chart",
    icon: <BarChartOutlined />,
    path: "/bar",
  },
  {
    title: "Pie Chart",
    icon: <PieChartOutline />,
    path: "/pie",
  },
  {
    title: "Line Chart",
    icon: <TimelineOutlined />,
    path: "/line",
  },
  {
    title: "RadialBar",
    icon: <RadarOutlined />,
    path: "/radialBar",
  },
];

// eslint-disable-next-line react/prop-types
function SidBar({ show, setShow }) {
  const theme = useTheme();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const Location = useLocation();

  const handleDrawerClose = () => {
    setShow(false);
  };

  return (
    <Box>
      <Drawer variant="permanent" open={show}>
        <DrawerHeader>
          <IconButton
            onClick={handleDrawerClose}
            sx={{ display: show ? "flex" : "none" }}
          >
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <Box>
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
            sx={{
              mx: "auto",
              my: "20px",
              width: show ? "60px" : "35px",
              height: show ? "60px" : "35px",
              border: "2px solid white",
              transition: "0.4s",
            }}
          />
          <Typography
            sx={{ fontSize: show ? "17px" : "0px", transition: "0.4s" }}
            align="center"
          >
            Travis Howard
          </Typography>
          <Typography
            sx={{
              fontSize: show ? "14px" : "0px",
              transition: "0.4s",
              color: theme.palette.info.main,
            }}
            align="center"
          >
            Admin
          </Typography>
        </Box>

        <Divider />

        <List>
          {Arr1.map((el, i) => (
            <ListItem key={i} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => {
                  navigate(el.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:
                      location.pathname === el.path
                        ? theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[200]
                        : null,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {el.icon}
                </ListItemIcon>
                <ListItemText
                  primary={el.title}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {Arr2.map((el, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => {
                  navigate(el.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:
                      location.pathname === el.path
                        ? theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[200]
                        : null,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {el.icon}
                </ListItemIcon>
                <ListItemText
                  primary={el.title}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {Arr3.map((el, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => {
                  navigate(el.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:
                      location.pathname === el.path
                        ? theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[200]
                        : null,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {el.icon}
                </ListItemIcon>
                <ListItemText
                  primary={el.title}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default SidBar;
