import React from 'react';
import { Avatar, Box, Grid, Chip, IconButton, Typography, Badge } from '@material-ui/core';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import { useStyles } from './profile.styles';

const Profile = (
  {
    name,
    secondary = '',
    notifications = 0,
    moreOptions = null,
    avatar,
    handleApproval = null,
    handleDisapproval = null,
    hideStatus = true,
    isOnline = false,
    onClick4More = () => {},
  },
  width = 400
) => {
  const classes = useStyles();

  /* FIX THIS LATER */
  const url = avatar;

  /* *************** */

  return (
    <Box minWidth={width} maxWidth={width}>
      <Box p={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Badge
              classes={{ badge: isOnline ? classes.badgeGreen : classes.badgeGrey }}
              overlap="circle"
              showZero
              variant="dot"
              invisible={hideStatus}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <Avatar {...{ src: url, alt: name }} />
            </Badge>
          </Grid>
          <Grid item xs>
            {secondary === '' ? (
              <Typography>{name}</Typography>
            ) : (
              <div>
                <Grid container direction="column">
                  <Grid item>
                    <Typography>{name}</Typography>
                  </Grid>
                  <Grid item>{secondary}</Grid>
                </Grid>
              </div>
            )}
          </Grid>
          {notifications > 0 && (
            <Grid item xs={1}>
              <Grid container justify="flex-end">
                <Grid item>
                  <Chip label={notifications} className={classes.chipStyle} />
                </Grid>
              </Grid>
            </Grid>
          )}
          {moreOptions !== null && (
            <Grid item xs={2}>
              <Grid container justify="flex-end">
                <Grid item>
                  <IconButton onClick={onClick4More}>
                    <MoreHoriz />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          )}
          {handleApproval !== null && handleDisapproval !== null && (
            <Grid item xs>
              <Grid container direction="row" justify="flex-end" alignItems="center">
                <Grid item>
                  <IconButton>
                    <Check />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <Clear />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Profile;
