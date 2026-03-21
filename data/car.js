//extra practice

/*class Car {
    brand; 
    model;
    #speed=0;
    dispaly(){
        console.log(this.brand)
     console.log(this.#speed)
        console.log(this.model)
    }
    go(hmm=5){
if (this.#speed<=200)
{
    this.#speed+=hmm;
}
    }
    brake(hmm=5){
        if(this.#speed>0)
        {
            this.#speed-=hmm;
        }
    }
    constructor(info) {
        this.brand=info.brand;
        this.model=info.model;
    }
}

let toyota = new Car({brand:'toyota',model:'y1',
})
toyota.dispaly()

let yamaga = new Car(
    {brand:'yamaga',model:'y1',}
)
yamaga.dispaly()
for(let i=0;i<4;i++)
{
    yamaga.go()
    toyota.go()
}

toyota.dispaly()
yamaga.dispaly()

class racecar extends Car { 
    acelerated = 20;
    go() {
        super.go(20);

    } 
brake(hmm=5){
        if(this.#speed>0)
        {
            this.#speed-=hmm;
        }
    }
}

let newcar = new racecar({brand:'toyota',model:'y1',
}) 
newcar.go()
newcar.dispaly()*/
