$(document).ready(function () {
    // typing animation
    (function ($) {
        $.fn.writeText = function (content) {
            var contentArray = content.split(""),
                current = 0,
                elem = this;
            setInterval(function () {
                if (current < contentArray.length) {
                    elem.text(elem.text() + contentArray[current++]);
                }
            }, 80);
        };

    })(jQuery);

     // input text for typing animation 0
     $("#holder").writeText("PROGRAMMER. ENTREPRENEUR.");

    new WOW().init();

    // wait until screen is over skills section before doing animation
    var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true)
        $('.skillbar').each(function () {
            $(this).find('.skillbar-bar').animate({
                width: $(this).attr('data-percent')
            }, 2500);
        });
    }, { threshold: [0] });
    
    observer.observe(document.querySelector("#skillbar"));
});