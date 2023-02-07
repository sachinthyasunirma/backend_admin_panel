import { Avatar, Box, ButtonBase, IconButton, InputBase, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PopupState from "material-ui-popup-state";

function Search({ handleLeftDrawerToggle }) {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <ButtonBase sx={{ borderRadius: "12px", overflow: "hidden" }}>
          <Avatar
            variant="rounded"
            sx={{
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
            <SearchIcon stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>
    </>
  );
}

export default Search;
