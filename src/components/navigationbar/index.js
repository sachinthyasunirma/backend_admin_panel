import {
  AppBar,
  Avatar,
  Box,
  ButtonBase,
  Toolbar,
  useTheme,
} from "@mui/material";
import CompanyLogo from "./company_logo/CompanyLogo";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Search from "../common_components/search/Search";
import Notification from "./notifications/Notification";
import Profile from "./profile/Profile";

function Navbar({ handleLeftDrawerToggle }) {
  const theme = useTheme();
  return (
    <AppBar
      enableColorOnDark
      position="fixed"
      color="inherit"
      elevation={0}
      // sx={{
      //   bgcolor: theme.palette.background.default,
      //   transition: leftDrawerOpened
      //     ? theme.transitions.create("width")
      //     : "none",
      // }}
    >
      <Toolbar
        sx={{
          p: 2,
        }}
      >
        <Box
          sx={{
            width: 228,
            display: "flex",
            alignItems: "center",
            minHeight:"48px",
            [theme.breakpoints.down("md")]: {
              width: "auto",
            },
          }}
        >
          <Box
            component="span"
            sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
          >
            <CompanyLogo />
          </Box>
          <ButtonBase sx={{ borderRadius: "12px", overflow: "hidden" }}>
            <Avatar
              variant="rounded"
              sx={{
                ...theme.typography.commonAvatar,
                ...theme.typography.mediumAvatar,
                transition: "all .2s ease-in-out",
                background: theme.palette.secondary.light,
                color: theme.palette.secondary.dark,
                maxHeight:"34px",
                maxWidth:"34px",
                "&:hover": {
                  background: theme.palette.secondary.dark,
                  color: theme.palette.secondary.light,
                },
              }}
              onClick={handleLeftDrawerToggle}
              color="inherit"
            >
              <MenuRoundedIcon stroke={1.5} size="1.3rem" />
            </Avatar>
          </ButtonBase>
        </Box>
        <Box sx={{ ml: 2 }}>
          <Search />
        </Box>

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ flexGrow: 1 }} />

        {/* notification & profile */}
        <Notification />
        <Profile />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
