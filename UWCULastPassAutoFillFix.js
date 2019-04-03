// ==UserScript==
// @name           UWCU Lastpass AutoFill Fix
// @namespace      https://github.com/djhowell/UWCULastPassFix
// @description    Changes the password field name so that LastPass can actually do its job
// @include        https://webbranch.uwcu.org/Auth/Login
// @version        0.2
// ==/UserScript==

(function () {
  const formAction = "/Auth/Login";
  var loginform = document.evaluate('//form[contains(@action, "' + formAction + '")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  var inputs = loginform.elements;
  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "password" && inputs[i].className != "hidden") { var passwordField = inputs[i]; }
  }
  passwordField.name = "password";
})();
