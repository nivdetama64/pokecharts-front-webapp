import React from 'react';
import './Footer.css';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TvIcon from '@mui/icons-material/Tv';
import GridIcon from '@mui/icons-material/GridView';
import SettigsIcon from '@mui/icons-material/Settings';
import FilterIcon from '@mui/icons-material/Tune';
import QueryIcon from '@mui/icons-material/QueryStats';

export interface FooterProps {
  selectedNav: number;
  onChangeNav: any;
}

export default class Footer extends React.Component<FooterProps, {}> {  

  public render(): React.ReactElement<{}> {
    return (
      <Box sx={{ 
        width: "100%",
        position: "fixed", bottom: "0px"
      }}> 
      <BottomNavigation
        sx={{ 
          backgroundColor: "#bc0e4c" ,
          height: "45px" 
        }}
        showLabels
        value={this.props.selectedNav}
        onChange={(event, newValue) => {
          this.props.onChangeNav(event, newValue);
        }}>
        <BottomNavigationAction label="Global" 
          icon={<SettigsIcon sx={{ fontSize:"20px"}}/>} sx={{ 
          color:"white"  
        }}/>
        <BottomNavigationAction label="Display" 
          icon={<TvIcon sx={{ fontSize:"20px"}}/>} sx={{ 
          color:"white"  
        }}/>
        <BottomNavigationAction label="List" 
          icon={<GridIcon sx={{ fontSize:"20px"}}/>} sx={{ 
          color:"white"   
        }}/>
        <BottomNavigationAction label="Filters" 
          icon={<FilterIcon sx={{ fontSize:"20px"}}/>} sx={{ 
          color:"white"   
        }}/>
        <BottomNavigationAction label="Query" 
          icon={<QueryIcon sx={{ fontSize:"20px"}}/>} sx={{ 
          color:"white"   
        }}/>
      </BottomNavigation>
    </Box>
    );
  }
}

