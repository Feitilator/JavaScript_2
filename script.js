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

const notes = ['записать блок про массивы', 'рассказать теорию объектов']

function render(){

    // for (let i = 0; i < notes.length; i++){
    //     cardElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
    // }

    for(let note of notes){
        cardElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    }
}

//render()

createBtn.onclick = function () {
    if (inputElement.value.length === 0){
        return
    }
    // cardElement.innerHTML = 

 cardElement.insertAdjacentHTML('beforeend', 
    getNoteTemplate(inputElement. value))

    inputElement.value = ''
}

function getNoteTemplate(title){
    return `
    <li>
        <p class="hero__p">${title}</p>
        <div class="hero__card__btn">
            <button class="hero__card__btn1">✓</button>
            <button class="hero__card__btn2">✕</button>
        </div>
    </li>
    `

}
