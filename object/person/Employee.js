// Employee Class
class Employee extends Person {
    #empno
    #telephone
    #hireDate
    #salary
    
    // Getter and setter for empno
    get empno () {
        return this.#empno
    }
    set empno (arg) {
        this.#empno = arg
    }
    
    // Getter and setter for telephone
    get telephone () {
        return this.#telephone
    }
    set telephone (arg) {
        this.#telephone = arg
    }

    // Getter and setter for hireDate
    get hireDate () {
        return this.#hireDate
    }
    set hireDate (arg) {
        this.#hireDate = arg
    }

    // Getter and setter for salary
    get salary () {
        return this.#salary
    }
    set salary (arg) {
        this.#salary = arg
    }

    constructor(name, hireDate) {
        super(name)
        this.#hireDate = hireDate
    }
}