/**
 * Blake Hudson
 * Assignment 02
 * Due: 09/23/2021
 */



// facade for program
export class AffairManager{

    private _memberList: Array<Member> = new Array();   //list of members registered
    private _affairList: Array<Affair> = new Array();   //list of registered affairs
    private _organizationList: Array<Organization> = new Array();   //list Organizations
   
    //getters
    public get organizationList(): Array<Organization> {
        return this._organizationList;
    }

    public get affairList(): Array<Affair> {
        return this._affairList;
    }

    public get memberList(): Array<Member> {
        return this._memberList;
    }

    /**
     * registers a new member 
     * creates an instance of the member class 
     * adds it to affairmanger's memberlist
     * @param name name of member
     * @param email contact info for member
     */
    addMember(name: string, email: string){
        let newMember = new Member(name, email);
        this.memberList.push(newMember);
    }
    /**
     * 
     * @param affairName 
     * @param zipcode 
     * @param date 
     */
    addAffair(affairName: string, zipcode: string, date: string){
        let newAffair = new Affair(affairName, zipcode, date);
        this.affairList.push(newAffair);
    }
    /**
     * 
     * @param organizationName 
     */
    addOrganization(organizationName: string){
        let newOrganization = new Organization(organizationName);
        this.organizationList.push(newOrganization);
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
     * TODO: implement function with overloading
     * @param affairName 
     * @param newTitle 
     */
    modifyAffair(affairName: string, newTitle: any);
    modifyAffair(affairName: string, undefined: undefined, newTime: any);

    modifyAffair(affairName: string){

    }
    /**
     * 
     * @param affairName 
     * @param organizationName 
     */
    addAffairToOrganization(affairName: string, organizationName: string){

    }
    /**
     * 
     * @param affairName 
     */
    getMembers(affairName: string): Member {

    }
    


}

//Members class
class Member {
    private _name: string;  //name of member
    private _email: string; //contact email address of member
    
    //getters
    public get name(): string {
        return this._name;
    }

    public get email(): string {
        return this._email;
    }


    //constructor
    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }

 
    


    
    

}

//Organizations class
class Organization{
    private _organizationName: string;    //name of the O
    
    private _memberList: Array<Member>;   //list of members which belong to an O
    private _affairList: Array<Affair>;   //list of affairs an O has sponsored

    //getters
    public get organizationName(): string {
        return this._organizationName;
    }
    public get memberList() {
        return this._memberList;
    }
    public get affairList(): Array<Affair> {
        return this._affairList;
    }
   
    //constructor
    public constructor(organizationName: string){
        this._organizationName = organizationName;
    }


    

    

}

//Affair class
class Affair{
    private _affairName: string;    //name of affair
    private _zipcode: string;       //location of affair
    private _date: string;          //date/time of affair

    private _memberList: Array<Member>;   //list of members attending an affair

    
    //getters and setters
    public get affairName(): string {
        return this._affairName;
    }
    public set affairName(value: string) {
        this._affairName = value;
    }

    public get zipcode(): string {
        return this._zipcode;
    }
    public set zipcode(value: string) {
        this._zipcode = value;
    }

    public get date(): string {
        return this._date;
    }
    public set date(value: string) {
        this._date = value;
    }

    public get memberList(): Array<Member> {
        return this._memberList;
    }
    
    constructor(affairName, zipcode, date){
        this._affairName =affairName;
        this._zipcode = zipcode;
        this._date = date;
    }
}

