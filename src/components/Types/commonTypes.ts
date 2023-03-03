export type responseType = {
    config: object
    data: string
    headers: object
    request: object
    status: number
    statusText: string
}

export type PairType = {
    FROM: string // какую валюту нужно отдать для обмена
    TO: string  // какую валюту получаем при обмене
    MAXAMOUNT: number // максимальное количество валюты отдаем (за раз)
    MINAMOUNT: number // минимальное количество валюты отдаем (за раз)
    IN: number // сколько отдаем валюты для обмена (для расчета курса)
    OUT: number // сколько получаем валюты (для расчета курса)
    FROMFEE: number // комиссия от входящего депозита
    TOFEE: number // комиссия от полученой валюты, вычитается после обмена
    AMOUNT: number // максимальное количество валюты при получении
    PARAM: string // всегда manual
}
