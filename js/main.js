$( document ).ready(function() {
    //collapse menu
    new jQueryCollapse($("nav.menu"), {
        query: '.toggle-menu',
        open: function() {
            this.slideDown(200);
        },
        close: function() {
            this.slideUp(150);
        },
    });
    
    //collapse guiding notes
    new jQueryCollapse($("html.standards .guiding-notes"), {
        query: 'h3',
        open: function() {
            this.slideDown(200);
        },
        close: function() {
            this.slideUp(150);
        },
    });
});
