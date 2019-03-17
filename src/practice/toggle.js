// var root = document.getElementById('root');

// let action = "hide";
// let displayText = "show";
// const toggle = ()=>{
//     if(action==="show"){
//         displayText = "show";
//         action = "hide";
//         render();
//     } else if(action==="hide"){
//         displayText = "hide";
//         action = "show";
//         render();
//     }
// }

// const render = ()=>{
//     var template = (
//         <div>
//             <h1> Toggle App </h1>
//             <button onClick = {toggle}>{displayText}</button>
//             {action==="show" ? <p> Hidden text </p>: <p></p>}
//         </div>
//     );
//     ReactDOM.render(template, root);
// }

// render();




class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggle(){
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            };
        })
    }

    render(){
        return(
            <div>
                <h1> Toggle App</h1>
                <button onClick = {this.handleToggle}> {this.state.visibility ? "Hide" : "Show"}</button>
                <p> {this.state.visibility && this.props.text}</p>
            </div>
        );
    }
}

ReactDOM.render(<Toggle text="lol" />, document.getElementById('root'));