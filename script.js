const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });

        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });

        function showSuccessMessage(message) {
            const messageEl = document.getElementById('successMessage');
            messageEl.textContent = message;
            messageEl.classList.add('show');
            
            setTimeout(() => {
                messageEl.classList.remove('show');
            }, 3000);
        }

        function handleLogin(event) {
            event.preventDefault();
            const form = event.target;
            const email = form.querySelector('input[type="email"]').value;
            
            showSuccessMessage(`Welcome back! Logged in as ${email}`);
            form.reset();
        }

        function handleRegister(event) {
            event.preventDefault();
            const form = event.target;
            const username = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            
            showSuccessMessage(`Account created successfully for ${username}!`);
            form.reset();
            container.classList.remove("sign-up-mode");
        }