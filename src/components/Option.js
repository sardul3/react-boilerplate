import React from 'react';

const Option = (props)=>{
    return(
        <div className = "option">
            <span className = "option option__text"> {props.optionText} </span>
            
            <button onClick ={ (e)=>{props.handleRemove(props.optionText);}}
                        className  = "button button--link"
                >
                    Remove
                </button>
             
        </div>
    );
}

export default Option;


// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//                 <p> {this.props.optionText} </p>
//             </div>
//         );
//     }
// }
