
<!--I NEED TO RETHINK THIS LOGOUT THING-->
<script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAKAvtSqE25LzqCWv4PzPlHuC9a-UadF7U",
    authDomain: "studyswapwebsite.firebaseapp.com",
    databaseURL: "https://studyswapwebsite.firebaseio.com",
    projectId: "studyswapwebsite",
    storageBucket: "studyswapwebsite.appspot.com",
    messagingSenderId: "271728404472"
  };
  firebase.initializeApp(config);
</script>


<!--<?php
	session_start();
	session_destroy();
	echo 'You have been logged out. <a href="index.php">Go back</a>';
?>-->