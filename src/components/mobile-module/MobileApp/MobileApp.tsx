import React from 'react';
import './MobileApp.css';
import Footer from '../Footer/Footer';
import PokemonList from '../../common-module/PokemonList/PokemonList';
import {FormService} from '../../../Utils/FormService';
import { Form } from '../../../Models/pokemons-models/FormFirst/Form';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

export interface MobileAppState {
  bottomNavigationValue: number;
  currentPokemons: Form[];
  currentForm: string;
  leftPanelOpen: boolean;
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default class MobileApp extends React.Component<{}, MobileAppState> {  

  constructor(props: {}) {
    super(props);
    this.state = {
      bottomNavigationValue: 2,
      currentPokemons: FormService.getForms([], "Id", "Asc", []),
      currentForm: "normal",
      leftPanelOpen: false
    }
  }

  public render(): React.ReactElement<{}> {
    const s = this.state;
    const handleChangeBottomNav = (event: any, value: any):void => {
      if (event) 
        this.setState({bottomNavigationValue: value})
    };
    const toggleDrawer =
(open: boolean) =>
(event: React.KeyboardEvent | React.MouseEvent) => {
  if (
    event.type === 'keydown' &&
    ((event as React.KeyboardEvent).key === 'Tab' ||
      (event as React.KeyboardEvent).key === 'Shift')
  ) {
    return;
  }

  this.setState({leftPanelOpen: open});
};

    const list = (anchor: Anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
    const anchor = "top"
    return (
      <div className="App">
        {/* <Button onClick={toggleDrawer(true)}>{anchor}</Button> */}
        <React.Fragment>
          <Drawer
            anchor={anchor}
            open={this.state.leftPanelOpen}
            onClose={toggleDrawer(false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
        <div className='mainContainer'>
          <PokemonList Pokemons={s.currentPokemons} Form={s.currentForm}/>
        </div>
        <Footer selectedNav={s.bottomNavigationValue} onChangeNav={handleChangeBottomNav}/>
      </div>
    );
  }
}

