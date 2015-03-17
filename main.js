// ==UserScript==
// @name        meretz color
// @namespace   meretz
// @description Load variables
// @include     http://p.poliphone.co.il/gl/ed_led*
// @version     1
// ==/UserScript==
// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery() {
  var script = document.createElement("script");
  script.setAttribute("src", "//code.jquery.com/jquery-1.11.2.min.js");
  document.body.appendChild(script);
}

// load jQuery and execute the main function
addJQuery();


setTimeout(main, 1500);


function main() {
  $(document).ready(function () {
    var classes = {
      '0': 'red',
      '1': 'red',
      '2': 'yellow',
      '3': 'green'
    };


    jQuery('table.table-bordered.table-hover > tbody > tr').each(function () {
      var trEl = $(this),
        statusEl = trEl.find('td').eq(2);
      statusEl.css({'background-color': classes[parseInt(statusEl.text())]});

    });

  });
};