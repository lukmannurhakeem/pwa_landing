let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const installButton = document.getElementById('installButton');
  if (installButton) installButton.style.display = 'inline-flex';

  installButton.addEventListener('click', async () => {
    installButton.style.display = 'none';
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    deferredPrompt = null;
  });
});

window.addEventListener('appinstalled', () => {
  console.log('✅ PWA installed successfully!');
  const installButton = document.getElementById('installButton');
  if (installButton) installButton.style.display = 'none';
});
