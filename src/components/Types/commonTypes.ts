export type responseType = {
    config: object
    data: string
    headers: object
    request: object
    status: number
    statusText: string
}

export type myObjectType = {
    from: string // какую валюту нужно отдать для обмена
    to: string  // какую валюту получаем при обмене
    maxamount: number // максимальное количество валюты отдаем (за раз)
    minamount: number // минимальное количество валюты отдаем (за раз)
    in: number // сколько отдаем валюты для обмена (для расчета курса)
    out: number // сколько получаем валюты (для расчета курса)
    fromfee: number // комиссия от входящего депозита
    tofee: number // комиссия от полученой валюты, вычитается после обмена
    amount: number // максимальное количество валюты при получении
    param: string // всегда manual
}
