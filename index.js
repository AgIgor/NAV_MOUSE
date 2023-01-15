const div = document.querySelector('div')
const nav = document.querySelector('span')
const h2 = document.querySelector('h2')

div.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    h2.innerText = `X: ${x}, Y: ${y}`

    setTimeout(() => {
        nav.style.top = `${y}px`
        nav.style.left = `${x}px`
        // nav.setAttribute('style',` top: ${y}px;left:${x}px;`)
    },170)
})

div.addEventListener('click', (element) => {
    nav.classList.remove('rotate')
    setTimeout(() => {
        nav.classList.add('rotate')
    },1)

})