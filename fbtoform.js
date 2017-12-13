(function(){
  var newscript = document.createElement('script');
     newscript.type = 'text/javascript';
     newscript.async = true;
     newscript.src = 'https://www.gstatic.com/firebasejs/3.0.2/firebase.js';
  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);
})();

_setFormData = function setFormData (sel, data) {
  console.info('setting form to data', data);
  var inputList = document.querySelectorAll(sel + ' [name]');
  [].forEach.call(inputList, function(input) {
      console.log(input);
      if (data[input.name] && data[input.name] !== "undefined") {
        input.value = data[input.name];
      }
  });
};
var _fb;
var _fb2;
var _fb3;
var fbToForm = function fbToForm (key, sel) 
{
    var config = config ||
     {
    apiKey: "AIzaSyAKAvtSqE25LzqCWv4PzPlHuC9a-UadF7U",
    authDomain: "studyswapwebsite.firebaseapp.com",
    databaseURL: "https://studyswapwebsite.firebaseio.com",
    projectId: "studyswapwebsite",
    storageBucket: "studyswapwebsite.appspot.com",
    messagingSenderId: "271728404472"
    };
    _fb = _fb && _fb.name === "fbToForm" ? _fb : firebase.initializeApp(config, "fbToForm");
    _fb.database().ref('books/' + key).on('value', function(snapshot) 
    {
        _setFormData(sel, snapshot.val());
    });

     _fb2 = _fb2 && _fb2.name === "fbToForm" ? _fb2 : firebase.initializeApp(config, "fbToForm");
    _fb2.database().ref('contactInfo/' + key).on('value', function(snapshot) 
    {
        _setFormData(sel, snapshot.val());
    });

     _fb3 = _fb3 && _fb3.name === "fbToForm" ? _fb3 : firebase.initializeApp(config, "fbToForm");
    _fb3.database().ref('users/' + key).on('value', function(snapshot) 
    {
        _setFormData(sel, snapshot.val());
    });
};
