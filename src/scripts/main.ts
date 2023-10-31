const hamburger = document.querySelector('.hamburger');
const linksItems = document.querySelectorAll('.link-item')
const showcase = document.querySelector('main')
const header = document.querySelector('.main-header')

//expanded navbar
hamburger?.addEventListener('click' ,() => {
    const isExpanded = JSON.parse(hamburger.getAttribute('aria-expanded')!)
    hamburger.setAttribute('aria-expanded', new Boolean(!isExpanded).toString())
})

// close navbar on click in item link
linksItems.forEach(item => item.addEventListener('click', () => {
    const isExpanded = JSON.parse(hamburger?.getAttribute('aria-expanded')!)
    isExpanded && hamburger?.setAttribute('aria-expanded', 'false') 
}))

//close navbar on resize page 
window.addEventListener('resize' , () => {
    innerWidth > 800 && hamburger?.setAttribute('aria-expanded', 'false') 
})


// add class on scroll to header
const intersection = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        !entry.isIntersecting ? header.classList.add('active') : header.classList.remove('active')
    })
}, {rootMargin: "-100px 0px 0px 0px"})


showcase && intersection.observe(showcase)