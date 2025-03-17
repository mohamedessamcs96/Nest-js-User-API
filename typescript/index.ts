let age :number = 5;
let username:string ="Mido";
let logged:boolean = false;
let id : any =123;



type User={
        name:string,
        age:number,
        army:boolean
    }

    const user:User={
    name:'Mohamed',
    age:24,
    army:true
}


// const user:{
//     name:string,
//     age:number,
//     army:boolean
// }={
//     name:'Mohamed',
//     age:24,
//     army:true
// }



//Type Assertion
let cid : any = 1
// let customer = <number>cid
let customer = cid as number


function addName(x:number , y:number):number{
    return x+y;
}


interface mathfunc{
    (x:number,y:number):number
}
const addname:mathfunc =(x:number,y:number):number =>{
    return x+y;
}

//Interfaces


interface Userinterface{
    name:string,
    age:number,
    army:boolean
}

const user2:Userinterface={
name:'Mohamed',
age:24,
army:true
}


class Person{
    protected id:number
    name:string

    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
        console.log(123);
    }

    register(){
        return `${this.name} is already regisered`
    }

}

const Brad=new Person(12,"Mohamed");


class Employee extends Person{
    position : string 

    constructor(id:number,name:string,position:string){
        super(id,name);
        this.position=position
    }
}