export class Note{
    title:string;
    body:string;
    order: string;
    lastAccessed: Date;
    

    constructor(title?:string, body?:string, order?: string, lastAccessed?: Date) {
        this.title = title;
        this.body = body;
        this.order = order;
        this.lastAccessed = lastAccessed;
    }
}