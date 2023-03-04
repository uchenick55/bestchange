
export let apiCommon = { // объект с методами api для общих нужд
  putData: (data) => { // задание данных в localStorage
    localStorage.setItem("bestchange", JSON.stringify(data)); // отправить theme1 в LocalStorage
     // запросить данные с localStorage после записи
    return apiCommon.getData() //вернуть данные после записи
  },
  getData: () => { // получение theme1 из localStorage
    const aaa =  JSON.parse(localStorage.getItem("bestchange")); // получить данные из LocalStorage
    return aaa
  },
}
