// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcYwibruZQGBcqwsbxQZNRDDbw6FpzJrM",
    authDomain: "spck-jsi08.firebaseapp.com",
    projectId: "spck-jsi08",
    storageBucket: "spck-jsi08.appspot.com",
    messagingSenderId: "145356171401",
    appId: "1:145356171401:web:9b813ea03c5ed60931fe58",
    measurementId: "G-GJVVPCFS57"
  };

// Define an array to store user objects
let users = [];

// Function to create a new user object
function createUser(name, email, age) {
    return {
        name: name,
        email: email,                                                                              
        age: age
    };
}

// Add a new user to the array
function addUser(name, email, age) {
    users.push(createUser(name, email, age));
}


// Sign in with email and password
function signIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log("Signed in:", user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Sign in error:", errorCode, errorMessage);
        });
}


// Sign in with Google
function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // Signed in
            var user = result.user;
            console.log("Signed in with Google:", user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Sign in with Google error:", errorCode, errorMessage);
        });
}

// Sign in with Facebook
function signInWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // Signed in
            var user = result.user;
            console.log("Signed in with Facebook:", user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Sign in with Facebook error:", errorCode, errorMessage);
        });
}

// Sign in with phone number and verification
function signInWithPhoneNumber(phoneNumber, appVerifier) {
    const provider = new firebase.auth.PhoneAuthProvider();

    // The verify() method needs this below parameter.
    provider.verify(phoneNumber, appVerifier)
        .then((credential) => {
            // Signed in
            var user = credential.user;
            console.log("Signed in with phone number:", user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Sign in with phone number error:", errorCode, errorMessage);
        });
}


// Firebase authentication state change listener
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;

        console.log("User signed in:", displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData);
    } else {
        // User is signed out
        console.log("User signed out");
    }
});

