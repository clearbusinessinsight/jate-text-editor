const butInstall = document.getElementById('buttonInstall');
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('hit')
    console.log("event" + event)

    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    console.log(promptEvent)
    if (!promptEvent) {
        return;
    };
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    // Clear prompt
     console.log('install hit')
    window.deferredPrompt = null;
}); 

