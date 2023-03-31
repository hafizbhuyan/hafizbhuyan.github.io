// $(document).ready(function () {
//     new WOW().init();

//     // wait until screen is over skills section before doing animation
//     var observer = new IntersectionObserver(function(entries) {
//         if(entries[0].isIntersecting === true)
//         $('.skillbar').each(function () {
//             $(this).find('.skillbar-bar').animate({
//                 width: $(this).attr('data-percent')
//             }, 2500);
//         });
//     }, { threshold: [0] });
    
//     observer.observe(document.querySelector("#skillbar"));
// });