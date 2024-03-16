function saveUser(username, email, password) {
    const user = {
        username,
        email,
        password
    };
    localStorage.setItem(username, JSON.stringify(user));
}

function checkUser(username, password) {
    const user = localStorage.getItem(username);
    if (!user) {
        return false;
    }
    const userDetails = JSON.parse(user);
    return userDetails.password === password;
}

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;
            if (checkUser(username, password)) {
                alert("Đăng nhập thành công!");
            } else {
                alert("Tên đăng nhập hoặc mật khẩu không đúng.");
                window.location.href = 'index.html';
            }
        });
    }

    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("registerUsername").value;
            const email = document.getElementById("registerEmail").value;
            const password = document.getElementById("registerPassword").value;
            if (localStorage.getItem(username)) {
                alert("Tên đăng nhập đã tồn tại!");
            } else {
                saveUser(username, email, password);
                alert("Đăng ký thành công!");
                window.location.href = 'đăngnhập.html';
            }
        });
    }
});