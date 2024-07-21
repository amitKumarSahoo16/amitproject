document.getElementById('toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    updateModeText();
});

document.getElementById('dark').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    updateModeText();
});