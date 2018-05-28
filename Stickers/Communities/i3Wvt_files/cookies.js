/**
 * Javascript Cookies
 * Code from: http://www.w3schools.com/js/js_cookies.asp
 */

var cookies = {
    /**
     * Set a cookie
     * @param {string} cname - name of cookie
     * @param {string} cvalue - value of cookie
     * @param {number} exdays - how many days to keep the cookie. If < 0, delete the cookie. If false, set no expiry (will expire when browswer closed). If undefined, set it to 1 (day)
     * @returns {boolean} true
     */
    setCookie : function (cname, cvalue, exdays) {
        if (typeof exdays === "undefined") {
            exdays = 1;
        }
        if (exdays < 0) {
            return cookies.deleteCookie(cname);
        } else if (exdays !== false) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        } else {
            document.cookie = cname + "=" + cvalue;
        }
        return true;
    },

    /**
     * Retrieve a cookie value
     * @param {string} cname - name of cookie
     * @returns {string}
     */
    getCookie : function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    },


    /**
     * Delete a cookie value
     * @param {string} cname - name of cookie
     * @returns {boolean} true
     */
    deleteCookie: function (cname) {
        if (typeof window.location !== "undefined" && typeof window.location.host !== "undefined") {
            var domain = window.location.host;
            document.cookie = cname + '=; path=/; domain=' + domain + '; expires=' + new Date(0).toUTCString();
            document.cookie = cname + '=; path=/; domain=.' + domain + '; expires=' + new Date(0).toUTCString();
            document.cookie = cname + '=; path=/; domain=www.' + domain + '; expires=' + new Date(0).toUTCString();
        } else {
            document.cookie = cname + '=; expires=' + new Date(0).toUTCString();
        }
        return true;
    },

    /**
     * Check if cookie exists
     * @param {string} cname - name of cookie
     * @returns {boolean} true if exists, else false 
     */
    checkCookie : function (cname) {
        var aCookie = getCookie(cname);
        if (aCookie != "") {
            return true;
        } else {
            return false;
        }
    }
};

