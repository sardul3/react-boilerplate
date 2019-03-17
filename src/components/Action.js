import React from 'react';

const Action = (props)=>{
    return(
        <div>
            <button onClick = {props.handlePick}
                    disabled = {!props.hasOptions}
                    className = "large_button"
                    
            >
                What should I do?
            </button>
        </div>
    );
}

export default Action;
// class Action extends React.Component{
  
//     render(){
//         return(
//             <div>
//                 <button onClick = {this.props.handlePick} disabled = {!this.props.hasOptions}>What should I do?</button>
//             </div>
//         );
//     }
// }