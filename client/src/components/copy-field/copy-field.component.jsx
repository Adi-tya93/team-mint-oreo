import React, { useRef } from 'react';
import { Box, InputBase, IconButton, SvgIcon } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { useStyles } from './copy-field.styles';

const CopyField = ({ placeholder }) => {
  const classes = useStyles();
  const textAreaRef = useRef(null);

  const handleChange = e => {
    e.preventDefault();
  };

  return (
    <Box
      component="form"
      className={classes.root}
      onChange={handleChange}
      onSubmit={handleChange}
      borderRadius={6}
      border={1}
    >
      <InputBase
        className={classes.input}
        value={placeholder}
        inputProps={{ 'aria-label': 'search listing' }}
        ref={textAreaRef}
        disabled
      />
      <CopyToClipboard text={placeholder}>
        <IconButton type="submit" className={classes.iconButton} aria-label="copy">
          <SvgIcon>
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
          </SvgIcon>
        </IconButton>
      </CopyToClipboard>
    </Box>
  );
};

export default CopyField;
