/**
 * Classe Calendar
 * Constrói o calendário de um mês (ano/mês) dentro de um elemento HTML.
 *
 * Uso:
 *   new Calendar("jan", 2026, 1)  -> monta janeiro/2026 dentro de <div id="jan">
 *   new Calendar("hoje")          -> sem ano/mês, usa a data atual do sistema
 */
class Calendar {

    // nome (japonês) e classe CSS de cada dia da semana, começando em domingo
    static WEEKDAYS = [
        { name: '日', css: 'sun' },
        { name: '月', css: 'mon' },
        { name: '火', css: 'tue' },
        { name: '水', css: 'wed' },
        { name: '木', css: 'thu' },
        { name: '金', css: 'fri' },
        { name: '土', css: 'sat' },
    ]

    /**
     * @param {string} id - id do elemento onde o calendário será construído
     * @param {number} [year] - ano (ex: 2026). Se omitido, usa o ano atual
     * @param {number} [month] - mês de 1 a 12. Se omitido, usa o mês atual
     */
    constructor(id, year, month) {
        const today = new Date()

        this.id = id
        this.year = (year === undefined) ? today.getFullYear() : year
        this.month = (month === undefined) ? today.getMonth() + 1 : month // 1 a 12

        this.render()
    }

    /**
     * Quantos dias tem this.year / this.month.
     * O "dia 0" de um mês em JS é o último dia do mês anterior,
     * então passando o mês atual (sem -1) pegamos o último dia dele.
     */
    daysInMonth() {
        return new Date(this.year, this.month, 0).getDate()
    }

    /**
     * Em que dia da semana cai o dia 1 do mês (0 = domingo ... 6 = sábado).
     * new Date usa mês zero-indexado, por isso o -1 aqui.
     */
    firstWeekday() {
        return new Date(this.year, this.month - 1, 1).getDay()
    }

    // monta o <header> com ano/mês e a linha com os nomes dos dias da semana
    buildHeader() {
        const weekRow = Calendar.WEEKDAYS
            .map(w => `<div class="day ${w.css}">${w.name}</div>`)
            .join('')

        return `
            <header>
                <h2>
                    <span class="year">${this.year}</span>年
                    <span class="month">${this.month}</span>月
                </h2>
                <div class="week">${weekRow}</div>
            </header>
        `
    }

    // monta o corpo do mês: várias .week, cada uma com 7 .day
    buildMonth() {
        const totalDays = this.daysInMonth()
        const startWeekday = this.firstWeekday()

        const today = new Date()
        const isCurrentMonth = today.getFullYear() === this.year
            && (today.getMonth() + 1) === this.month

        let html = ''
        let week = ''
        let count = 0

        // células vazias antes do dia 1 (dias do mês anterior)
        for (let i = 0; i < startWeekday; i++) {
            week += `<div class="day ${Calendar.WEEKDAYS[count].css}"><span class="cap"> </span></div>`
            count++
        }

        // os dias de fato do mês
        for (let day = 1; day <= totalDays; day++) {
            const weekday = Calendar.WEEKDAYS[count % 7]
            const isToday = isCurrentMonth && today.getDate() === day
            const cssClasses = isToday ? `day ${weekday.css} today` : `day ${weekday.css}`

            week += `<div class="${cssClasses}"><span class="cap">${day}</span></div>`
            count++

            if (count % 7 === 0) {
                html += `<div class="week">${week}</div>`
                week = ''
            }
        }

        // completa a última semana com células vazias, se sobrar alguma
        if (week !== '') {
            while (count % 7 !== 0) {
                week += `<div class="day ${Calendar.WEEKDAYS[count % 7].css}"><span class="cap"> </span></div>`
                count++
            }
            html += `<div class="week">${week}</div>`
        }

        return `<div class="month">${html}</div>`
    }

    // constrói o HTML completo e injeta dentro do elemento com o id informado
    render() {
        const target = document.getElementById(this.id)

        if (!target) {
            console.error(`Calendar: elemento com id="${this.id}" não encontrado`)
            return
        }

        target.innerHTML = `<div class="calendar">${this.buildHeader()}${this.buildMonth()}</div>`
    }
}
