
    let offset = 50;
    let navbarBg = document.querySelector("nav");
    window.addEventListener("scroll", ()=> {
        if(pageYOffset > offset){
            navbarBg.classList.add('navbar-bg')
        }
        else{
            navbarBg.classList.remove('navbar-bg');
        }
        });
    

        let navMenuClick = document.querySelector("#navMenuButton");
        navMenuClick.addEventListener('click',function(){
            $("nav").toggleClass("navbar-bgg");
        })



// $(document).ready(function () {

//     $("#navMenuButton").click(function () {
//         let checkit = $(this).attr("aria-controls");

//         if (checkit === "true") {
//             $("nav").css({
//                 "background":"transparent",
//             })
          
//             $("#logoB").css({
//                 "display": "none",
//             });
//             $("#logo").css("display", "block");
//             $(this).attr("aria-controls", "false");

//         } else {
//             $("nav").css({
//                 "background-color":"rgba(0,0,0,.4)"
//             })
          
//             $("#logo").css("display", "none");
//             $("#logoB").css({
//                 "display": "flex"
//             });
//             $(this).attr("aria-controls", "true");
//         }
//     })
// });