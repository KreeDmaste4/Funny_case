const cells = 81

// From 0.001 to 100
const items = [
  {name: 'ker', img: '../IMG/case/ker.png', chance: 1},
  {name: 'ak', img: '../IMG/case/ak.png', chance: 3},
  {name: 'tec', img: '../IMG/case/tec.png', chance: 5},
  {name: 'um', img: '../IMG/case/um.png', chance: 9},
  {name: 'famas', img: '../IMG/case/famas.png', chance: 10},
  {name: 'deserteag', img: '../IMG/case/deserteag.png', chance: 15},
  {name: 'fnfanal', img: '../IMG/case/fnfanl.png', chance: 30},
  {name: 'muha', img: '../IMG/case/muha.png', chance: 38}
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

  const item = list.querySelectorAll('li')[40]

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