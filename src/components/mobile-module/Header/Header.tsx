import React from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from '../../../Utils/styled';
import './Header.css';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export default class Header extends React.Component<{}, {}> {

  public render(): React.ReactElement<{}> {
    return (
      <Box sx={{ flexGrow: 1, position: 'fixed', top:0, width:'100%' }}>
        <AppBar position="static" className='appBar'>
          <Toolbar className='toolBar'>
            <IconButton
              size="large" edge="start" color="inherit"
              sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Typography
              variant="h6" noWrap component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            > Pokecharts
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

