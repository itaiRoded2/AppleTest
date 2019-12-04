export class CategoryChild {

    id: number;
    title: string;
    isDeleted: boolean;

    constructor(id: number, title: string, isDeleted: boolean ) {
        
        this.id = id;
        this.title = title;
        this.isDeleted = isDeleted;
        
    }
}