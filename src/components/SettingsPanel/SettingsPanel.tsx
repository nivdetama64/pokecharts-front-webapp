import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

export interface PokechartProps {
  isOpen: boolean;
  onChange: any;
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default class SettingsPanel extends React.Component<PokechartProps, {}> {  
  constructor(props: PokechartProps) {
    super(props);
  }
  public render(): React.ReactElement<{}> {
    const s = this.state;

    const list = (anchor: Anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={this.props.onChange(false)}
        onKeyDown={this.props.onChange(false)}
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
        <React.Fragment>
          <Drawer
            anchor={anchor}
            open={this.props.isOpen}
            onClose={this.props.onChange(false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
    );
  }
}

