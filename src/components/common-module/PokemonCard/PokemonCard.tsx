import React, { Component } from 'react';
import './PokemonCard.css';
import {Form} from '../../../Models/pokemons-models/FormFirst/Form'

interface Props {
  Model: Form,
  displayMode: number,
  selectedForm: string,
}

export default class PokemonsCard extends Component<Props> {
  selectedForm: string = "";
  selectedSex: string = "";
  imageUrl: string = "";
  element1Url: string = "";
  element2Url: string = "";

  constructor(props: Props){
    super(props);
    let url = './images/pokemons';
    switch(this.props.selectedForm){
      case "normal": url += "/front/normal"; break;
      case "shiny": url += "/front/shiny"; break;
      case "female": url += "/front/normal/female"; break;
      case "femaleShiny": url += "/front/shiny/female"; break;
      case "back": url += "/back/normal"; break;
      case "backShiny": url += "/back/shiny"; break;
      case "backFemale": url += "/back/normal/female"; break;
      case "backFemaleShiny": url += "/back/shiny/female"; break;
    }
    url += "/" + this.props.Model.Pokemon.Id + ".png";
    this.imageUrl =  url;
    if (this.props.Model.Types !== null){
      if (this.props.Model.Types.length > 0)
        this.element1Url = "./images/elements/" + this.props.Model.Types[0] + ".png";
      if (this.props.Model.Types.length > 1)
        this.element2Url = "./images/elements/" + this.props.Model.Types[1] + ".png";
    }
  }

  render() {
    return (
      <div className="card">
        {this.props.displayMode !== 2 && 
        <div className={"section nameTitle" + (this.props.displayMode === 0 ? " textNormal" : "")}>
          <span>{this.props.Model.Pokemon.Name}</span> 
          <span className='numberTitle'>#{this.props.Model.Pokemon.Id}</span>
        </div>}
        {this.props.displayMode === 2 && <div className="section nameTitle textCenter numberTitle"> 
          #{this.props.Model.Pokemon.Id}
        </div>}

        {this.props.displayMode === 0 && <div className="section cardMainSection">
          <div className='elementDiv'>
            {this.element1Url !== "" && <img src={this.element1Url} className="elementImg elementImgWide" alt=''/>}
            {this.element2Url !== "" && <img src={this.element2Url} className="elementImg elementImgWide" alt=''/>}
          </div>
          <div className='statDiv'>
            <img src={this.imageUrl} alt=''/>
            {this.props.Model.Stats !== null && <ul className='statUL'>
              <li className='statLi'>ATQ:{this.props.Model.Stats.BaseAttack}</li>
              <li className='statLi'>DEF:{this.props.Model.Stats.BaseDefense}</li>
              <li className='statLi'>&nbsp;HP:{this.props.Model.Stats.BaseStamina}</li>
            </ul>}
          </div>
        </div> }
        {this.props.displayMode === 1 && <div className="section cardMainSection">
          <div className='elementDiv'>
            {this.element1Url !== "" && <img src={this.element1Url} className="elementImg" alt=''/>}
            {this.element2Url !== "" && <img src={this.element2Url} className="elementImg" alt=''/>}
          </div>
          <img src={this.imageUrl} alt=''/>
        </div> }
        {this.props.displayMode === 2 && <div className="section cardMainSection">
          <img src={this.imageUrl} alt=''/>
        </div> }

        {this.props.displayMode !== 2 && <div className="section bottomForm">
          {this.props.Model.Name}
          <span className='bottomCP'> PC {this.props.Model.MaxCP}</span>
        </div>}
        {this.props.displayMode === 2 && <div className="section bottomForm">
          {this.props.Model.Pokemon.Name}
        </div>}
      </div>
    )
  }
}
