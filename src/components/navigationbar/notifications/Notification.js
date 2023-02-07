import {
  Avatar,
  Box,
  ButtonBase,
  ClickAwayListener,
  Fade,
  Paper,
  Popper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import NotificationList from "./NotificationList";
import NotificationDropdownLayout from "./NotificationDropdownLayout";

function Notification({ handleLeftDrawerToggle }) {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setOpen(!open);
    setAnchorEl(anchorEl ? null: event.currentTarget)
  };

  const handleClose = (event) => {
    if (anchorEl && anchorEl.contains(event.target)) {
      return;
    }
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          ml: 2,
          mr: 3,
          [theme.breakpoints.down("md")]: {
            mr: 2,
          },
        }}
      >
        <ButtonBase
          aria-describedby={"notification-drop"}
          onClick={handleClick}
          sx={{ borderRadius: "12px" }}
        >
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: "all .2s ease-in-out",
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              maxHeight: "34px",
              maxWidth: "34px",
              "&:hover": {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light,
              },
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <NotificationsIcon stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
        <Popper
          placement={matchesXs ? "bottom" : "bottom-end"}
          open={open}
          id={"notification-drop"}
          anchorEl={anchorEl}
          role={undefined}
          disablePortal
          transition
          popperOptions={{
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [matchesXs ? 5 : 0, 20],
                },
              },
            ],
          }}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper sx={{borderRadius:"12px"}}>
                <ClickAwayListener onClickAway={handleClose}>
                  <Box sx={{ border: 1, p: 1, bgcolor: "background.paper",borderRadius:"12px" }}>
                    <NotificationDropdownLayout/>
                  </Box>
                </ClickAwayListener>
              </Paper>
            </Fade>
          )}
        </Popper>
      </Box>
    </>
  );
}

export default Notification;
