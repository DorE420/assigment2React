import { Component } from "react";
import CCRecipe from "./CCRecipe";

const InitRec = [
    {
      id: 1,
      name: "Pad Thai",
      description: "stir-fry dish, mix all ingredients together",
      image:
        "https://glebekitchen.com/wp-content/uploads/2016/11/easypadthaibowltop-1-500x500.jpg",
    },
    {
      id: 2,
      name: "Pho",
      description: "slow-cooked soup",
      image:
        "https://kirbiecravings.com/wp-content/uploads/2020/04/chop-suey-5.jpg",
    },
    {
      id: 3,
      name: "Chop Suey",
      description: "vegetable in the order in which they cook.",
      image:
        "https://www.fodmapeveryday.com/wp-content/uploads/2017/06/Pho-closeup-copy-855x570.jpg",
    },
  ];

export default class CCRecipies extends Component{
    constructor(props){
        super(props);
        this.state ={
        recipies: InitRec,
        prepared:[]
        }
    }

    onPreapreClick= (id) =>{
        console.log("prepared id "+ id);
        let cook =this.state.recipies.filter((recipe)=> recipe.id==id)
        let removecook=this.state.recipies.filter((recipe)=> recipe.id!=id);
        cook=cook.concat(this.state.prepared);
        this.setState({...this.state,recipies:removecook,prepared:cook})
    }
    onEatClick= (id) =>{
        console.log("Eat id "+ id);
        let eat =this.state.prepared.filter((recipe)=> recipe.id==id)
        let removeEat=this.state.prepared.filter((recipe)=> recipe.id!=id);
        eat=eat.concat(this.state.recipies);
        this.setState({...this.state,recipies:removeEat,prepared:eat})
    }

    render(){
        let recipeStr= this.state.recipies.map((rec,ind) =>(
            <CCRecipe
            image={rec.image}
            name={rec.name}
            description={rec.description}
            id={rec.id}
            key={rec.id}
            onPreapreClick={this.onPreapreClick}
            />
                
            
            
        ));
        let eatStr= this.state.prepared.map((rec,ind) =>(
            <CCRecipe
            image={rec.image}
            name={rec.name}
            description={rec.description}
            id={rec.id}
            key={rec.id}
            onEatClick={this.onEatClick}
            
            />
                
            
            
        ));
        return(
            <div>
            <div style={{margin:50, border:"dashed" }}>
                <h1 style={{color:"blue" , textAlign:"center" , fontSize:50}} >Recipies</h1>
                <div style={{color:"blue" , textAlign:"center" , fontSize:50}}>Recipies made: </div>
                <div >{recipeStr}</div>
                
                
            </div>

                <div>
                    {this.state.prepared.length > 0 &&(
                        <div>
                            <h1>Ready to Eat</h1>
                            <div>Recipies Made:{this.state.prepared.length}</div>
                            <div className="list">{eatStr}</div>
                            </div>
                    )}
                </div>

            </div>
        )
    }
}