document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.querySelector(".navigation")
    const navToggle = document.querySelector(".nav-control")
    navToggle.addEventListener("click", () => {
        console.log("Hi")
        const visible = navBar.getAttribute("data-visible")
        console.log(visible)
        if (visible === "false") {
            navBar.setAttribute("data-visible", true)
            document.querySelector("body").style.backgroundColor =
                "hsl(0, 0%, 41%)";
            navToggle.style.background = 'url("images/icon-close-menu.svg")'
            navToggle.style.backgroundRepeat = "no-repeat"
            navToggle.setAttribute("aria-expanded",true)
            
        } else {
            navBar.setAttribute("data-visible", false)
            document.querySelector("body").style.backgroundColor =
							"hsl(0, 0%, 98%)";
						navToggle.style.background = 'url("images/icon-menu.svg")';
            navToggle.style.backgroundRepeat = "no-repeat";
             navToggle.setAttribute("aria-expanded", false);
        }
    })
    const dropdownCaption = document.querySelector("#features")
    let clickCounter = 0;

    dropdownCaption.addEventListener("click", () => {
        clickCounter++;
        if (clickCounter%2 == 0) {
            dropdownCaption.children[1].style.display = "none"
            dropdownCaption.children[0].style.transform = "rotate(0deg)";
        } else {
            dropdownCaption.children[1].style.display = "block";
            dropdownCaption.children[0].style.transform = "rotate(180deg)";
        }
    })
    let clickCounter2 = 0
    const dropdownCaption2 = document.querySelector("#company")
    dropdownCaption2.addEventListener("click", () => {
        clickCounter2++;
         if (clickCounter2 % 2 == 0) {
             dropdownCaption2.children[1].style.display = "none";
             dropdownCaption2.children[0].style.transform ="rotate(0deg)"
					} else {
             dropdownCaption2.children[1].style.display = "block";
              dropdownCaption2.children[0].style.transform = "rotate(180deg)";
					}
    })
})
