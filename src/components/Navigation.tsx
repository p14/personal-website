import React from 'react';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { iconStyles, toolbarStyles } from '../styles/navigation.styles';

const Navigation: React.FC = () => {

  const social = (
    <>
      <IconButton color='inherit' href='https://twitter.com/perezident14' target='_blank' sx={iconStyles}>
        <Twitter />
      </IconButton>
      <IconButton color='inherit' href='https://linkedin.com/in/perezident14' target='_blank' sx={iconStyles}>
        <LinkedIn />
      </IconButton>
      <IconButton color='inherit' href='https://github.com/p14' target='_blank' sx={iconStyles}>
        <GitHub />
      </IconButton>
    </>
  )

  return (
    <AppBar position='static'>
      <Toolbar sx={toolbarStyles}>
        {social}
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
