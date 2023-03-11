const activePage = window.location.pathname;
const navlinks = document.querySelectorAll('.navlink').
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active')
        console.log("hello")
    }
});