import React from 'react';

export default class AddOption extends React.Component{
    state = {
        error: undefined
    }
    
    handleNewOption  =  (e)=>{
        e.preventDefault()
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleNewOption(option);

        this.setState(()=>{
            return{error: error};
        })

        if(!error){
            e.target.elements.option.value = "";
        }
    }


    render(){
        return(
            <div>
                {this.state.error && <p className = "widget-header">{this.state.error}</p>}
                <div className = "add-option">
                    <form onSubmit = {this.handleNewOption} >
                        <input type = "text" name = "option" className = "add_option__option-input"></input>
                        <button className = "button" >Add</button>
                    </form>
                </div>
            </div>
        );
    }
}
