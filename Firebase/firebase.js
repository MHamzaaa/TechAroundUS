  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDYxbnJ0dXHxGh-sMR2S19ZooU_ymPQ-FQ",
    authDomain: "auth-6fdd8.firebaseapp.com",
    projectId: "auth-6fdd8",
    storageBucket: "auth-6fdd8.appspot.com",
    messagingSenderId: "929392229076",
    appId: "1:929392229076:web:b40dc4a45cc24ff8fb1941"
  };

  function connectFirebase(auth = false , firestore = false,  storage = false){
      var script = document.createElement('script');
      script.src = "https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js";
      script.id = "firebase-source-script";
      document.body.prepend(script);

      if(auth){
          var script = document.createElement('script');
          script.src = "https://www.gstatic.com/firebasejs/7.15.0/firebase-auth.js";
          document.body.prepend(script);
      }

      if(firestore){
        var script = document.createElement('script');
        script.src = "https://www.gstatic.com/firebasejs/7.15.0/firebase-firestore.js";
        document.body.prepend(script);
    }

    if(storage){
        var script = document.createElement('script');
        script.src = "https://www.gstatic.com/firebasejs/7.15.0/firebase-storage.js";
        document.body.prepend(script);
    }

    document.getElementById('firebase-source-script').addEventListener("load", () => {
        firebase.initializeApp(firebaseConfig);
    })
  }