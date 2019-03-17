import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

import OptionModal from './OptionModal';



export default class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    }

    handleRemoveAll = ()=>{
        this.setState(()=>{
            return{
                options:[]
            };
        })
    }

    handleRemove = (optionToRemove)=>{
        this.setState((prevState)=>{
            return {
                options: prevState.options.filter((option)=>{
                    return option !== optionToRemove;
                })
            }
        })
    }

    handleModalRemove = ()=>{
        this.setState(()=>{
            return {
                selectedOption : undefined
            };
        });
    };

    handlePick = ()=>{
       let randomIndex = Math.floor(Math.random()*this.state.options.length);
       let option = this.state.options[randomIndex];
       this.setState(()=>{
           return {
               selectedOption: option
           }
       })
    }

    handleNewOption = (option)=>{
        if(!option){
            return 'Please enter a valid entry';
        } else if(this.state.options.indexOf(option)>-1){
            return 'You have already added this entry';
        }
        this.setState((prevState)=>{
            return {
                options : prevState.options.concat(option)
            }
        })
    }

    

    componentDidMount(){
        try{
        const options = JSON.parse(localStorage.getItem('options'))
        
        if(options){
            this.setState(()=>({options: options}));
        }
        
        console.log('loaded data');
        }
        
     catch(e){
        console.log(e);
        }
    }

    componentDidUpdate(prevState, prevProps){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        console.log('saved data');
    }

   
    render(){
        const title = "Indecision App";
        const subtitle = "Let me Math.random your life";
        return(
            <div>
                <Header  subtitle = {subtitle} />
                <div className = "container" id = "main_content">
                    <Action hasOptions = {this.state.options.length>0}
                            handlePick = {this.handlePick}
                    />
                   <div className = "widget">
                        <Options options = {this.state.options}
                                handleRemoveAll = {this.handleRemoveAll}
                                handleRemove = {this.handleRemove}        
                        />
                        <AddOption handleNewOption = {this.handleNewOption} />
                    </div>
                </div>
                <OptionModal selectedOption = {this.state.selectedOption}
                             handleModalRemove = {this.handleModalRemove}
                />
            </div>
        );
    }
}

