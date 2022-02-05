const tabsBtn = document.querySelectorAll('.product-detail__change');

tabsBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;

        if(!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            })
            currentBtn.classList.add('active');
        }
        // tabsBtn.forEach(function(item) {
        //     item.classList.remove('active');
        // })
        // currentBtn.classList.add('active');
    });
});

document.querySelector('#home').onmouseover = (e) => {
    let x = (window.innerWidth - e.pageX * 2) / 90;
    let y = (window.innerHeight - e.pageY * 2) / 90;

    document.querySelector('.icecream__presentation-illustration').style.transform = `translateX(${y}px)
    translateY(${x}px)`;
}
document.querySelector('#home').onmouseleave = () => {

    document.querySelector('.icecream__presentation-illustration').style.transform = `translateX(0px)
    translateY(0px)`;
}


const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__nav');
const headerButton = document.querySelector('.header__button');

hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    menu.style.display = 'block';
    headerButton.style.display = 'block';
    if(!hamburger.classList.contains('is-active')) {
        menu.style.display = 'none';
        headerButton.style.display = 'none';
    }
})




let timeline = gsap.timeline();

timeline.from('.icecream__presentation-illustration', {
    duration: 1,
    alpha: 0,
    y: 100,
    rotation: 90
})
timeline.from('.icecream__presentation-text', {
    duration: 0.5,
    alpha: 0,
    y: 30,
    x: -30,
    stagger: 0.05,   
}, "-=0.5")
gsap.from('.advantages', {
    duration: 1,
    alpha: 0,
    x: -200
})







