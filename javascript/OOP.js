class Bird{
    useWings(){
        console.log("Flyinfg")
    }
}

class Eagle extends Bird{
    Flying(){
        super.useWings()
        console.log("Barely flapping")
    }
}
class Penguin extends Bird {
    flying() {
        console.log("Diving!")
    }
}
const baldEagle = new Eagle()
const kingPenguen = new  Penguin()

baldEagle.Flying()
kingPenguen.flying()
