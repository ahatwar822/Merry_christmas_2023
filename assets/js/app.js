'use strict'

const container = document.querySelector('.container')

const createSnow = () => {
  const snow = document.createElement('span')
  snow.className = 'snow'

  const minSize = 5
  const maxSize = 10

  let snowSize = Math.random() * (maxSize - minSize) + minSize

  //Snow Width and Height
  snow.style.width = snowSize + 'px'
  snow.style.height = snowSize + 'px'

  snow.style.left = Math.random() * 100 + '%'

  container.appendChild(snow)

  setTimeout(() => {
    snow.remove()
  }, 10000)
}

setInterval(createSnow, 100)