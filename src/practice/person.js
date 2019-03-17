const isAdult = (age)=>{
    if(age>18){
        return 'Adult';
    } else{
        return 'Not an adult yet';
    }
}

const canDrink = (age)=>{
    if(age>21){
        return 'can';
    } else{
        return 'cannot';
    }
}

export {isAdult, canDrink}