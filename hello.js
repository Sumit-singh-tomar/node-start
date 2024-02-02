// console.log("Hello World")
// const product = (a,b) => a*b
// console.log(product(3,5))

// var student = {
//     name : 'Peter',
//     rollNo : '101',
//     printDetail : ()=>{
//         return (`Student Name :${this.name} and Roll Number is :${this.rollNo}`)
//     } 
// }

// console.log(student.name)
// console.log(student.printDetail())

// var arr = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon']

// console.log(arr.map((item) => {
//     if (item == ' ') {
//         item = 'empty string'
//     }
//     return item
// }))


// const obj1 = {'key1': 1}

// const obj2 = { ...obj1}

// if(obj2 === obj1){

// console.log('same objects')

// }

// else{

//     console.log('different objects')
    
//     }

const obj1 = {'key1': 1 , 'key2' : 2}

const obj2 = { ...obj1, key1: 1000}



console.log(obj1)

console.log(obj2)