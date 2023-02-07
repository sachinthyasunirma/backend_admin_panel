import { useTheme } from "@emotion/react";
import { Avatar, Card, CardContent, Chip, Divider, Grid, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Stack, styled, Typography } from "@mui/material";
import NotificationListCard from "./NotificationListCard";


function NotificationList() {
    const theme = useTheme();

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 330,
                py: 0,
                borderRadius: '10px',
                // [theme.breakpoints.down('md')]: {
                //     maxWidth: 300
                // },
                '& .MuiListItemSecondaryAction-root': {
                    top: 22
                },
                '& .MuiDivider-root': {
                    my: 0
                },
                '& .list-container': {
                    pl: 7
                }
            }}
        >
            <NotificationListCard/>
            <Divider />
        </List>
    );
}

export default NotificationList