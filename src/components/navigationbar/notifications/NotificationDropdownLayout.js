import {
  Box,
  Chip,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import NotificationList from "./NotificationList";

function NotificationDropdownLayout() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const handleChange = () => {};

  const status = [
    {
      value: "all",
      label: "All Notification",
    },
    {
      value: "new",
      label: "New",
    },
    {
      value: "unread",
      label: "Unread",
    },
    {
      value: "other",
      label: "Other",
    },
  ];

  return (
    <div>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{ pt: 2, px: 2 }}
          >
            <Grid item>
              <Stack direction="row" spacing={2}>
                <Typography variant="subtitle1">All Notification</Typography>
                <Chip
                  size="small"
                  label="01"
                  sx={{
                    color: theme.palette.background.default,
                    bgcolor: theme.palette.warning.dark,
                  }}
                />
              </Stack>
            </Grid>
            <Grid item>
              <Typography
                component={Link}
                href="#"
                variant="subtitle2"
                color="primary"
              >
                Mark as all read
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <PerfectScrollbar
            style={{
              height: "100%",
              maxHeight: "calc(100vh - 205px)",
              overflowX: "hidden",
            }}
          >
            <Grid container direction="column" spacing={2}>
              <Grid item xs={12}>
                <Box sx={{ px: 2, pt: 0.25 }}>
                  <TextField
                    id="outlined-select-currency-native"
                    select
                    fullWidth
                    value={value}
                    onChange={handleChange}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {status.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Box>
              </Grid>
              <Grid item xs={12} p={0}>
                <Divider sx={{ my: 0 }} />
              </Grid>
            </Grid>
            <NotificationList />
          </PerfectScrollbar>
        </Grid>
      </Grid>
    </div>
  );
}

export default NotificationDropdownLayout;
