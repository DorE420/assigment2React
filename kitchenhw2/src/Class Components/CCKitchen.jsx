import { Component } from "react";
import CCRecipies from "./CCRecipies";

export default class CCKitchen extends Component{
    constructor(props){
        super(props);
    }
render(){
    return(<>
    <CCRecipies></CCRecipies>
    </>)
}
}