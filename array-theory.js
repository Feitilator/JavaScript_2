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

const greateWoman = 'Елена'
const index = names.indexOf(greateWoman)
console.log(index)
const newNames = names.with(index, 'Елена Великая')
// names[index] = 'Елена Великая'
// console.log(names[index])
// console.log(newNames)
// console.log(names)

const capitalNames = names.map(function(name, index){
  if (index === 1){
    return 'Eлена Великая'
  }
  return name
})
console.log(capitalNames)