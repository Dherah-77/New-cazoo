// JavaScript to Change Car Images

const carImages = [
    "./Images.2/Orange-removebg-preview.png",
    "./Images.2/car29-removebg-preview.png",
    "./Images.2/car15-removebg-preview.png",
    "./Images.2/car25-removebg-preview.png",
  ];
  let currentIndex = 0;
  const carImageElement = document.getElementById("carImage");

  setInterval(() => {
    currentIndex = (currentIndex + 1) % carImages.length;
    carImageElement.src = carImages[currentIndex];
  }, 4000); // Change every 4 seconds

  // Scroll Behavior
  const navbar = document.getElementById("navbar");
      let lastScrollTop = 0;
      window.addEventListener("scroll", function () {
        let scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
          navbar.style.transform = "translateY(-100%)"; // scroll down -> hide navbar
        } else {
          navbar.style.transform = "translateY(0)"; // scroll up -> show navbar
        }
        lastScrollTop = scrollTop;
      });

      // Mobile Menu Toggle
      const menuBtn = document.getElementById("menu-btn");
      const closeBtn = document.getElementById("menu-cls");
      const mobileMenu = document.getElementById("mobile-menu");
    
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("hidden");
        menuBtn.classList.add("hidden");
        closeBtn.classList.remove("hidden");
      });
    
      closeBtn.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuBtn.classList.remove("hidden");
        closeBtn.classList.add("hidden");
      });

      const prodBtn = document.getElementById("prdbtn");
      const prodBtn2 = document.getElementById("pordbtn2");
      const prodsctn = document.getElementById("prdsctn");
      const prodcls = document.getElementById("prd-cls");

      // RUN ON DESKTOP & LAPTOP SCREENS
      document.addEventListener("DOMContentLoaded", () => {
        if (window.matchMedia("(min-width: 1024px)").matches) {
          let showTimeout, hideTimeout;

          prodBtn.addEventListener("mouseover", () => {
            clearTimeout(hideTimeout);
            showTimeout = setTimeout(() => {
              prodsctn.classList.remove("hidden");
            }, 400);
          });

          prodBtn.addEventListener("mouseout", () => {
            clearTimeout(showTimeout);
            hideTimeout = setTimeout(() => {
              prodsctn.classList.add("hidden");
            }, 400);
          });

          prodsctn.addEventListener("mouseover", () => {
            clearTimeout(hideTimeout);
          });

          prodsctn.addEventListener("mouseout", () => {
            hideTimeout = setTimeout(() => {
              prodsctn.classList.add("hidden");
            }, 400);
          });
        } else { //MOBILE SCREENS
          prodBtn2.addEventListener("click",() => {
            mobileMenu.classList.add("hidden");
            prodsctn.classList.remove("hidden");
          });
          
          prodcls.addEventListener("click",() => {
            prodsctn.classList.add("hidden");
          });
    
          prodBtn2.addEventListener("click", () => {
            menuBtn.classList.remove("hidden");
            closeBtn.classList.add("hidden");
          });}
      });

      // MOBILE CLOSE PRODUCTS 
      window.addEventListener("scroll", () => {
        if (window.scrollY < 300) {
          prodcls.classList.remove("hidden");
        } else {
          prodcls.classList.add("hidden");
        }
      });

      // About Us Section
      const abtBtn = document.getElementById("abtbtn");
      const abtBtn2 = document.getElementById("abt-btn");
      const abtsctn = document.getElementById("Aboutus");
      const clsAbt = document.getElementById("abt-cls");

        // RUN ON LAPTOP & DESKTOP SCREENS
        document.addEventListener("DOMContentLoaded", () =>{
          if (
            window.matchMedia("(min-width: 1024px)").matches
          ) {
            let showTimeout, hideTimeout;
    
            abtBtn.addEventListener("mouseover", () => {
              clearTimeout(hideTimeout);
              showTimeout = setTimeout(() => {
                abtsctn.classList.remove("hidden");
              }, 400);
            });
    
            abtBtn.addEventListener("mouseout", () => {
              clearTimeout(showTimeout);
              hideTimeout = setTimeout(() => {
                abtsctn.classList.add("hidden");
              }, 400);
            });
    
            abtsctn.addEventListener("mouseover", () => {
              clearTimeout(hideTimeout);
            });
    
            abtsctn.addEventListener("mouseout", () => {
              hideTimeout = setTimeout(() => {
                abtsctn.classList.add("hidden");
              }, 400);
            });
          } else { //MOBILE SCREENS
            abtBtn2.addEventListener("click",() => {
              mobileMenu.classList.add("hidden");
              abtsctn.classList.remove("hidden");
            });
            
            clsAbt.addEventListener("click",() => {
              abtsctn.classList.add("hidden");
            });
      
            abtBtn2.addEventListener("click", () => {
              menuBtn.classList.remove("hidden");
              closeBtn.classList.add("hidden");
            });
          }
        });

      // Back to Top Button
      const backToTop = document.getElementById("backToTop");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          backToTop.classList.remove("hidden");
        } else {
          backToTop.classList.add("hidden");
        }
      });
      backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });