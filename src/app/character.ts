

export class Character{
    type: string;
    name: string;
    age: number;

    constructor(type: string = "Disney", name: string = "Topolino", age: number = 100){
        this.type=type;
        this.name=name;
        this.age=age;
    }
    
}