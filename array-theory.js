const names = ['Владилен', 'Елена','Игорь','Ксения']

// names.push('Алена')
// names.unshift('Алена')
// const name = names.shift()
// const name = names.pop()

// console.log(names , name)

// console.log(names.toReversed())

// const letters = ["a","c","b"]
// console.log(letters.toSorted())

// console.log(names.splice(2,2))
// console.log(names.toSpliced(0,1))

// console.log(names)

// const greateWoman = 'Елена'
// const index = names.indexOf(greateWoman)
// console.log(index)
// const newNames = names.with(index, 'Елена Великая')
// names[index] = 'Елена Великая'
// console.log(names[index])
// console.log(newNames)
// console.log(names)

// const capitalNames = names.map(function(name, index){
//   if (index === 1){
//     return 'Eлена Великая'
//   }
//   return name
// })
// console.log(capitalNames)

// console.log(names.includes('Игорь'))
// console.log(names.indexOf('Игорь') !== -1)

const people = [
  { name : 'Владилен', budget: 4200},
  { name : 'Елена',    budget: 15100},
  { name : 'Игорь',    budget: 300},
  { name : 'Ксения',   budget: 7520},
]

// console.log(people.indexOf({name: 'Ксения', budget:7520}))

// let findedPerson 

// for (let person of people) {
//   if(person.budget === 7520){
//     findedPerson = person
//   }
// }

// const findedPerson = people.find(function(person){
//   return person.budget === 7520
// })

// const findedPerson = people.findIndex(function(person){
//   return person.budget === 7520
// })

// console.log(people[findedPerson])

// const finded = people.find((p) => p.budget === 7520)
// console.log(finded)

// const filtered = people.filter(function(person) {
//   return person.budget > 5000
// })

// let sumBudget = 0

// console.log(filtered)
// filtered.forEach(function(person){
//   sumBudget += person.budget 
// })
// console.log(sumBudget)

// const sumBudget = people.filter(p => p.budget > 5000).map(p => p.budget).reduce((acc,p) => acc + p,0)
// console.log(sumBudget)

const string = 'Привет, как дела?'
const reversed = string.split('').toReversed().join('!').split('').filter(c => c!== '!').join('')

console.log(reversed)