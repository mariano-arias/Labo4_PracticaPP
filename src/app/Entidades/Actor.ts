export class Actor {

    id : string ="";
    country! : string;
    firstName: string ="";
    lastName: string = "";
    pathPhoto: string = "";

    constructor( name: string, lastName: string){
        this.firstName= name;
        this.lastName = lastName;
    }
}
