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
    var statusClasses = {
      '0': 'bg-danger',
      '1': 'bg-warning',
      '2': 'bg-warning',
      '3': 'bg-success'
    };
    var typeClasses = {

    };


    jQuery('table.table-bordered.table-hover > tbody > tr').each(function () {
      var trEl = $(this),
        statusEl = trEl.find('td').eq(2),
        typeEl = trEl.find('td').eq(0);

      var statusClass = statusClasses[parseInt(statusEl.text())];
      if (statusClass) {
        statusEl.addClass(statusClass);
      }

      var typeClass = typeClasses[parseInt(typeEl.text())];
      if (typeClass) {
        typeEl.addClass(typeClass);
      }


    });

  });
};