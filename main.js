let btnMenu = document.querySelector('.toggle-icon i');
let menu = document.querySelector('.sidebar-wrapper');
let closeBtn = document.querySelector('.close-menu i');
let switcherBtn = document.querySelector('.switcher-icon i');
let switcherContainer = document.querySelector('.switcher-container');
let switcherClose = document.querySelector('.switcher-close i');

//Function add Class
function addClass(button, containerName, className) {
    button.addEventListener('click', () => {
        containerName.classList.add(className);
    });
}

//Function remove Class
function removeClass(button, containerName, className) {
    button.addEventListener('click', () => {
        containerName.classList.remove(className);
    });
}

addClass(btnMenu, menu, 'active');
removeClass(closeBtn, menu, 'active');
addClass(switcherBtn, switcherContainer, 'open');
removeClass(switcherClose, switcherContainer, 'open');

//Change Color
let colorsBtn = document.querySelectorAll('.switcher-body ul li');

colorsBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        colorsBtn.forEach((btn) => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');
        if (e.target.dataset.color === "#212529") {
            document.documentElement.style.setProperty('--lightGray', e.target.dataset.color);
            document.documentElement.style.setProperty('--whiteColor', '#2b3035');
            document.documentElement.style.setProperty('--textColor', '#9ca2a8');
            //Set Colors in local storage
            let colors = [e.target.dataset.color, '#2b3035', '#9ca2a8'];
            localStorage.setItem("colors-options", JSON.stringify(colors));
        } else {
            document.documentElement.style.setProperty('--lightGray', e.target.dataset.color);
            document.documentElement.style.setProperty('--whiteColor', '#ffffff');
            document.documentElement.style.setProperty('--textColor', '#4c5258');
            //Set Colors in local storage
            let colors = [e.target.dataset.color, '#ffffff', '#4c5258'];
            localStorage.setItem("colors-options", JSON.stringify(colors));
        }
    });
});

//Read Colors From LocalStorage
let colorsStorage = JSON.parse(localStorage.getItem('colors-options'));
//Check If Local Storage is not empty
if (colorsStorage !== null) {
    document.documentElement.style.setProperty('--lightGray', colorsStorage[0]);
    document.documentElement.style.setProperty('--whiteColor', colorsStorage[1]);
    document.documentElement.style.setProperty('--textColor', colorsStorage[2]);
}


//function nymber cards
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue +=1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

    // hadi  menu sibebar ki yethrk bi color
    const allSideMenu = document.querySelectorAll('.sidebar-wrapper nav ul li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});





//lien entre les page 
// Get references to the sidebar links and main content sections
const sidebarLinks = document.querySelectorAll('nav a');
const mainSections = document.querySelectorAll('.main section');

// Loop through each sidebar link and add a click event listener
sidebarLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Prevent the default link behavior
    event.preventDefault();
    
    // Get the ID of the section to show based on the link's href attribute
    const sectionId = link.getAttribute('href');
    
    // Loop through each main content section
    mainSections.forEach((section) => {
      // If the section has the same ID as the one we want to show, display it
      if (section.getAttribute('id') === sectionId.substring(1)) {
        section.style.display = 'block';
      } else {
        // Otherwise, hide it
        section.style.display = 'none';
      }
    });
  });
});
//dropdwn fom instution

    const select = document.querySelector(".selectinst");
    const options_list = document.querySelector(".options-list");
    const options = document.querySelectorAll(".option");

    //show & hide options list
    select.addEventListener("click", () => {
      options_list.classList.toggle("active");
      select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
    });

    //select option
    options.forEach((option) => {
      option.addEventListener("click", () => {
        options.forEach((option) => {option.classList.remove('selected')});
        select.querySelector("span").innerHTML = option.innerHTML;
        option.classList.add("selected");
        options_list.classList.toggle("active");
        select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
      });
    });
    
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });




    function menuToggle() {
      const toggleMenu = document.querySelector(".dropdown-menu4");
      toggleMenu.classList.toggle("active");
    
      // Check if menu is active or not
      if (toggleMenu.classList.contains("active")) {
        // if menu is active, hide it when action link is clicked again
        document.querySelector(".action a").addEventListener("click", function () {
          toggleMenu.classList.remove("active");
        });
      } else {
        // if menu is not active, adjust size and position
        toggleMenu.style.top = "80px";
        toggleMenu.style.height = "auto";
        toggleMenu.style.bottom = "unset";
      }
    }
    
    
    
    
    
    
          
      const sidebarLinks2 = document.querySelectorAll('.action a');
      const mainSections2 = document.querySelectorAll('.main section');
      
      // Loop through each sidebar link and add a click event listener
      sidebarLinks2.forEach((link) => {
        link.addEventListener('click', (event) => {
          // Prevent the default link behavior
          event.preventDefault();
          
          // Get the ID of the section to show based on the link's href attribute
          const sectionId2 = link.getAttribute('href');
          
          // Loop through each main content section
          mainSections2.forEach((section) => {
            // If the section has the same ID as the one we want to show, display it
            if (section.getAttribute('id') === sectionId2.substring(1)) {
              section.style.display = 'block';
            } else {
              // Otherwise, hide it
              section.style.display = 'none';
            }
          });
        });
      });
    
    
    
    const editProfileBtn = document.getElementById("edit-profile-btn");
    const cancelEditBtn = document.getElementById("cancel-edit-btn");
    const profile = document.querySelector(".profile");
    const editProfile = document.querySelector(".edit-profile");
    
    editProfileBtn.addEventListener("click", () => {
      profile.style.display = "none";
      editProfile.style.display = "block";
    });
    
    cancelEditBtn.addEventListener("click", () => {
      profile.style.display = "block";
      editProfile.style.display = "none";
    });
    
    