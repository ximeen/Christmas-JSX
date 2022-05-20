import './main.scss'

export function Header(){
   

    const header = document.querySelector("#Header");
        
    
    header.innerHTML=
        `
            <a href="#" class="scroll-top" id="scroll-top" >
                <i class='bx bx-chevron-up  scroll-top-icon'></i>
            </a>

            <header id="header" class="header-1">
                <nav class="nav nav-container" >
                    <a href=# class="nav-logo"> Christimas Gift </a>

                    <div class="nav-itens" id="nav-itens">
                        <ul class="nav-list">
                            <li class="nav-item"><a href="#home" class="nav-link"> Home </a> </li>
                            <li class="nav-item"><a href="#share" class="nav-link"> Share </a> </li>
                            <li class="nav-item"><a href="#decoration" class="nav-link"> Decoration </a> </li>
                            <li class="nav-item"><a href="#accessory" class="nav-link"> Accessory </a> </li>
                            <li class="nav-item"> <i class='bx bxs-toggle-left change-theme' id="theme-button"></i> </li>
                        </ul>
                    </div>

                    <div class="nav-toggle" id="nav-toggle">
                        <i class='bx bx-grid-alt'></i>
                    </div>
                </nav>
            </header>
          
        `


         // !!!! SHOW MENU !!!!!
    const SHOW_MENU = (TOGGLE_ID, NAVEGATION_ID)=>{ 
        const toggle = document.querySelector(TOGGLE_ID);
        const nav = document.querySelector(NAVEGATION_ID);
        
        // VALIDADE THAT VARIABLES EXISTS
        if(toggle && nav){
            toggle.addEventListener('click', ()=>{
                // WE SHOW THAT NAVEGATION MENU
                nav.classList.toggle("show-menu");
            })
        }
    }
    SHOW_MENU('#nav-toggle','#nav-itens')

    // REMOVE MENU MOBILE

    // HERE COLECT THE LINKS THE NAVEGATION
    const NAV_LINK = document.querySelectorAll(".nav-link");
        // HERE WE CREATE A FUNCTION FOR REMOVE THE ID SHOW MENU, IF US CREATE BEFORE
    function ACTION_LINK(){
        const NAV_MENU = document.querySelector("#nav-itens");
        NAV_MENU.classList.remove('show-menu');
    }

        // HERE WE CREATE A LOOP FOR LINKS, AND CREATE A FUNCTION THE CLICK FOR EACH ONE ACTIVATING FUNCTION ACTION_LINK
        NAV_LINK.forEach(n=>n.addEventListener("click", ACTION_LINK))

    

        const themeButton = document.getElementById('theme-button')
        const darkTheme = 'dark-theme'
        const iconTheme = 'bxs-toggle-right'
        
        // Previously selected topic (if user selected)
        const selectedTheme = localStorage.getItem('selected-theme')
        const selectedIcon = localStorage.getItem('selected-icon')
        
        // We obtain the current theme that the interface has by validating the dark-theme class
        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
        const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-toggle-left' : 'bxs-toggle-right'
        
        // We validate if the user previously chose a topic
        if (selectedTheme) {
          // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
          document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
          themeButton.classList[selectedIcon === 'bxs-toggle-left' ? 'add' : 'remove'](iconTheme)
        }
        
        // Activate / deactivate the theme manually with the button
        themeButton.addEventListener('click', () => {
            // Add or remove the dark / icon theme
            document.body.classList.toggle(darkTheme)
            themeButton.classList.toggle(iconTheme)
            // We save the theme and the current icon that the user chose
            localStorage.setItem('selected-theme', getCurrentTheme())
            localStorage.setItem('selected-icon', getCurrentIcon())
        })


        
   
}   