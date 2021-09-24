/**
 * Blake Hudson
 * Assignment 02
 * Due: 09/23/2021
 */

// facade for program
export class AffairManager {

    private _affairs: Affairs = new Affairs;
    private _organizations = new Organizations;
    private _members = new Members;

    //getters
    public get members() {
        return this._members;
    }

    public get organizations() {
        return this._organizations;
    }

    public get affairs(): Affairs {
        return this._affairs;
    }


    /**
     * registers a new Member 
     * creates an instance of the Member class with passed arguments
     * adds created Member to AffairManger's memberList 
     * sets Member's access key to Member's name
     * @param name name of member
     * @param email contact info for member
     */
    addMember(name: string, email: string) {
        let newMember = new Member(name, email);
        this.members.registerMember(newMember);
    }
    /**
     * registers a new Affair 
     * creates an instance of the Affair class with passed arguments
     * adds created Affair to AffairManger's affairList
     * sets Affair's access key to Affair's name
     * @param affairName name of affair
     * @param zipcode location of affair
     * @param date when the affair will occur
     */
    addAffair(affairName: string, zipcode: string, date: string) {
        let newAffair = new Affair(affairName, zipcode, date);
        this.affairs.addNewAffair(newAffair);
    }
    /**
     * registers a new Organization
     * creates an instance of the Organization class with passed arguments
     * adds created Organization to AffairManger's organizationList
     * sets Organizations's access key to Organization's name
     * @param organizationName name of the organization
     */
    addOrganization(organizationName: string) {
        let newOrganization = new Organization(organizationName);
        this.organizations.addNewOrganization(newOrganization);
    }
    /**
     * adds a member to an affair
     * a member cannot be added twice
     * member's name is a unique identifier
     */
    addMemberToAffair(memberName: string, affairName: string) {
        this.affairs.affairList[affairName].addAttendee(this.members.memberList[memberName])
    }

    findMemberNames(query: string): string[] {
        return this.searchByName(query, Object.keys(this.members.memberList)
        );
    }

    findAffairNames(query: string): string[] {
        return this.searchByName(query, Object.keys(this.affairs.affairList));
    }

    findOrganizationNames(query: string): string[] {
        return this.searchByName(query, Object.keys(this.organizations.organizationList));
    }

    modifyAffair(affairName: string, newTitle: any);
    modifyAffair(affairName: string, un: undefined, newTime: any);

    modifyAffair(affairName: string, unOrNewTitle: any, newTime?: any) {
        if (typeof unOrNewTitle == "string") {
            this.affairs.changeAffairTitle(affairName, unOrNewTitle as string);
        } else {
            this.affairs.affairList[affairName].changeTimeAffair(newTime);
        }

    }

    addAffairToOrganization(affairName: string, organizationName: string) {
        this.organizations.organizationList[organizationName].addOrgAffair(this.affairs.affairList[affairName]);
    }

    //needs to show members and email addresses (clean up with extra func and .map())
    getMembers(affairName: string): string[] {
        let tempList: string[] = [];

        Object.keys(this.affairs.affairList[affairName].attendees).forEach(name => {
            tempList.push("name: " + this.members.memberList[name].name + " " + "contact: " + this.members.memberList[name].email);
        });

        //returns temp after for-each
        return tempList;
    }

    affairExists(affairName): boolean {
        Object.keys(this.affairs.affairList).forEach(name => {
            if (name === affairName) {
                return true;
            }
        });
        return false;
    }

    searchByName(query: string, domain: string[]): string[] {
        let results: string[] = domain.filter((value: string) => value == query);
        return results;
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
    constructor(name: string, email: string) {
        this._name = name;
        this._email = email;
    }
}

//Organizations class
class Organization {
    private _organizationName: string;    //name of the Organization
    private _orgAffairs: Affair[] = [];      //Affairs belonging to an organization 

    //getters
    public get organizationName(): string {
        return this._organizationName;
    }
    public get orgAffairs(): Affair[] {
        return this._orgAffairs;
    }

    //constructor
    public constructor(organizationName: string) {
        this._organizationName = organizationName;
    }

    public addOrgAffair(affairToAdd: Affair) {
        this.orgAffairs.push(affairToAdd);
    }

}

//Affair class
class Affair {
    private _affairName: string;    //name of affair
    private _zipcode: string;       //location of affair
    private _date: string;          //date/time of affair
    private _attendees: { [key: string]: Member; } = {};   //key:value pair of Members created


    //getters
    public get affairName(): string {
        return this._affairName;
    }
    public get zipcode(): string {
        return this._zipcode;
    }
    public get date(): string {
        return this._date;
    }
    public get attendees(): { [key: string]: Member; } {
        return this._attendees;
    }

    //setters
    public set affairName(value: string) {
        this._affairName = value;
    }
    public set date(value: string) {
        this._date = value;
    }

    constructor(affairName, zipcode, date) {
        this._affairName = affairName;
        this._zipcode = zipcode;
        this._date = date;
    }


    public changeTimeAffair(newTime: string) {
        this.date = newTime;
    }

    public changeTitleAffair(newTitle: string) {
        this.affairName = newTitle;
    }

    public addAttendee(attendee: Member) {
        if (this.memberAttending(attendee)) {
            return;
        }
        this.attendees[attendee.name] = (attendee);
    }
    /**
     * Tests if a member is attending an affair already
     * @param mem of type Member
     * @returns true is the name of the member passed is attending the affair
     */
    memberAttending(mem: Member): boolean {
        Object.keys(this.attendees).forEach(attendee => {
            if (attendee == mem.name) {
                return true;
            }
        });
        return false;
    }
}

class Members {
    private _memberList: { [key: string]: Member; } = {};   //key:value pair of members registered

    public get memberList(): { [key: string]: Member; } {
        return this._memberList;
    }

    public registerMember(newMember: Member) {
        this.memberList[newMember.name] = (newMember);
    }

}

class Organizations {
    private _organizationList: { [key: string]: Organization; } = {};   //key:value pair of Organiations created


    public get organizationList(): { [key: string]: Organization; } {
        return this._organizationList;
    }

    public addNewOrganization(newOrganization: Organization) {
        this.organizationList[newOrganization.organizationName] = (newOrganization);
    }

}

class Affairs {

    private _affairList: { [key: string]: Affair; } = {};   //key:value pair of affiars created

    public get affairList(): { [key: string]: Affair; } {
        return this._affairList;
    }
    public set affairList(value: { [key: string]: Affair; }) {
        this._affairList = value;
    }

    public addNewAffair(newAffair: Affair) {
        this.affairList[newAffair.affairName] = (newAffair);
    }

    public changeAffairTitle(affairName: string, newName: string) {
        this.affairList[affairName].changeTitleAffair(newName);
        this.affairList[newName] = this.affairList[affairName];
        delete this.affairList[affairName];
    }

}