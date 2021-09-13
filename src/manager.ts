/**
 * Blake Hudson
 * Assignment 02
 * Due: 09/23/2021
 */



// facade for program
export class AffairManager{

    /**
     * 
     * @param name 
     * @param email 
     */
    addMember(name: string, email: string){
        // TODO
    }
    /**
     * 
     * @param affairName 
     * @param zipcode 
     * @param date 
     */
    addAffair(affairName: string, zipcode: string, date: string){
        //TODO
    }
    /**
     * 
     * @param organizationName 
     */
    addOrganization(organizationName: string){
        //TODO
    }
    /**
     * adds a member to an affair
     * a member cannot be added twice
     * member's name is a unique identifier
     */
    addMemberToAffair(memberName: string, affairName: string){
        //TODO
    }
    /**
     * 
     * @param query 
     */
    findMemberNames(query: string) : string[] {
        //TODO
    }
    /**
     * 
     * @param query 
     */
    findAffairNames(query: string) : string[] {
        //TODO
    }
    /**
     * 
     * @param query 
     */
    findOrganizationNames(query: string) : string[] {
        //TODO
    }
    /**
     * TODO: Create overloaded args
     * @param affairName 
     * @param newTitle 
     *
    function modifyAffair(affairName: string, newTitle: any){}
    function modifyAffair(affairName: string, undefined: undefined, newTime: any){}
    */


}

//Members class
class Member {
    private name: string
    private email: string

    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }

    
    public get value() : string {
        return 
    }
    

}

//Organizations class
class organization{
    private organizationName: string
    

}

//Affair class
class Affair{
    private affairName: string
    private zipcode: string
    private date: string
    
}

