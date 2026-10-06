
let day = document.querySelector('.day')
let hour = document.querySelector('.hour')
let minute = document.querySelector('.minute')
let second = document.querySelector('.second')


const targetdate = new Date("November 1 2026 00:00:00").getTime()
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

if (day && hour && minute && second) {
    timer();
    setInterval(timer, 1000);
}

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

if (t_cards.length && p_button && n_button) {

    n_button.addEventListener('click', () => {
        if (start < t_cards.length - 1) {
            start++;
            showcard();
        }
    });

    p_button.addEventListener('click', () => {
        if (start > 0) {
            start--;
            showcard()
        }
    })
    showcard()
}

// Shop search

const searchAppear = document.querySelector('#search');
const searchShow = document.querySelector('.search-edit');
const searchClose = document.querySelector('.search-close');

if (searchAppear && searchShow && searchClose) {
    searchAppear.addEventListener('click', () => {
        searchShow.classList.add('show');
    })

    searchClose.addEventListener('click', () => {
        searchShow.classList.remove('show');
    });
}

document.querySelectorAll('.brnad-filter').forEach(box => {
    const icon = box.querySelector('.brnad-filter-icon');
    const list = box.querySelector('.brand-filter-two');

    icon.addEventListener('click', () => {
        icon.classList.toggle('show');
        list.classList.toggle('show');
    });
});

document.querySelectorAll('.collection').forEach(box => {
    const icon = box.querySelector('.c-icon')
    const lists = box.querySelector('.c-b-two');
    icon.addEventListener('click', () => {
        icon.classList.toggle('show')
        lists.classList.toggle('show')
    })
})

const changerBtns = document.querySelectorAll('.card-changer [data-col]');
const cardWrapper = document.querySelector('.card-wrapper');
const mobileFilterBtn = document.querySelector('.mobile-filter');
const shopFilter = document.querySelector('.filter');

if (mobileFilterBtn && shopFilter) {
    mobileFilterBtn.addEventListener('click', () => {
        const isOpen = shopFilter.classList.toggle('is-open');
        mobileFilterBtn.setAttribute('aria-expanded', String(isOpen));
    });
}

if (cardWrapper) {
    changerBtns.forEach(btn => {
        const changeColumns = () => {
            cardWrapper.style.setProperty('--cols', btn.dataset.col);

            changerBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
        };

        btn.addEventListener('click', changeColumns);
        btn.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                changeColumns();
            }
        });
    });
}

let side_imgs = document.querySelectorAll('.small-img ul li');

if(side_imgs){
    side_imgs.forEach(side_img => {
        side_img.addEventListener('click', () => {
            side_imgs.forEach(style => {
                style.classList.remove('active')
            })
    
            side_img.classList.add('active')
        })
    })
}


let siderimg = document.querySelectorAll('.slider-img-list img');
let main_img = document.querySelector('.big-image');
if( siderimg && main_img){
    siderimg.forEach(sider => {
        sider.addEventListener('click', () => {
            main_img.src = sider.src
    
        })
    })
}
