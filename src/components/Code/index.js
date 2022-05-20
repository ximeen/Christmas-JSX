
      export function Script(){
        
        // SHOW ARROW TO UP

        function SCROLL_TOP(){
            const SCROLL_TOP = document.querySelector("#scroll-top");
                if(this.scrollY >= 500){
                    SCROLL_TOP.classList.add("show-scroll");
                }else{
                    SCROLL_TOP.classList.remove("show-scroll");
                }
        }
        window.addEventListener('scroll', SCROLL_TOP)


        


        const sections = document.querySelectorAll('section[id]')

        function scrollActive(){
            const scrollY = window.pageYOffset
        
            sections.forEach(current =>{
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute('id')
        
                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    document.querySelector('.nav-itens a[href*=' + sectionId + ']').classList.add('active-link')
                }else{
                    document.querySelector('.nav-itens a[href*=' + sectionId + ']').classList.remove('active-link')
                }
            })
        }
        window.addEventListener('scroll', scrollActive)
    
      }
    