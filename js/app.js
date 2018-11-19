(function (window) {
  /**
   * @function getHtmlFromStr
   * @description utility function to generate HTML Elemnents from HTML String
   * @params {string} htmlString representing the HTML
   * @returs {Element} HTML Element
   */
  function getHtmlFromStr(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  }

  // loading animation starts
  function loadingStart($el) {
    $el.classList.add('m-loading');
    app.loadingEl = $el;
  }

  // loading animation ends
  function loadingEnd() {
    app.loadingEl.classList.remove('m-loading');
  }

  function sortBy(keyword, arr) {
    var _arr = arr.slice();
    return _arr.sort((a, b) => b[keyword] - a[keyword]);
  }

  function deleteArrItem(arr, index) {
    var _arr = arr.slice();
    _arr.splice(index, 1);
    return _arr;
  }

  localDB = {
    setObj : function(key, obj) {
      localStorage.setItem(key, JSON.stringify(objVal));
    },
    getObj : function(key) {
      return JSON.parse(localStorage.getItem(key));
    }
  };

  // global object to save application data
  store = {};

  window.app  = {
    deleteArrItem,
    getHtmlFromStr,
    loadingStart,
    loadingEnd,
    localDB,
    sortBy,
    store
  }
})(window);