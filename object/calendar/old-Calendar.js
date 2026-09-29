"use strict"

// semicolons are optional in JavaScript, but it is a good practice to use them to avoid potential issues with automatic semicolon insertion (ASI).

// object/calendar/Calendar.js

// Calendar class
class Calendar {
    static msg = "Hello,World!"
    fieldVal = 10
    // プライベートフィルド変数
    #now
    // プライベートフィルド変数のゲッターとセッターを定義する
    get now () {
        return this.#now
    }
    // プライベートフィルド変数のゲッターとセッターを定義する
    set now (arg) {
        // 引数がDate型であることを確認する
        if (arg !== undefined && arg.constructor.name === "Date") {
            this.#now = arg
        }
    } 
    // コンストラクタを定義する
    /**
     * 
     * @param {string} id - HTMLのid属性値
     * @param {int} y
     * @param {int} m
     * @param {int} d
     */
    // Constructor
    constructor(id='cal',y, m, d) {
        // Initialize the calendar
        if (y === undefined || m === undefined || d === undefined) {
            this.#now = new Date()
        }else{
            this.#now = new Date(y, m, d)
        }
        this.element=document.getElementById(id)
        const table = documentoo.createElement('table')
        const caption = document.createElement('caption')
        //caption.appendChild(
        //    document.createElement('span').classList.add('month'))
        //this.element.querySelector('table')
        const span = document.createElement('span')
        span.classList.add('month')
        caption.appendChild(span)
        const thead = document.createElement('thead')
        const tfoot = document.createElement('tfoot')
        const tbody = document.createElement('tbody')
        table.appendChild(caption)
        table.appendChild(thead)
        table.appendChild(tfoot)
        table.appendChild(tbody)
        this.element.appendChild(table)
        //対象となるエレメントを取得する（？）
        //this.element.querySelector('table')
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

        let result = this.#now.getFullYear()
        //result += "/"+ String((this.#now.getMonth()+1)).padStart(2, padChara)
        //result += "/"+ String(this.#now.getDate()).padStart(2, padChara)
        result += "/"+ String((this.#now.getMonth()+1)).padStart(2, pad)
        result += "/"+ String(this.#now.getDate()).padStart(2, pad)
        
        console.log(result)
        return result
    }
}