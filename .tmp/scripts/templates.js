define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/genderSelect.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p class="lead">YOU\'RE MAKING A FUCKING BABY?!</p>\n<p><a id="boy-btn" class="btn btn-lg btn-success" href="#">IT\'S A BOY</a></p>\n<p><a id="girl-btn" class="btn btn-lg btn-info" href="#">IT\'S A GIRL</a></p>\n<p><a id="fff-btn" class="btn btn-lg btn-warning" href="#">FUCK GENDER</a></p>\n<div id="nameSelect"></div>\n';

}
return __p
};

this["JST"]["app/scripts/templates/lastNameSelect.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>and its last name?</p>\n<input type="text" value placeholder="it\'d better not have a fucking hyphen" id="lastNameInput" size="36">\n<button type="submit">name that fetus</button>\n';

}
return __p
};

this["JST"]["app/scripts/templates/nameView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'You should name your fucking kid \n\n<p>\n    <h1>' +
((__t = ( firstName )) == null ? '' : __t) +
' ' +
((__t = ( lastName )) == null ? '' : __t) +
'.</h1>\n</p>\n\n<p>\n   <a id="giveMeAnother">SPIT ANOTHER ONE AT ME</a>\n</p>\n';

}
return __p
};

  return this["JST"];

});