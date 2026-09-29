"use strict"

// object/calendar/Calendar.js

// クラスを定義する
/**
 * new Calendar(id, year, month) :
 */

class Calendar {
    year = 0
    month = 0
    
    // テンプレート
    #cal_body
    #cal_row

    // 見出し用プロパティ
    #title = ''
    get title() {
        return this.#title
    }
    set title(title) {
        this.#title = title
    }

    //　備考プロパティ
    #remark = ''
    get remark() {
        return this.#remark
    }
    set remark(remark) {
        this.#remark = remark
    }
}