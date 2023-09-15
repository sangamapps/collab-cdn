if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/assets/js/sw.js')
        .then(swReg => {
            console.log('service worker registered', swReg);
            swRegistration = swReg;
        })
        .catch(err => console.log('service worker not registered', err));
}