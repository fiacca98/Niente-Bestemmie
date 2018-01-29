import { Character } from "./character";

export class ListService{
    getCharacterList(): Character[]{
        let items: Character[] = [];
        items.push(new Character("Animal","Cavallo", 2));
        items.push(new Character("Animal","gatto", 2));
        items.push(new Character("Animal","Cane", 2));
        return items;
    }
}