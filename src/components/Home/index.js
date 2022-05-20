import './main.scss'


// import  from './../../public/home.png'

export function Home(){
    const home = document.querySelector("#Home");

    const HOME__IMAGE = new URL('./../../public/home.png', import.meta.url).href;
    const SHARE__IMAGE = new URL('./../../public/shared.png', import.meta.url).href;
    const DECORATION1__IMAGE = new URL('./../../public/decoration1.png', import.meta.url).href;
    const DECORATION2__IMAGE = new URL('./../../public/decoration2.png', import.meta.url).href;
    const DECORATION3__IMAGE = new URL('./../../public/decoration3.png', import.meta.url).href;
    const ACCESSORY1__IMAGE = new URL('./../../public/accessory1.png', import.meta.url).href;
    const ACCESSORY2__IMAGE = new URL('./../../public/accessory2.png', import.meta.url).href;
    const ACCESSORY3__IMAGE = new URL('./../../public/accessory3.png', import.meta.url).href;
    const ACCESSORY4__IMAGE = new URL('./../../public/accessory4.png', import.meta.url).href;
    const ACCESSORY5__IMAGE = new URL('./../../public/accessory5.png', import.meta.url).href;
    const SEND__IMAGE = new URL('./../../public/send.png', import.meta.url).href;

    
    home.innerHTML =
    `
        <section class = "home" id="home"> 
            <div class="home__container bd-container bd-grid" >
                <div class="home__image">
                    <img id="home-image" src="${HOME__IMAGE} " alt="homepage image, wich is a santa claus hand, with white and red colors, holding a gift box."/>
                </div>

                <div class="home__data">
                    <h1 class="home__title"> Send a gift for christmas </h1>
                    <p class="home__description">In these end of the year holidays send a gift your loved and share the happinnes at christmas </p>
                    <a href="#" class="home__button">Get started </a>
                </div>
            </div> 
        </section>

        <section class="share section bd-container" id="share" >
            <div class="share__container bd-grid"> 
                <div class="share__data">
                    <h2 class="section-title-center"> Sharing is the best gift <br> you can give </h2>
                    <p class="share__description"> Sharing these holidays is the best gift you can give, give a present or share your love with the people you love the most and celebrate with great happiness </p> 
                    <a href="#" class="share__button">Send a gift </a>
                </div>

                <div class="share__image">
                    <img src="${SHARE__IMAGE}" alt"Shared image"/>
                </div>
            </div>
        </section>

        <section class="decoration section bd-container" id="decoration" >
        <h2 class="section-title">Give Christmas Decorations <br> For Your Home</h2>
            <div class="decoration__container bd-grid">
                <div class="decoration__data" >
                    <img src="${DECORATION1__IMAGE}" alt="the image of a hand holding a bell" class="decoration__image"/>
                    <h3 class="decoration__title"> Christmas belss </h3>
                    <a href="#" class="decoration__button decoration__link"> Go shopping </a>
                </div>

                <div class="decoration__data" >
                    <img src="${DECORATION2__IMAGE}" alt="the image of a hand holding a candies" class="decoration__image"/>
                    <h3 class="decoration__title"> Christmas candies </h3>
                    <a href="#" class="decoration__button decoration__link"> Go shopping </a>
                </div>

                <div class="decoration__data" >
                    <img src="${DECORATION3__IMAGE}" alt="the image of a hand holding a trees" class="decoration__image"/>
                    <h3 class="decoration__title"> Christmas trees </h3>
                    <a href="#" class="decoration__button decoration__link"> Go shopping </a>
                </div>
            </div>
        </section>


        <section class="accessory section bd-container" id="accessory">
            <h2 class="section-title">  New christmas <br> accessorys </h2>  

            <div class="accessory__container bd-grid">
                <div class="accessory__content">
                    <img src="${ACCESSORY1__IMAGE}" alt="this a image the globe of snow" class="accessory__image"/>
                    <h3 class="accessory__title"> Snow globe  </h3>
                    <span class="accessory__category">Accessory </span>
                    <span class="accessory__price"> $2,00 </span>
                    <a href="#" class="accessory__button"> <i class='bx bx-heart'></i> </a>
                </div>

                <div class="accessory__content">
                <img src="${ACCESSORY2__IMAGE}" alt="this a image the globe of snow" class="accessory__image"/>
                <h3 class="accessory__title"> Candy  </h3>
                <span class="accessory__category">Accessory </span>
                <span class="accessory__price"> $5,00 </span>
                <a href="#" class="accessory__button"> <i class='bx bx-heart'></i> </a>
                </div>

                <div class="accessory__content">
                    <img src="${ACCESSORY3__IMAGE}" alt="this a image the globe of snow" class="accessory__image"/>
                    <h3 class="accessory__title"> keychain </h3>
                    <span class="accessory__category">Accessory </span>
                    <span class="accessory__price"> $9,00 </span>
                    <a href="#" class="accessory__button"> <i class='bx bx-heart'></i> </a>
                </div>

                <div class="accessory__content">
                    <img src="${ACCESSORY4__IMAGE}" alt="this a image the globe of snow" class="accessory__image"/>
                    <h3 class="accessory__title"> Ornament ball </h3>
                    <span class="accessory__category">Accessory </span>
                    <span class="accessory__price"> $1,00 </span>
                    <a href="#" class="accessory__button"> <i class='bx bx-heart'></i> </a>
                </div>
                <div class="accessory__content">
                    <img src="${ACCESSORY5__IMAGE}" alt="this a image the globe of snow" class="accessory__image"/>
                    <h3 class="accessory__title"> Surprise box  </h3>
                    <span class="accessory__category">Accessory </span>
                    <span class="accessory__price"> $20,00 </span>
                    <a href="#" class="accessory__button"> <i class='bx bx-heart'></i> </a>
                </div>

            </div>

        </section>

        <section class="send section">
            <div class="send__container bd-grid bd-container">
                <div class="send__content">
                    <h2 class="send__title"> Send a gift now </h2>
                    <p class="send__description">Starting giving away before holidays are over. Write the home address of the person who will send the gift </p>

                    <form>
                        <div class="send__direction">
                            <input type="text" placeholder="House address" class="send__input">
                            <a href="#" class="send__button"> send </a>
                        </div>
                    </form>
                </div>

                <div class="send__image">
                    <img src="${SEND__IMAGE}" alt="Santa claus delivering a gift" />
                </div>
            </div>

        </section>
    `
}