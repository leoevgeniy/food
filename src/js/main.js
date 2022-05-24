window.addEventListener('DOMContentLoaded', () => {
    //Tabs
    const tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items'),
          tabs = document.querySelectorAll('.tabheader__item');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');

        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //Timer

    const deadline = '2022-05-25';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);

    //Modal

    const modalBtn = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalClose = document.querySelector('[data-close]');

    modalBtn.forEach(item => {
        item.addEventListener('click', () => {

            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
    });
    
    
    modalClose.addEventListener('click', () => {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // Cards
    // function addCard(menuCard) {
    //     const menu = document.querySelector('.menu .container'),
    //       item = document.createElement('div'),
    //       image = document.createElement('img'),
    //       h3 = document.createElement('h3'),
    //       descr = document.createElement('div'),
    //       divider = document.createElement('div'),
    //       price = document.createElement('div'),
    //       cost = document.createElement('div'),
    //       total = document.createElement('div'),
    //       totalSpan = document.createElement('span');
    // item.classList.add('menu__item');
    // menu.appendChild(item);
    // image.src = menuCard.img;
    // image.alt = menuCard.name;
    // item.appendChild(image);
    // h3.classList.add('menu__item-subtitle');
    // h3.innerHTML = menuCard.title;
    // item.appendChild(h3);
    // descr.classList.add('menu__item-descr');
    // descr.innerHTML = menuCard.content;
    // item.appendChild(descr);
    // divider.classList.add('menu__item-divider');
    // item.appendChild(divider);
    // price.classList.add('menu__item-price');
    // item.appendChild(price);
    // cost.classList.add('menu__item-cost');
    // cost.innerHTML = 'Цена:';
    // price.appendChild(cost);
    // total.classList.add('menu__item-total');
    // price.appendChild(total);
    // total.innerHTML = `<span>${menuCard.price}</span> гре/день`;
    // }

    class menuCard {
        constructor(name, img, title, content, price, parentSelector, ...classes) {
            this.img = `${img}`;
            this.title = title;
            this.content = content;
            this.price = price;
            this.name = name;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }
        changeToUAH() {
            this.price = this.price * this.transfer;
        }
        
        render() {
           
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            
            element.innerHTML = `
                <img src=${this.img} alt=${this.name}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.content}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);

        }

    }

    

    // const fitness = new menuCard('vegy', 'img/tabs/vegy.jpg', 'Меню"Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 229);
    // const elite = new menuCard('vegy', 'img/tabs/elite.jpg', 'Меню"Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 229);
    // const post = new menuCard('vegy', 'img/tabs/post.jpg', 'Меню"Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 229);

    // addCard(fitness);
    // addCard(elite);
    // addCard(elite);
    // addCard(post);
    // addCard(post);
    
    new menuCard(
        'vegy',
        'img/tabs/vegy.jpg',
        'Меню"Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        100,
        '.menu .container'

    ).render();
    new menuCard(
        'vegy',
        'img/tabs/vegy.jpg',
        'Меню"Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        100,
        '.menu .container'

    ).render();

});