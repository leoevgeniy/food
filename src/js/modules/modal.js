function modal() {
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }
        //Tabs
    

    

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



    

    // const fitness = new menuCard('vegy', 'img/tabs/vegy.jpg', 'Меню"Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 229);
    // const elite = new menuCard('vegy', 'img/tabs/elite.jpg', 'Меню"Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 229);
    // const post = new menuCard('vegy', 'img/tabs/post.jpg', 'Меню"Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 229);

    // addCard(fitness);
    // addCard(elite);
    // addCard(elite);
    // addCard(post);
    // addCard(post);
    // const getResource = async (url) => {
    //     const res = await fetch(url);
        
    //     if (!res.ok) {
    //        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //     }

    //     return await res.json();
    // };
    





    // function createCard(data) {
    //     data.forEach(({altimg, img, title, descr, price}) => {
    //         const element = document.createElement('div');

    //         element.classList.add('menu__item');
    //         element.innerHTML = `
    //             <img src=${img} alt=${altimg}>
    //             <h3 class="menu__item-subtitle">${title}</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //             </div>
    //         `;

    //         document.querySelector('.menu .container').append(element);
    //     });
    // }
    // new menuCard(
    //     'vegy',
    //     'img/tabs/vegy.jpg',
    //     'Меню"Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     100,
    //     '.menu .container'

    // ).render();
    // new menuCard(
    //     'vegy',
    //     'img/tabs/vegy.jpg',
    //     'Меню"Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     100,
    //     '.menu .container'

    // ).render();

    

    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(res => console.log(res));


    // Slider
    // my code
    // const counter = document.querySelector('.offer__slider-counter'),
    //       current = counter.querySelector('#current'),
    //       total = counter.querySelector('#total'),
    //       prev = counter.querySelector('.offer__slider-prev'),
    //       next = counter.querySelector('.offer__slider-next'),
    //       slider = document.querySelectorAll('.offer__slide');
    // let   i = 1;

    // current.innerHTML = `0${i}`;
    // total.innerHTML = `04`;

    // function hideSlide() {
    //     slider.forEach((element, item) => {
    //     if (item === i - 1) {
    //         element.style.display = 'block';
    //     } else {
    //         element.style.display = 'none';
    //     }
    // });
    // }

    // function sliderClick () {
    //     prev.addEventListener('click', (e)=> {
    //        if (i === 1) {
    //         i = +total.innerHTML;
    //         current.innerHTML = `0${i}`;
    //         hideSlide();
    //        } else {
    //            i--;
    //            current.innerHTML = `0${i}`;
    //            hideSlide();
    //        }
    //     });
    //     next.addEventListener('click', (e)=> {
    //        if (i === 4) {
    //         i = 1;
    //         current.innerHTML = `0${i}`;
    //         hideSlide();
    //        } else {
    //            i++;
    //            current.innerHTML = `0${i}`;
    //            hideSlide();
    //        }
    //     });
    // }

   

    

    //easy option slider
    // showSlides(slideIndex);
    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = `${slides.length}`;
    // }

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }
    //     slides.forEach(item => {
    //         item.style.display = 'none';
    //     });
    //     slides[slideIndex - 1].style.display = '';
    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlides (n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });
    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });

    //dotes slider

    //calculator

    
}
module.exports = modal;