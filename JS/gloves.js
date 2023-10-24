const cells = 31

// From 0.001 to 100
const items = [
  {name: 'g1', img: '../IMG/case/per3.png', chance: 0.01},
  {name: 'g2', img: '../IMG/case/per1.png', chance: 1.99},
  {name: 'g3', img: '../IMG/case/per2.png', chance: 2},
  {name: 'g4', img: '../IMG/case/per5.png', chance: 5},
  {name: 'g5', img: '../IMG/case/per4.png', chance: 6},
  {name: 'p250', img: '../IMG/case/p250.png', chance: 25},
  {name: 'spas', img: '../IMG/case/spas.png', chance: 30},
  {name: 'p90', img: '../IMG/case/p90.png', chance: 60},
]

function getItem() {
  let item;

  while (!item) {
    const chance = Math.floor(Math.random() * 100)
    
    items.forEach(elm => {
      if (chance < elm.chance && !item) item = elm
    })
  }

  return item
}

function generateItems() {
  document.querySelector('.list').remove()
  document.querySelector('.scope').innerHTML = `
    <ul class="list"></ul>
  `
  
  const list = document.querySelector('.list')

  for (let i = 0; i < cells; i++) {
    const item = getItem()
    
    const li = document.createElement('li')
    li.setAttribute('data-item', JSON.stringify(item))
    li.classList.add('list__item')
    li.innerHTML = `
      <img src="${item.img}" alt="" />
    `

    list.append(li)
  }
}

generateItems()

let isStarted = false
let isFirstStart = true

function start() {
  if (isStarted) return
  else isStarted = true

  if (!isFirstStart) generateItems()
  else isFirstStart = false
  const list = document.querySelector('.list')

  setTimeout(() => {
    list.style.left = '50%'
    list.style.transform = 'translate3d(-50%, 0, 0)'
  }, 0)

  const item = list.querySelectorAll('li')[15]

  list.addEventListener('transitionend', () => {
    isStarted = false
    item.classList.add('active')
    const data = JSON.parse(item.getAttribute('data-item'))
    
    console.log(data);
  }, {once: true})
}

let FPSCounter = 0
function FPSIncrementer() {
  FPSCounter++

  requestAnimationFrame(arguments.callee)
}; FPSIncrementer()

function FPSViewer() {
  document.querySelector('.FPS').innerHTML = FPSCounter * 2
  FPSCounter = 0

  setTimeout(arguments.callee, 500)
}; FPSViewer()