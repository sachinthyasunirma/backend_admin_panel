import Navbar from "@/components/navigationbar";
import Sidebar from "@/components/sidebar/Sidebar";
import {
  AppBar,
  Box,
  CssBaseline,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

import Header from "../components/navigationbar/index";
const drawerWidth = "300";
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    backgroundColor:"#eef2f6",
    borderRadius:"12px 12px 0 0",
    width: "100%",
    minHeight: "calc(100vh - 88px)",
    flexGrow: 1,
    padding: "20px",
    marginTop: "88px",
    marginRight: "20px",
    ...(!open && {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      marginTop: "100px",
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      [theme.breakpoints.up("md")]: {
        marginLeft: "20px",
        width: `calc(100% - ${drawerWidth}px)`,
      },
      [theme.breakpoints.down("md")]: {
        marginLeft: "20px",
        width: `calc(100% - ${drawerWidth}px)`,
        padding: "16px",
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: "10px",
        width: `calc(100% - ${drawerWidth}px)`,
        padding: "16px",
        marginRight: "10px",
      },
    }),
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginTop: "100px",
      marginLeft: `${drawerWidth}px`,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: `calc(100% - ${drawerWidth}px)`,
      [theme.breakpoints.down("md")]: {
        marginLeft: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: "10px",
      },
    }),
  })
);
function MainLayout({ children }) {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const [leftDrawerOpened, setLeftDrawerOpened] = useState(true);
  // Handle left drawer
  // const leftDrawerOpened = useSelector((state) => state.customization.opened);
  // const dispatch = useDispatch();
  // const handleLeftDrawerToggle = () => {
  //     // dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  // };

  const handleLeftDrawerToggle = () => {
    setLeftDrawerOpened(!leftDrawerOpened);
  };
  console.log(leftDrawerOpened);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          // transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
        }}
      >
        <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
      </AppBar>

      {/* drawer */}
      <Sidebar
        drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened}
        drawerToggle={handleLeftDrawerToggle}
      />

      {/* main content */}
      <Main theme={theme} open={leftDrawerOpened}>
        {/* breadcrumb */}
        {/* <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign /> */}
        {children}
      </Main>
      {/* <Customization /> */}
    </Box>
  );
}

export default MainLayout;
