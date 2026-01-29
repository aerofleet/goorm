        
    window.onload = () => {
        const modeToggle = document.getElementById('modeToggle');
        
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            modeToggle.textContent = '☀️';
        }

        modeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                modeToggle.textContent = '☀️';
                localStorage.setItem('darkMode', 'true');
            } else {
                modeToggle.textContent = '🌙';
                localStorage.setItem('darkMode', 'false');
            }
        });

        const hoverImages = document.querySelectorAll('.hover-image');
        
        hoverImages.forEach(image => {
            image.addEventListener('mouseover', function() {
                this.src = this.getAttribute('data-hover');
            });

            image.addEventListener('mouseout', function() {
                this.src = this.getAttribute('data-original');
            });
        });



    };