console.log("hello world")
let a = (3 + 5)
console.log(a)
let b = (23 * 10)
console.log(b)
let c = (200 / 23)
console.log(c)
let d = (97 - 90)
console.log(d)
let e = (2 ** 2)
console.log(e)
const abc = document.getElementById("abc")

const arr = [1, 2, 3]
console.log(arr)
const arr2 = [5, 6, 7, 'abc', 'xyz', true, false]
console.log(arr2[3])
const stu = {
    name: "maryam",
    age: 12,
    isGood: true,
    hobbies: ['sketching', 'cooking', 'traveling']

}
stu.shirt="purple"
stu.age=105
delete stu.age
console.log(stu)
console.log(stu.name)
console.log(stu.age)
console.log(stu.isGood)
console.log(stu.hobbies)
console.log(stu.hobbies[0])

if (stu.age >= 12) {
    console.log("eligibe for exam")
}
else {
    console.log("not applicable")
}
const ar = ['saad', 'talha', 'red bhai']
console.log(ar)
console.log(ar[1])
ar.push('brown bhai')
console.log(ar)
ar[3]=('purple bhai')
console.log(ar)
ar.pop()
console.log(ar)
let array=ar.slice(1,3)
console.log(array)
ar.push('pink','yellow','green','black')
console.log(ar)
ar.splice(2,4,'white bacha','orange bacha')
console.log(ar)
const stus=[
    {
        id:1,
        name:'aleena',
    },
    {
        id:2,
        name:'meerab'
    }
]
console.log(stus)
stus.push(
    {
        id:3,
        name:'hamna'
    }
)
console.log(stus)
stus[1].age=12
console.log(stus)
