const preloader = () => {
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (!preloader.classList.contains('done')) {
                preloader.classList.add('done');
            }
        }, 500);
    });
};

export default preloader;