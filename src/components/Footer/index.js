import './main.scss'; 

export function Footer(){

    const footer = document.querySelector("#Footer");
        footer.innerHTML= 
        `
            <footer class="footer section">
                <div class="footer__container bd-container bd-grid">
                    <div class="footer__content>
                        <h3 class="footer__title">
                            <a href="#" class="footer__logo"> Christmas </a>
                        </h3>
                        <p class="footer__description"> I sent a gift and it gives <br> happinnes </p>
                    </div>
                    <div class="footer__content">
                        <h3 class="footer__title"> Our services </h3>

                        <ul>
                            <li><a href="#" class="footer__links"> Pricing </a> </li> 
                            <li><a href="#" class="footer__links"> Discounts </a> </li> 
                            <li><a href="#" class="footer__links">  Shipping mode </a></li> 
                        </ul>
                    </div>

                    <div class="footer__content">
                        <h3 class="footer__title"> Our company </h3>

                        <ul>
                            <li><a href="#" class="footer__links"> Blog </a> </li> 
                            <li><a href="#" class="footer__links"> About us </a> </li> 
                            <li><a href="#" class="footer__links">  Our mission </a></li> 
                        </ul>
                    </div>

                    <div class="footer__content">
                        <h3 class="footer__title"> Social </h3>
                        <a href="https://github.com/Monge1331" class="footer__social"> <i class='bx bxl-github'></i> </a>
                        <a href="https://www.instagram.com/biel.ximenes13/" class="footer__social"> <i class='bx bxl-instagram' ></i> </a>
                    </div>

                </div>

                <p class="footer__copyright"> &#169; 2022 Lovingly made by Gabriel Ximenes ❤️ </p>
            </footer>       
        `
}