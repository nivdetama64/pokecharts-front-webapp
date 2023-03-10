import React from 'react';
import './TypesGrid.css';
import { Type } from '../../../Models/types-models/Type';
import { FormsByTypes } from '../../../Models/types-models/FormsByTypes';
import { TypeService } from '../../../Utils/TypeService';
import { FormService } from '../../../Utils/FormService';

export interface TypesGridState {
  types: Type[];
  formsByTypes: FormsByTypes[];
  squareCSS: number;
  variantHeader: number;
}

export default class TypesGrid extends React.Component<{}, TypesGridState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      types: TypeService.getTypes(),
      formsByTypes: FormService.computeFormByTypes(),
      squareCSS: 28,
      variantHeader: 70,
    }
  }

  countFormsForTypes(t1: string, t2: string): number{
    const t = this.state.formsByTypes.filter(f => {
      return f.types.indexOf(t1) >-1 && f.types.indexOf(t2) >-1
    });
    return t.length !== 0 ? t[0].forms.length : -1;
  }

  countFormsForType(t1: string): number{
    const t = this.state.formsByTypes.filter(f => {
      return f.types.indexOf(t1) >-1
    });
    return t.length !== 0 ? t.reduce((sum, current) => sum + current.forms.length, 0) : -1;
  }

  getBGColor(value: number): string{
    if (value > 50) return '#94090d';
    if (value > 45) return '#9d2908';
    if (value > 40) return '#a53e02';
    if (value > 35) return '#ab5100';
    if (value > 30) return '#b16300';
    if (value > 25) return '#b57500';
    if (value > 20) return '#b8870a';
    if (value > 15) return '#ba981a';
    if (value > 10) return '#bbaa2a';
    if (value > 5) return '#bbbb3c';
    if (value > 3) return '#bacc4f';
    if (value > 2) return '#b8dd63';
    if (value > 1) return '#b5ee79';
    if (value > 0) return '#b1ff91';
    return 'white';
  }

  public render(): React.ReactElement<{}> {
    const s = this.state;
    const squareCalc = s.squareCSS + 4;
    const headerCalc = s.variantHeader + 4;

    return (
      <div className='main'>
      {/* ************************************ header *******************************/}
        <div className='blackCell columnHeader rowHeader'></div>
        <div className='cell columnHeader' style={{'left': headerCalc + 'px'}}>
          <p className='headerText'>None</p>
        </div>
        {s.types.map(t => <div className='cell columnHeader' key={t.Name}
              style={{'left': headerCalc + ((s.types.indexOf(t) + 1) * squareCalc) + 'px'}}
          ><p className='headerText'>{t.Name}</p></div>)
        }
        {/* ************************************ none line *******************************/}
        <div className='cell rowHeader' style={{'top':headerCalc + 'px'}}><p className='rowHeaderText'>None</p></div>
        <div className='blackCell' style={{'top':headerCalc + 'px','left': headerCalc+'px'}}>0</div>
        {s.types.map(t => <div className='cell' key={t.Name} style={{ 
            'left': headerCalc + ((s.types.indexOf(t) + 1) * squareCalc) + 'px',
            'top': headerCalc + 'px',
            'backgroundColor': this.getBGColor(this.countFormsForTypes("None", t.Name))}}>
          {this.countFormsForTypes("None", t.Name)}</div>)
        }
        {/* ************************************ lines *******************************/}
        {
            s.types.map(t => 
              <div key={t.Name}>
                {/* ************************************ first *******************************/}
                <div className='cell rowHeader' style={{'top': headerCalc + ((s.types.indexOf(t) + 1) * squareCalc) + 'px'}}>
                  <p className='rowHeaderText'>{t.Name} </p>
                </div>
                {/* ************************************ for none *******************************/}
                <div className='cell' style={{
                    'top': headerCalc + ((s.types.indexOf(t) + 1) * squareCalc) + 'px',
                    'left': headerCalc + 'px',
                    'backgroundColor': this.getBGColor(this.countFormsForTypes(t.Name,"None"))}}>
                  {this.countFormsForTypes(t.Name, "None")}
                </div>
                {/* ************************************ for others *******************************/}
                {
                  s.types.map(tt => 
                    <div className={(t.Name === tt.Name ? 'blackCell': 'cell')} 
                        key={t.Name + tt.Name} style={{
                        'left': headerCalc + ((s.types.indexOf(t) + 1) * squareCalc) + 'px',
                        'top': headerCalc + ((s.types.indexOf(tt) + 1) * squareCalc) + 'px',
                        'backgroundColor': (t.Name === tt.Name ? 'black': this.getBGColor(this.countFormsForTypes(t.Name,tt.Name)))
                      }}>{(t.Name === tt.Name ? this.countFormsForType(t.Name) : this.countFormsForTypes(t.Name,tt.Name))}
                    </div> 
                  )
                }
              </div>
            )
          }
      </div>
    );
  }
}

