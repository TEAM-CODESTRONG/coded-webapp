// Listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        setupUI(user);
    } else {
        setupUI();
    }
});

// Signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // Signup the user
    auth.createUserWithEmailAndPassword(email, password);
});

// Logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});