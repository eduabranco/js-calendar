"use strict"

// semicolons are optional in JavaScript, but it is a good practice to use them to avoid potential issues with automatic semicolon insertion (ASI).

// object/calendar/Calendar.js

// Calendar class
class Calendar {
    fieldVal = 10
    /** 
     * 
     * @param {int} y
     * @param {int} m
     * @param {int} d
     */
    // Constructor
    constructor(y, m, d) {
        // Initialize the calendar
        if (y === undefined || m === undefined || d === undefined) {
            this.now = new Date()
        }else{
            this.now = new Date(y, m, d)
        }

    // this : このインスタンス
    //　イベント呼び出しの場合、イベントが発生したオブジェクトを示す
    }
    /**
     * Print the current date.
     * 
     * @param {boolean} pad true:0　パディングを行う、false：「０」パディングを行わない
     * 
     * @return {string} 
     */
    // Print the current date

    print(pad='') {
        //let d = new Date()　
        //console.log(d)
        //let padChara
        //if (pad) {
        //    padChara="0"
        //}else{
        //    padChara=""
        //}

        let result = this.now.getFullYear()
        //result += "/"+ String((this.now.getMonth()+1)).padStart(2, padChara)
        //result += "/"+ String(this.now.getDate()).padStart(2, padChara)
        result += "/"+ String((this.now.getMonth()+1)).padStart(2, pad)
        result += "/"+ String(this.now.getDate()).padStart(2, pad)
        
        console.log(result)
        return result
    }
}