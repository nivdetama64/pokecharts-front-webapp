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
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export interface HeaderProps {
  onChangeNav: any;
}

export interface HeaderState {
  open: boolean;
}

export default class Header extends React.Component<HeaderProps, HeaderState> {

  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      open: false
    }
  }

  public render(): React.ReactElement<{}> {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      this.setState({open:true})
    };
    const handleClose = () => {
      this.setState({open:false})
    };
    const goToMobile = () => {
      this.props.onChangeNav('mobile');
      this.setState({open:false})
    };
    const goToTypes = () => {
      this.props.onChangeNav('types');
      this.setState({open:false})
    };
    return (
      <Box sx={{ flexGrow: 1, position: 'fixed', top:0, width:'100%' }}>
        <AppBar position="static" className='appBar'>
          <Toolbar className='toolBar'>
            <IconButton
              size="large" edge="start" color="inherit"
              sx={{ mr: 2 }} onClick={handleClick}
            >
                <MenuIcon/>
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
        <Menu
        id="basic-menu"
        open={this.state.open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={goToMobile}>Mobile Dashboard</MenuItem>
        <MenuItem onClick={goToTypes}>Forms By Types</MenuItem>
      </Menu>
      </Box>
    );
  }
}

