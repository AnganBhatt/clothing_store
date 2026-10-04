
let day = document.querySelector('.day')
let hour = document.querySelector('.hour')
let minute = document.querySelector('.minute')
let second = document.querySelector('.second')

const targetdate = new Date("November 1 2026 00:00:00:00").getTime()
function timer() {
    const newdate = new Date().getTime();
    const distance = targetdate - newdate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    day.innerHTML = days
    hour.innerHTML = hours
    minute.innerHTML = minutes
    second.innerHTML = seconds

    if (distance < 0) {
        day.innerHTML = "00"
        hour.innerHTML = "00"
        minute.innerHTML = "00"
        second.innerHTML = "00"
    }
}

setInterval(timer, 1000);

const items = document.querySelectorAll('.new-arrival-head ul li');

items.forEach(item => {
    item.addEventListener('click', () => {
        items.forEach(li => {
            li.classList.remove('active');
        });
        item.classList.add('active');
    });
});

const offerlists = document.querySelectorAll('[data-filter]');
const offerproducts = document.querySelectorAll('[data-category]');

offerlists.forEach(offerlist => {
    offerlist.addEventListener('click', () => {
        const catagorey = offerlist.dataset.filter;
        offerproducts.forEach(offerproduct => {
            if (catagorey == offerproduct.dataset.category) {
                offerproduct.style.display = 'block';
            }
            else {
                offerproduct.style.display = 'none';
            }
        })
    })
})


let t_cards = document.querySelectorAll('.t-card');
let p_button = document.querySelector('.previous');
let n_button = document.querySelector('.next');

let start = 0;

function showcard() {
    t_cards.forEach((t_card, index) => {
        if (index == start) {
            t_card.classList.add('big')
        } else {
            t_card.classList.remove('big')
        }
    })
}
n_button.addEventListener('click', () => {
    if (start < t_cards.length - 1) {
        start++;
        showcard()
    }
})

p_button.addEventListener('click', () => {
    if (start > 0) {
        start--;
        showcard()
    }
})
showcard()