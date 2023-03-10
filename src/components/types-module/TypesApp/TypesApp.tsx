import Grid from '@mui/material/Grid';
import React from 'react';
import TypesGrid from '../TypesGrid/TypesGrid';
import './TypesApp.css';

export default class TypesApp extends React.Component<{}, {}> {

  public render(): React.ReactElement<{}> {
    return (
      <div className='main'>
        <Grid container spacing={2} className='typesAppGrid' 
          sx={{ flexGrow: 1, }}>
            <Grid item xs={12} sm={12} lg={7}>
              <TypesGrid></TypesGrid>
            </Grid>
            <Grid item xs={12} sm={12} lg={5}>
            </Grid>
        </Grid>
        <div>
        </div>
      </div>
    );
  }
}

