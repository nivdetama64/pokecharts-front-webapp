import React from 'react';
import './App.css';
import Header from './components/common-module/Header/Header';
import MobileApp from './components/mobile-module/MobileApp/MobileApp';
import TypesApp from './components/types-module/TypesApp/TypesApp';

export interface PokechartState {
  currentApp: any;
}

export default class Pokechart extends React.Component<{}, PokechartState> {  
  
  constructor(props: {}) {
    super(props);
    this.state = {
      currentApp: "mobile"
    }
  }

  public render(): React.ReactElement<{}> {
    const handleChangeApp = (appName: string):void => {
      if (appName) 
        this.setState({currentApp: appName})
    };
    return (
      <div className="App">
        <Header onChangeNav={handleChangeApp}></Header>
        {this.state.currentApp === "mobile" && <MobileApp></MobileApp> }
        {this.state.currentApp === "types" && <TypesApp></TypesApp> }
      </div>
    );
  }
}

