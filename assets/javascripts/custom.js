// Custom javascript code which is run on every page.

var addBanner = function() {
    if (location.hostname.indexOf('staging') != -1) {
        var e = document.createElement('div');
        e.classList.add('env-banner');
        e.innerHTML = 'STAGING';
        document.body.appendChild(e);
    } else if (location.hostname.indexOf('hackher413.com') == -1 && location.hostname.indexOf('hackher-dashboard') == -1) {
        var e = document.createElement('div');
        e.classList.add('env-banner');
        e.innerHTML = 'NON-PROD';
        document.body.appendChild(e);
    }
};


var init = function() {
    // console.log("This is custom javascript run on every pageload.");
    addBanner();
}

window.addEventListener('load', init);
$(document).on('turbolinks:load', init);
