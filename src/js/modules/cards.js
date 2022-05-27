function cards () {
    class menuCard {
        constructor(altimg, img, title, descr, price, parentSelector, ...classes) {
            this.img = img;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.altimg = altimg;
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
                <img src=${this.img} alt=${this.altimg}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);

        }

    }
        // getResource('http://localhost:3000/menu')
    // .then(data => {
    //     data.forEach(({altimg, img, title, descr, price}) => {
    //         new menuCard(altimg, img, title, descr, price, '.menu .container').render();
    //     });
    // });

    // getResource('http://localhost:3000/menu')
    //     .then(data => createCard(data));
    axios.get('http://localhost:3000/menu')
    .then(data => {
            data.data.forEach(({altimg, img, title, descr, price}) => {
                new menuCard(altimg, img, title, descr, price, '.menu .container').render();
            });
    });





}

module.exports =cards;