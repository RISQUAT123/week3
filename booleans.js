// let firstName = 'Risquat'
// let lastName = 'Adekoya'
// let country = 'Nigeria'
// let city = 'Lagos'
// let age = 30
// let isMarried = false
// let year = 2022
//let num = '10'

// console.log(typeof firstName)
// console.log(typeof lastName)
// console.log(typeof country)
// console.log(typeof city)
// console.log(typeof city)
// console.log(typeof age)
// console.log(typeof isMarried)
// console.log(typeof year)
// console.log(typeof num)

//question 4 --> truthy value
let isFemale = true
let num = 8 > 5
let otherName = 'Pelumi'

//question 4 --> falsy value
let gender 
let empty = null
let isMale = false

//question 5
4 > 3     //true, 4 is greater than 3
console.log(4 > 3)
4 >= 3   //true, 4 is greater than 3
console.log(4 >= 3)
4 < 3   //false, 4 is greater than 3
console.log(4 < 3)
4 <= 3   //false, 4 is greater than 3
console.log(4 <= 3)
4 == 4   //true, it is equal in value 
console.log(4 == 4)
4 === 4   //true, it is equal in value and data type 
console.log(4 === 4)
4 != 4   //false, it is equal
console.log(4 != 4)
4 !== 4   //false, it is equal
console.log(4 !== 4)
4 != '4'   //false,  it is not equal
console.log(4 != '4')
4 == '4'   //true, it is equal in value
console.log(4 == '4')
4 === '4'   //false, it is only equal in value, it is not equal in data type
console.log(4 === '4')
// to make a falsy comparison statement 
'python'.length != 'jargon'.length  //false, because they have equal length
console.log('python'.length != 'jargon'.length) 

//question 6
4 > 3 && 10 < 12  //true, because the two operands are true
console.log(4 > 3 && 10 < 12)
4 > 3 && 10 > 12  //false, because only one of the operand is true
console.log(4 > 3 && 10 > 12)
4 > 3 || 10 < 12  //true, because both operand true
console.log(4 > 3 || 10 < 12)
4 > 3 || 10 > 12  //true,  because one of the operand is true
console.log(4 > 3 || 10 > 12)
!(4 > 3)    //false, because it negates true
console.log(!(4 > 3))
!(4 < 3)   //true, because it negates false
console.log(!(4 < 3))
!(false)    //true, because it negates false
console.log(!(false))
!(4 > 3 && 10 < 12)  //false, because it negates true
console.log(!(4 > 3 && 10 < 12))
!(4 > 3 && 10 > 12)   //true, because it negates false
console.log(!(4 > 3 && 10 > 12))
!(4 === '4')   //true, because it negates false
console.log(!(4 === '4'))

//let check = 'python'
//let check1 = 'jargon'
//console.log(search(''))

//question 7
const present = new Date()
console.log(present.getFullYear())
console.log(present.getMonth() + 1)
console.log(present.getDate())
console.log(present.getDay())
console.log(present.getHours())
console.log(present.getMinutes())
console.log(present.getTime())

//level 2 q1
let half = Number(prompt(0.5))
let base = Number(prompt('enter base'))
let height = Number(prompt('enter height'))
let area = 0.5 * base * height
console.log(area)


//q2
let sideA = Number(prompt('enter sideA'))
let sideB = Number(prompt('enter sideB'))
let sideC = Number(prompt('enter sideC'))
let perimeter = sideA + sideB + sideC
console.log(perimeter)

//q3
let width = Number(prompt('enter width'))
let length = Number(prompt('enter length'))
let areaOfRectangle = length * width
console.log(areaOfRectangle)
let perimeterOfRectangle = 2 * (length + width)
console.log(perimeterOfRectangle)

//q4
let PI = Number(prompt('3.14'))
let radius = Number(prompt('enter radius'))
let areaOfCircle = PI * radius * radius
console.log(areaOfCircle)
//let circumferenceOfCircle = 2 * PI * radius
//console.log(circumferenceOfCircle)

//q5
let x = 0
let y = 0
let slope = ('y = 2x + 2')

//q6
let x1 = 2
let x2 = 6
let y1 = 2
let y2 = 10
let m = (y2 - y1)/(x2 - x1)
console.log(m)




