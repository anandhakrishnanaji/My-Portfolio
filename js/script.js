$(function () { // Same as document.addEventListener("DOMContentLoaded"...

    // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
    $("#navbarToggle").blur(function (event) {
      var screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        $("#navbarSupportedContent").collapse('hide');
      }
    });
  
    // In Firefox and Safari, the click event doesn't retain the focus
    // on the clicked button. Therefore, the blur event will not fire on
    // user clicking somewhere else in the page and the blur event handler
    // which is set up above will not be called.
    // Refer to issue #28 in the repo.
    // Solution: force focus on the element that the click event fired on
    $("#navbarToggle").click(function (event) {
      $(event.target).focus();
    });
  });

(function (global) {
    var active_id = "home";
    var pages = ["home", "skills", "projects", "contact"];

    pages.forEach(element => {
        document.getElementById(element).addEventListener('click', () => {
            if (active_id !== element) {
                console.log('ko');
                document.getElementById(active_id).classList.remove('active')
                document.getElementById(element).classList.add('active');
                loadSnippet(element);
                active_id=element;
            }
        });
    });

    var insertHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    var showLoading = function (selector) {
        var html = "<div class='text-center'>";
        html += "<img src='images/Infinity-1s-200px.svg' height=100px width=100px></div>";
        insertHtml(selector, html);
    };

    var loadSnippet = function (snipname) {
        showLoading('.main-content');
        $ajaxUtils.sendGetRequest('./snippets/' + snipname + '.html', (restext) => {
            insertHtml('.main-content', restext);
        }, false)
    }
})(window);