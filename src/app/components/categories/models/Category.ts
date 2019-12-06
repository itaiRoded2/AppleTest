import { CategoryChild } from './CategoryChild';

export class Category {

    id: number;
    name: string;
    children: Array<CategoryChild>;
    isSelected:  boolean = false;

    constructor(id: number, name: string, CategoryChildren?: Array<CategoryChild>) {
        
        this.id = id;
        this.name = name;
        
        if(CategoryChildren) {

            this.children = CategoryChildren;

        } else {

            this.children = Array<CategoryChild>();

        }
        
    }
}