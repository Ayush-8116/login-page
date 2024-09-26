document.querySelector('.login-button').addEventListener('click', () => {
    const userType = document.getElementById('user-type').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation (for demonstration purposes)
    if (email === "" || password === "") {
        alert("Please fill in both email and password.");
        return;
    }

    // You can add further logic here for actual authentication
    console.log(`Logging in as ${userType}`);
    alert(`Logged in as ${userType} with email ${email}`);
});
