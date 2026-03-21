//there are two ways to use array method 
let first =[1,2,3,
4,5,6
]

first =first.map((value)=>{return 2*value})

//second method is 
let second = [1,2,3,
4,5,6].map((value)=>{return 2*value})

//they both do the same thing but on the second one we can also use const instead of the let '

const seconde = [1,2,3,
4,5,6].map((value)=>{return 2*value})

class Hey {
    name='kai' ;
    hmm() {
        console.log(0);
        return 2
    }
    constructor() {
        console.log(3)
    }
}
class Yoo extends Hey{
   
}
let chal = new Yoo
console.log(chal)
