
// const multiplier = {
//     numbers: [1,3,4],
//     offset: 2,
//     multiply(){
//         return this.numbers.map((no)=>no*this.offset);
//     }
// }
// console.log(multiplier.multiply());


// let count = 0;

// const addOne = ()=>{
//     count++;
//     renderCounterApp();
//     console.log(count);
// }

// const sub = ()=>{
//     count--;
//     renderCounterApp();
//     console.log('subing 1 count');
// }

// const reset = ()=>{
//     count=0;
//     renderCounterApp();
//     console.log('reset');
// }


// const renderCounterApp = ()=>{
//     var counterTemplate = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}> + </button>
//             <button onClick={sub}> - </button>
//             <button onClick={reset}> reset </button>   
//         </div>
//     );  
//     ReactDOM.render(counterTemplate, counter);     
// }

// ReactDOM.render(counterTemplate, root);
// renderCounterApp();

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        this.setState(()=>{
            return {
                count: parseInt(localStorage.getItem('count'), 10)
            }
        })
    }

    componentDidUpdate(prevState, prevProps){
        if(prevState.count !== this.state.count){
        const count = this.state.count;
        localStorage.setItem('count', count);
        console.log(localStorage.getItem('count'));
        }
    }

    add(){
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            };
        })
    }

    minus(){
        this.setState((prevState)=>{
            return {
                count: prevState.count - 1
            };
        })
    }

    reset(){
        this.setState(()=>{
            return {
                count: 0
            };
        })
    }

    render(){
        return(
            <div>
                <h1> Score: {this.state.count}</h1>
                <button onClick = {this.add}>+</button>
                <button onClick = {this.minus}>-</button>
                <button onClick = {this.reset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter/>, document.getElementById('root'));