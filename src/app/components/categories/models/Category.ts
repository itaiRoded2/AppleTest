import { CategoryChild } from './CategoryChild';

export class Category {

    id: number;
    name: string;
    children: Array<CategoryChild>;

    constructor(id: number, name: string, CategoryChildren: Array<CategoryChild>) {
        
        this.id = id;
        this.name = name;
        this.children = CategoryChildren;
        
    }
}