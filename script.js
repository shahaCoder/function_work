// ПЕРВОЕ ЗАДАНИЕ,НАЙТИ ИЗ СПИСКА САМОЕ ДЛИННОЕ ИМЯ

let name = (...arg) => {
   let n = arg.reduce((a,b) => {
    if(a.length > b.length){
        return a
    } else{
        return b
    }
   })
   console.log(n)
}

name("Jordan","Nick","Brian","Elizabeth","Bella")


// ЗАДАНИЕ 2

let min = (...arg2) => {
let num = Math.min(...arg2.flat())
console.log(num)    
// if(typeof arg2 === "object"){   
// } 
}
min(100,200,50,40)
min([500],[240])
min([1000,700])
min("100","200")
min({a:100},{b:200}) // НЕ ПОЛУЧИЛОСЬ РЕШИТЬ ЗАДАЧУ С ОБЪЕКТОМ







