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

    /**
     * コンストラクタ
     * 
     * @param {string} id - カレンダーのエレメントのID
     * @param {number} y - 年
     * @param {number} m - 月
     */
    constructor(id='cal', y, m) {
        if (y && m) {
            this.year = y
            this.month = m
        } 
        else {
            const now = new Date()
            this.year = now.getFullYear()
            this.month = now.getMonth()
        }
        //　エレメントを参照する
        this.element = document.getElementById(id)
        // テンプレートを参照する
        this.#cal_body = document.getElementById('cal_body')
        this.#cal_row = document.getElementById('cal_row')
    }

    /**
     * カレンダーを描画する 
     */
    render() {
        // 本日の日付（時間は0:00:00.000）
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        // テンプレートを複製する
        const cal_body = this.#cal_body.content.cloneNode(true)
        const cal_row = this.#cal_row.content.cloneNode(true)

        cal_body.querySelector('.title').textContent = this.#title;
        cal_body.querySelector('.remark').textContent = this.#remark;
        cal_body.querySelector('.month').textContent =this.month+1;

        // 
        let week = cal_row.cloneNode(true)
        let days = week.querySelectorAll('td > span')
        
        // 1ヶ月の繰り返し処理
        // 月の最初の日付を取得する
        const day = new Date(this.year, this.month, 1)
        while(this.month === day.getMonth()) {
            //console.log(day)
            const wd = day.getDay() // 曜日を取得する
            days[wd].textContent = day.getDate() // 日付をセットする
            if (day.getTime() === today.getTime()) {
                days[wd].classList.add('today') // 本日の日付にクラスを追加する
            }
            // 週末の場合、次の週を。。。
            if (wd === 6) { // 土曜日なら
                // 週の行を追加する
                cal_body.querySelector('tbody').appendChild(week)
                week = cal_row.cloneNode(true)
                days = week.querySelectorAll('td > span')
            }
            // 次の日へめる
            day.setDate(day.getDate() + 1)
        }
        cal_body.querySelector('tbody').appendChild(week) // 最後の週を追加する

        // kannseishita te-buru wo #actual ni settei suru
        if (this.element) {
            this.element.innerHTML = ''
            this.element.appendChild(cal_body)
        }
    }
}