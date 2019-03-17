class IndecisionApp extends React.Component{

    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleNewOption = this.handleNewOption.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.state = {
            options: []
        }
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

    handleRemoveAll(){
        this.setState(()=>{
            return{
                options:[]
            };
        })
    }

    handleRemove(optionToRemove){
        this.setState((prevState)=>{
            return {
                options: prevState.options.filter((option)=>{
                    return option !== optionToRemove;
                })
            }
        })
    }

    handlePick(){
       let randomIndex = Math.floor(Math.random()*this.state.options.length);
       let option = this.state.options[randomIndex];
       alert(option);
    }

    handleNewOption(option){
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

    
    render(){
        const title = "Indecision App";
        const subtitle = "Let me Math.random your life";
        return(
            <div>
                <Header  subtitle = {subtitle} />
                <Action hasOptions = {this.state.options.length>0}
                        handlePick = {this.handlePick}
                />
                <Options options = {this.state.options}
                         handleRemoveAll = {this.handleRemoveAll}
                         handleRemove = {this.handleRemove}        
                />
                <AddOption handleNewOption = {this.handleNewOption} />
            </div>
        );
    }
}
// IndecisionApp.defaultProps = {
//     options: []
// }

const Header = (props)=>{
    return(
        <div>
            <h1> {props.title} </h1>
            <h2> {props.subtitle} </h2>
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision App'
}
// class Header extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1> {this.props.title} </h1>
//                 <h2> {this.props.subtitle} </h2>
//             </div>
//         );
//     }
// }


const Action = (props)=>{
    return(
        <div>
            <button onClick = {props.handlePick} disabled = {!props.hasOptions}>What should I do?</button>
        </div>
    );
}
// class Action extends React.Component{
  
//     render(){
//         return(
//             <div>
//                 <button onClick = {this.props.handlePick} disabled = {!this.props.hasOptions}>What should I do?</button>
//             </div>
//         );
//     }
// }

const Options = (props)=>{
    return(
        <div>
           <button onClick = {props.handleRemoveAll}>Remove All</button>

            {

                props.options.map((option)=>{
                   return <Option key = {option} optionText = {option} handleRemove = {props.handleRemove}/>;
                })
            }
            <Option />
        </div>
    );
}

// class Options extends React.Component{
   
//     render(){
//         return(
//             <div>
//             <button onClick = {this.props.handleRemoveAll}>Remove All</button>
//                 {
//                     this.props.options.map((option)=>{
//                        return <Option key = {option} optionText = {option}/>;
//                     })
//                 }
//                 <Option />
//             </div>
//         );
//     }
// }


const Option = (props)=>{
    return(
        <div>
             {props.optionText} 
                <button onClick ={ (e)=>{props.handleRemove(props.optionText);}}>Remove</button>
             
        </div>
    );
}
// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//                 <p> {this.props.optionText} </p>
//             </div>
//         );
//     }
// }

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleNewOption = this.handleNewOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleNewOption(e){
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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.handleNewOption}>
                    <input type = "text" name = "option"></input>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('root'));

