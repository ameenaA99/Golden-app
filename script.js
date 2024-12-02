// تسجيل الدخول الوهمي
document.getElementById("login-button").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "test@test.com" && password === "1234") {
    alert("تم تسجيل الدخول بنجاح!");
    window.location.href = "profile.html"; // الانتقال إلى صفحة الملف الشخصي
  } else {
    alert("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
  }
});

// تحديث الصورة الشخصية (في صفحة الملف الشخصي)
const uploadInput = document.getElementById("upload-picture");
if (uploadInput) {
  uploadInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("profile-picture").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}

// تسجيل الخروج
const logoutButton = document.getElementById("logout-button");
if (logoutButton) {
  logoutButton.addEventListener("click", function () {
    alert("تم تسجيل الخروج.");
    window.location.href = "index.html";
  });
}
