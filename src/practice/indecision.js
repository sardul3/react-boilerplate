var root = document.getElementById('root');


var app = {
    title: 'Indecision App',
    subtitle: 'Eliminate Them, Please',
    options: []
    
}

const submitFormData = (e)=>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = "";
        console.log(app.options);
        appRender();
    }
}

const removeAll = (e)=>{
    e.preventDefault();
    app.options = [];
    console.log(app.options);
    appRender();
}

const makeDecision = ()=>{
    let rand = Math.floor(Math.random() * app.options.length);
    var option = app.options[rand];
    alert('you need to '+ option);
}

const appRender = ()=>{
    var template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button disabled = {app.options.length === 0} onClick = {makeDecision}>What should I do?</button>
            <button onClick = {removeAll}>Remove All</button>
            <form onSubmit = {submitFormData}>
                <input type = "text" name = "option" />
                <button> Add </button>
            </form>
            <ol>
            {
                app.options.map((option)=>{
                    return <li key = '{option}'> {option}</li>
                })
            }
            </ol>
        </div>
    );   
    ReactDOM.render(template, root);
}

appRender();
