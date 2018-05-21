var square = x => x * x;
console.log(square(9));

var user = {
    name: 'Victor',
    sayHi: () => {
        console.log(`Hi ${this.module}`);
    }
};

user.sayHi();