
        // Tab switching
        const tabEmail = document.getElementById('tab-email');
        const tabPhone = document.getElementById('tab-phone');
        const groupEmail = document.getElementById('group-email');
        const groupPhone = document.getElementById('group-phone');

        tabEmail.addEventListener('click', () => {
            tabEmail.classList.add('active');
            tabPhone.classList.remove('active');
            groupEmail.style.display = ''; // Use empty string to revert to CSS default (flex)
            groupPhone.style.display = 'none';
            // Set required attribute based on active tab
            document.getElementById('email').required = true;
            document.getElementById('phone').required = false;
        });

        tabPhone.addEventListener('click', () => {
            tabPhone.classList.add('active');
            tabEmail.classList.remove('active');
            groupPhone.style.display = ''; // Use empty string to revert to CSS default (flex)
            groupEmail.style.display = 'none';
            // Set required attribute based on active tab
            document.getElementById('email').required = false;
            document.getElementById('phone').required = true;
        });

        // Initialize required attribute on page load
        document.addEventListener('DOMContentLoaded', () => {
            if (tabEmail.classList.contains('active')) {
                document.getElementById('email').required = true;
                document.getElementById('phone').required = false;
            } else {
                document.getElementById('email').required = false;
                document.getElementById('phone').required = true;
            }
        });


        // Password toggle
        const togglePw = document.getElementById('toggle-pw');
        const password = document.getElementById('password');
        togglePw.addEventListener('click', () => {
            if (password.type === 'password') {
                password.type = 'text';
                togglePw.innerHTML = '&#128584;'; // Speaking Head emoji
            } else {
                password.type = 'password';
                togglePw.innerHTML = '&#128065;'; // Eye emoji
            }
        });

        // Close modal
        document.getElementById('closeBtn').addEventListener('click', () => {
            // This will hide the modal. In a real application, you might navigate away or close a true modal element.
            // For this example, we'll just hide the container.
            document.querySelector('.login-container').style.display = 'none';
        });

        // Form submit
        document.getElementById('login-form').addEventListener('submit', e => {
            e.preventDefault(); // Prevent actual form submission

            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            const passwordInput = document.getElementById('password');

            if (tabEmail.classList.contains('active')) {
                const email = emailInput.value;
                const password = passwordInput.value;
                // Here you would typically send the email and password to your server for authentication
                alert('Logging in with Email: ' + email + ' and Password: ' + password);
            } else {
                const phone = phoneInput.value;
                const password = passwordInput.value;
                // Here you would typically send the phone and password to your server for authentication
                alert('Logging in with Phone: ' + phone + ' and Password: ' + password);
            }

            // In a real application, you would handle the server response (success/failure)
            // and potentially close the modal or redirect the user.
        });

 