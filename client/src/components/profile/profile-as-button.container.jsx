import React, { useState, useEffect } from 'react';
import { CardActionArea, Box } from '@material-ui/core';

import Profile from './profile.component';
import { useStyles } from './profile.styles';

const ProfileAsButton = ({ id, handleClick = () => {}, isActive = false, ...props }) => {
  const classes = useStyles();
  const [className, setClassName] = useState(classes.unselected);

  useEffect(() => {
    if (isActive) setClassName(classes.selected);
    else setClassName(classes.unselected);
  }, [isActive]);
  return (
    <CardActionArea
      onClick={handleClick}
      id={id}
      disableTouchRipple
      className={` ${classes.rounded}`}
    >
      <Box className={`${className} ${classes.padddd}  ${classes.rounded}`}>
        <Profile {...props} id={id} />
      </Box>
    </CardActionArea>
  );
};
export default ProfileAsButton;
