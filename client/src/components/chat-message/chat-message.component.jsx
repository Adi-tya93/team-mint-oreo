import React from 'react';
import { Box, Grid, Typography, Avatar, Paper, Card, CardMedia } from '@material-ui/core';
import format from '../../utils/relativeDateFormat';
import { useStyles } from './chat-message.styles';

const ChatMessage = ({
  message,
  originalText,
  timestamp,
  isSender,
  isPicture,
  isOriginal,
  avatar = '',
}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify={isSender ? 'flex-end' : 'flex-start'}
      alignItems="flex-start"
      spacing={1}
    >
      {!isSender && (
        <Grid item>
          <Box paddingTop={3}>
            <Avatar {...{ src: avatar, alt: 'name' }} />
          </Box>
        </Grid>
      )}

      <Grid item xs>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems={isSender ? 'flex-end' : 'flex-start'}
        >
          <Grid item> {format(timestamp)}</Grid>
          <Grid item>
            <Paper className={isSender ? classes.senderPaper : classes.chatPaper}>
              <Box p={2}>
                {!isPicture ? (
                  <Typography>{isOriginal ? originalText : message}</Typography>
                ) : (
                  <Card>
                    <CardMedia component="img" alt="PICTURE \o/" image={originalText} />
                  </Card>
                )}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(ChatMessage);
