"use strict"

// semicolons are optional in JavaScript, but it is a good practice to use them to avoid potential issues with automatic semicolon insertion (ASI).

// object/person/Person.js

// Person class
class Person {
    #name
    #height

    // Getter and setter for name
    get name () {
        return this.#name
    }
    set name (arg) {
        this.#name = arg
    } 
    get height () {
        return this.#height
    }
    set height (arg) {
        this.#height = arg
    } 

    // コンストラクタを定義する
    /**
     * 
     * @param {string} name
     * @param {int} height
     */
    // Constructor
    constructor(name="Anonymous", height=0) {
        // Initialize the person
        this.#name = name
        this.#height = height
    }
    // this : このインスタンス
    //　イベント呼び出しの場合、イベントが発生したオブジェクトを示す
    }
    /**
     * Print the current person.
     * 
     * @param {boolean} pad true:0　パディングを行う、false：「０」パディングを行わない
     * 
     * @return {string} 
     */
    // Print the current person

    print(pad='') {
        //let d = new Person("Anonymous", 0)　
        //console.log(d)
        //let padChara
        //if (pad) {
        //    padChara="0"
        //}else{
        //    padChara=""
        //}

        let result = this.#name + " (" + this.#height + ")"
        //result += "/"+ String((this.#now.getMonth()+1)).padStart(2, padChara)
        //result += "/"+ String(this.#now.getDate()).padStart(2, padChara)
        result += "/"+ String((this.#height)).padStart(2, pad)
        result += "/"+ String(this.#name).padStart(2, pad)
        
        console.log(result)
        return result
}
