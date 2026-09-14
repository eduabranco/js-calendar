"use strict"

// object/calendar/Calendar.js

// Calendar class
class Calendar {
    fieldVal = 10

    // Constructor
    constructor() {
        // Initialize the calendar
        this.now = new Date()
    // this : このインスタンス
    //　イベント呼び出しの場合、イベントが発生したオブジェクトを示す
    }
        @return {string} // The current date in YYYY/MM/DD format
    // Print the current date
    print() {
        //let d = new Date()
        //console.log(d)
        let result = this.now.getFullYear()
        result += "/"+(this.now.getMonth()+1)
        result += "/"+this.now.getDate()
        console.log(result)
        return result
    }
}
