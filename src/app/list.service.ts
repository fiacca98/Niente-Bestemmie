import { Character } from "./character";

export class ListService{

    private items: Character[] = [
        new Character(0,"Animal","Cavallo", 2),
        new Character(1,"Animal","gatto", 2),
        new Character(2,"Animal","Cane", 2)
    ]
    getCharacterList(): Character[]{
       
        return this.items;
    }

    getCharacterById(id: number): Character{
        for(let character of this.items){
            if(character.id == id)
                return character;
        }
        return null;
    }
}