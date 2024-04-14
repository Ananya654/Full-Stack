class Address{
    constructor(houseNum,pnum,city,state){
        this.houseNum = houseNum;
        this.pnum = pnum;
        this.city = city;
        this.state = state;

    }
    update_Address(){

    delete_Address()

    get_Address()
    }
}

class SavingsAddress{
    constructor(acc_id,acc_name,acc_amount,address){
        this.acc_id=acc_id;
        this.acc_name=acc_name;
        this.acc_amount=acc_amount;
        this.address=address;
    }
}
module.exports = Address;
let a = new SavingsAddress(102,"ananya",100000, new Address(2,46919761237,"raipur","chhattisgarh"));

console.log(a)
