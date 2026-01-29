        
    window.onload = () => {
        const modeToggle = document.getElementById('modeToggle');
        const hoverImages = document.querySelectorAll('.hover-image');
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const closeBtn = document.querySelector('.close-btn');
        
        const updateDarkMode = (isDark) => {
            document.body.classList.toggle('dark-mode', isDark);
            modeToggle.textContent = isDark ? '☀️' : '🌙';
            localStorage.setItem('darkMode', isDark);
        };

        const savedMode = localStorage.getItem('darkMode') === 'true';
        if (savedMode) updateDarkMode(true);

        modeToggle.onclick = () => {
            const isDark = document.body.classList.toggle('dark-mode');
            updateDarkMode(isDark);
        };

        hoverImages.forEach(img => {
            img.onmouseover = () => img.src = img.dataset.hover;
            img.onmouseout = () => img.src = img.dataset.original;

            img.onclick = () => {
                modalImg.src = img.dataset.original;
                modal.classList.remove('hidden');
            };
        });

        const closeModal = () => modal.classList.add('hidden');

        closeBtn.onclick = closeModal;

        modal.onclick = (e) => {
            if (e.target === modal) closeModal();
        };
    };