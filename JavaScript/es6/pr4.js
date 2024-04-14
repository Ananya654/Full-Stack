const Address =require('./pr3.js')
class Withdrawl{
    constructor(cc_id,cc_name,address){
        this.cc_id = cc_id;
        this.cc_name = cc_name;
        this.address = address;
    }
}

let c1 = new Withdrawl(121,"ananyaa",new Address (3,2343132,"raipur","chhatisgarh"));
console.log(c1)