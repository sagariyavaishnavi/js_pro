document.querySelectorAll('.section h2').forEach(sectionHeader => {
    sectionHeader.addEventListener('click', () => {
        const content = sectionHeader.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});