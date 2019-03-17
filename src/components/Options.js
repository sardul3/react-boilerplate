import React from 'react';
import Option from './Option';

const Options = (props)=>{
    return(
        <div>
        <div  className = "widget-header" >
            <h3> Your Options </h3>
            <button onClick = {props.handleRemoveAll}
                className = "button button--link"
            >
                Remove All
            </button>  
            </div>
            {
                props.options.map((option)=>{
                   return <Option key = {option} optionText = {option} handleRemove = {props.handleRemove}/>;
                })
            }
           {props.Options && <Option /> } 
           </div>
    );
}

export default Options;

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

