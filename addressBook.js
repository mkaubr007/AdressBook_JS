class AddressBookSystem {

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }
    
    get firstName(){
        return this.firstName
    }
    set firstName(firstName){
        let pattern = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(pattern.test(firstName))
    this.firstName=firstName;
    else
    console.log('FirstName is Incorrect!')
    }
    
    get lastName(){
        return this.lastName;
    }
    set lastName(lastName){
        let pattern = RegExp('^[A-z]{1}[a-z]{3,}$')
        if(pattern.test(lastName))
        this.lastName=lastName;
        else
        console.log('last date is Incorrect!')
    }
    
    get address(){
        return this.address;
    }
    set address(address){
        let pattern = RegExp('^[A-Z]{1}[a-z]{4,}$');
        if(pattern.test(address))
        this.address=address
        else console.log('Address is Incorrect!')
    }
    
    get city(){
        return this.city
    }
    set city(city){
        let pattern = RegExp('^[A-Z]{1}[a-z]{4,0}$');
        if(pattern.test(city))
        this.city=city
        else
        console.log('Entered city is Incorrect!')
    }
    
    get state(){
        return this.state
    }
    set state(state){
        let pattern = RegExp('^[A-Z]{1}[a-z]{4,0}$');
        if(pattern.test(state))
        this.state=state
        else
        console.log('Entered state is incorrect!')
    }
    get zip(){
        return this.zip
    }
    set zip(zip){
        let pattern = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
        if(pattern.test(zip))
        this.zip=zip
        else
        console.log("Entered zip is Incorrect!")
    }
    get phoneNumber(){
        return this.phoneNumber
    }
    set phoneNumber(phoneNumber){
        let pattern = RegExp('^[+][0-9]{1,}\\s?[1-9]{1}[0-9]{9}$')
        if (pattern.test(phoneNumber))
        this.phoneNumber=phoneNumber
        else
        console.log("phonenumber is incorrect!")
    }
    get email(){
        return this.email
    }
    set email(email){
        let pattern = RegExp('^[A-Z a-z 0-9]+([._+-][0-9 a-z A-Z]+)*@[0-9 a-z A-Z]+.[a-z A-Z]{2,3}([.][a-z A-Z]{2})*$');
        if(pattern.test(email))
        this.email=email
        else
        console.log("email is incorrect!")
    }
    toString(){
       return "firstName= "+this.firstName +", lastName = " +this.lastName + ", address = " +this.address 
       +", city = " +this.city + ", state = " +this.state+", zip = " +this.zip + ", phoneNumber = " +this.phoneNumber + ", email = " +this.email;
    }
    }
let contactArray=new Array();
let addressBookSystem1 = new AddressBookSystem('Manish',"Kumar","Aurangabad","Aurangabad","Patna","824101","8002695700", "mk@gamil.com");
console.log(addressBookSystem1.toString());
let addressBookSystem2 = new AddressBookSystem('Bhairaw','Singh',"commandRoad","Lucknow","UP",410401,8977665543,"bh@gamil.com");
contactArray.push(addressBookSystem2);
let addressBookSystem3 = new AddressBookSystem("Sahil","Singh","pemula","Chennai","TamilNadu",564738,9566773333,"sh@gamil.com");
contactArray.push(addressBookSystem3);
console.log(contactArray)
updateName()

function updateName(){
    let name = contactArray.filter(name => name.firstName == 'Manish');
    if(name=='Manish')
    console.log(name[0].firstName='Rohan');
    else{
        console.log("name not found");
    }
}