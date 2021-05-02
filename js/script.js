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
        html += "<img src='images/Infinity-1s-200px.svg'></div>";
        insertHtml(selector, html);
    };

    var loadSnippet = function (snipname) {
        showLoading('.main-content');
        $ajaxUtils.sendGetRequest('./snippets/' + snipname + '.html', (restext) => {
            insertHtml('.main-content', restext);
        }, false)
    }
})(window);