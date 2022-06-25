let unitcircle = {
    r:1,
    get printval(){return this.r;},
    set printval(newly){
        return this.r = newly;
    }
};
let c = Object.create(unitcircle);
console.log(c.r);
c.x = 1;
c.y = 1;
console.log(c);
c.printval = 2
console.log(c.z);