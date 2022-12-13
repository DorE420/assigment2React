import { Component } from "react";


export default class CCRecipe extends Component{
    constructor(props){
        super(props);
        this.state ={
            image: this.props.image,
            name: this.props.name,
            description: this.props.description,
            id: this.props.id
        };
    }

    btnPrep= ()=>{
        this.props.onPreapreClick(this.state.id);
    }

    render(){
        return(
            <div style={{ border:"dotted", margin:20 ,padding:20}} className="recipe">
            <img src={this.state.image} alt="" width="50" height="50"></img> <br/>
            {this.state.name}
            <br/>
            {this.state.description}
            <br/>
            <button onClick={this.btnPrep}>{this.props.onPreapreClick ? "Prepare dish": "eat"} </button>
            </div>
        );
    }
}