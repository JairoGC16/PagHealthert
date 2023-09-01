const container = document.getElementById('container')
const list = document.querySelectorAll('.list')
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('link')) {
    RemoveAll();
    e.target.children[1].classList.toggle('rotate')
    let value = e.target.parentElement
    value.classList.toggle('scale')
  }
  e.stopPropagation()
})

const RemoveAll=()=>{
  for(let index of list){
    index.classList.remove('scale')
  }
}