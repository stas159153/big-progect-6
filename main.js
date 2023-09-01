const modal = document.querySelector('.modal')
const button = document.querySelector('.button')
const cancel = document.querySelector('.cancel')
const like = document.querySelector('.like')
const img = document.querySelector('.img')
const papir = document.querySelector('.papir')
const nojuci = document.querySelector('.nojuci')
const kamin = document.querySelector('.kamin')
const randomPosition = document.querySelector('.random')
button.addEventListener('click', event =>{ modal.classList.add('none')
  button.classList.add('none2')})

  cancel.addEventListener('click',event =>{
    modal.classList.remove('none')
    button.classList.remove('none2')
  } )

  like.addEventListener('click', event => img.classList.toggle('new'))
  console.log(cancel);

randomPosition.addEventListener('click', event => {
  let randomY = Math.floor(Math.random() * 500 ) 
  let randomX = Math.floor(Math.random() * 1380 ) 

  modal.classList.add('random1')
  modal.style.top = randomY + 'px'
  modal.style.left = randomX + 'px'

})
let cc
kamin.addEventListener('click', event =>{
 cc = Math.floor(Math.random() * 3 + 1)
 if ( cc == 1){
  alert('fdkddkffkks')
 }
 else if ( cc == 2){
  alert('won')
 }
 else if ( cc == 3){
  alert('loser')
 }
})

papir.addEventListener('click', event =>{
  cc = Math.floor(Math.random() * 3 + 1)
  if ( cc == 3){
   alert('fdkddkffkks')
  }
  else if ( cc == 1){
   alert('won')
  }
  else if ( cc == 2){
   alert('loser')
  }
 })

 nojuci.addEventListener('click', event =>{
  cc = Math.floor(Math.random() * 3 + 1)
  if ( cc == 2){
   alert('fdkddkffkks')
  }
  else if ( cc == 3){
   alert('won')
  }
  else if ( cc == 1){
   alert('loser')
  }
 })
 console.log('1 = kamin 2 = nojuci  3 =papir')