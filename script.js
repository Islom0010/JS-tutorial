let me1 = {
    name: 'jnjn'
}

let me2 = {
    name: 'jnjn'
}

let me3 = me1
me3.name = '11111'
console.log(me1 === me3)
console.log(me1.name)
console.log(me3.name)


console.log(me1 === me2 )
console.log(me1.name === me2.name )

let name = {
    name: 'Shokhrukh',
    surName: 'Akramov'
}

console.log(name);