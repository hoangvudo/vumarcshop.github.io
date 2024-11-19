// JavaScript validation for login formfunction validateLoginForm() {
    function validateLoginForm() {
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;
        
        // Kiểm tra email và mật khẩu không để trống
        if (email === "") {
            alert("Vui lòng nhập email hoặc số điện thoại.");
            return false; // Ngăn form gửi đi
        }
        if (password === "") {
            alert("Vui lòng nhập mật khẩu.");
            return false; // Ngăn form gửi đi
        }
    
        // Nếu hợp lệ, chuyển hướng đến trang index
        window.location.href = "index.html"; // Thay URL "index.html" bằng URL trang chính của bạn
        return false; // Ngăn hành vi mặc định của form
    }
    


// JavaScript validation for sign-up form
function validateSignUpForm() {
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    
    if (name === "") {
        alert("Vui lòng nhập họ và tên.");
        return false;
    }
    if (email === "") {
        alert("Vui lòng nhập email.");
        return false;
    }
    if (password === "") {
        alert("Vui lòng tạo mật khẩu.");
        return false;
    }
    return true;
}