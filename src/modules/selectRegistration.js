const selectRegistration = () => {
    const signUp = document.querySelector('.popup-sign-up'),
        signIn = document.querySelector('.popup-sign-in'),
        signUpBtn = document.querySelector('.popup-button-sign-up'),
        signInBtn = document.querySelector('.popup-button-sign-in');
    const getSignIn = () => {
        signUp.classList.remove('active');
        signIn.classList.add('active');
        signInBtn.classList.remove('active');
        signUpBtn.classList.add('active');
    };
    const getSignUp = () => {
        signIn.classList.remove('active');
        signUp.classList.add('active');
        signUpBtn.classList.remove('active');
        signInBtn.classList.add('active');
    };
    document.addEventListener('click', (e) => {
        if (e.target.matches('.popup-button-sign-in')) {
            getSignIn();
        }
        if (e.target.matches('.popup-button-sign-up')) {
            getSignUp();
        }
    });
};

export default selectRegistration;