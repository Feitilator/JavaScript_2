// Theory

// const array = [1,2,3,4,5,20,42]
// const arrayString = ['a','b','c', null, 12]
// const array = new Array(1,2,3,4,5,20,42)

// console.log(array[2])
// console.log(array[array.length - 1]) // array[6]
// array[0] = 'Privet'
// console.log(array)


const inputElement = document.getElementById('input')
const createBtn = document.getElementById('add')
const cardElement = document.getElementById('card')

// console.log(inputElement.value)

// const notes = ['записать блок про массивы', 'рассказать теорию объектов']

// function render(){

//     // for (let i = 0; i < notes.length; i++){
//     //     cardElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//     // }

//     for(let note of notes){
//         cardElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     }
// }

// render()

// createBtn.onclick = function () {
//     if (inputElement.value.length === 0){
//         return
//     }
//     // cardElement.innerHTML = 
//     const newNote = {
//         title: inputElement.value,
//         completed: false,
//     }
//     cardElement.insertAdjacentHTML('beforeend', getNoteTemplate(newNote))

//     inputElement.value = ''
// }

// function getNoteTemplate(title, index){
//     return `
//     <li>
//         <p class="${title.completed ? 'hero__p-line-trought' : 'hero__p'}">${title.title}</p>
//         <div class="hero__card__btn">
//             <button class="hero__card__btn1" data-index="${index}">✓</button>
//             <button class="hero__card__btn2">✕</button>
//         </div>
//     </li>
//     `
// }

// Object Theory

// const person = {
//     fistName: 'Vladilen',
//     lastName: 'Minin',
//     year: 1993,
//     hasGirlfriend: false,
//     languages: ["ru", 'en','de'],
//     getFullName: function(){
//         console.log(person.fistName + ' ' + person.lastName)
//     }
// }

// console.log(person.year)
// console.log(person['languages'])
// const key = 'hasGirlfriend'
// console.log(person[key])
// person.hasGirlfriend = true
// console.log(person.hasGirlfriend)
// person.getFullName()

const notes = [
    {
        title: 'записать блок про массивы',
        completed: false,
    },
    {
        title: 'рассказать теорию объектов',
        completed: true,
    },   
]

function render(){
    cardElement.innerHTML = ''
    if (notes.length === 0){
        cardElement.innerHTML = `<h1 style="color: white">Нет заметок</h1>`
    }
    for (let i = 0; i < notes.length; i++){
        cardElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }

    // for(let note of notes){
    //     cardElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    // }
}
render()

createBtn.onclick = function () {
    if (inputElement.value.length === 0){
        return
    }
    // cardElement.innerHTML = 
    const newNote = {
        title: inputElement.value,
        completed: false,
    }
    notes.push(newNote)
    render()
    inputElement.value = ''
}

cardElement.onclick = function(event){
    if (event.target.dataset.index){
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle'){
            notes[index].completed = !notes[index].completed 
        }else if (type === 'remove'){
            notes.splice(index, 1)
        }
    }
    render()
}

function getNoteTemplate(title, index){
    return `
    <li>
        <p class="${title.completed ? 'hero__p-line-trought' : 'hero__p'}">${title.title}</p>
        <div class="hero__card__btn">
            <button class="${title.completed ? 'hero__card__btn1-warning' : 'hero__card__btn1'}" data-index="${index}" data-type="toggle">✓</button>
            <button class="hero__card__btn2" data-index="${index}" data-type="remove">✕</button>
        </div>
    </li>
    `
}