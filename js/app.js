// nav starts
const navBtn = document.querySelector("nav button");
const sidebar = document.querySelector('.sidebar')


const sideBarOpen = () => {
    sidebar.classList.add('active')
};

navBtn.addEventListener("click", sideBarOpen);




const cancelBtn = document.querySelector(".cancelBtn");

const closeSidebar = (event) =>{
    if (
      event.target.classList.contains("sidebar") ||
      event.target.classList.contains("cancelBtn")
    ) {

        sidebar.classList.remove("active");
    }
    
}


cancelBtn.addEventListener('click', closeSidebar)
sidebar.addEventListener('click', closeSidebar)
// nav ends
// dark mode
const darkModeBtn = document.querySelector(".darkModeBtn");
const body = document.querySelector('body')
const darkMode = () => {
    body.classList.toggle('darkmode')
}

darkModeBtn.addEventListener('click', darkMode)


// dark mode ends
// mouse cursor
const cursor = document.querySelector('.cursor')
const cursorSm = document.querySelector('.cursorSm')

const customMouseCursor = (event) =>{
    console.log(event.pageX);
    cursor.style.top = `${event.pageY}px`;
    cursor.style.left = `${event.pageX}px`;
    cursorSm.style.top = `${event.pageY}px`;
    cursorSm.style.left = `${event.pageX}px`;
    
}

window.addEventListener("mousemove", customMouseCursor);
// mouse cursor ends