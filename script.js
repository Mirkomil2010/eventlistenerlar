// 1 - savol
let count = localStorage.getItem("count") ? parseInt(localStorage.getItem("count")) : 0;
document.getElementById("count").innerText = count;

document.getElementById("clickBtn").addEventListener("click", function () {
    count++;
    localStorage.setItem("count", count);
    document.getElementById("count").innerText = count;
});
// 2-savol
const savedName = localStorage.getItem("name");
if (savedName) {
    document.getElementById("savedName").innerText = savedName;
    document.getElementById("nameInput").value = savedName;
}
else {
    document.getElementById("savedName").innerText = "Hech narsa saqlanmagan";
    document.getElementById("saveBtn").addEventListener("click", function () {
        const name = document.getElementById("nameInput").value;
        localStorage.setItem("name", name);
        document.getElementById("savedName").innerText = name;
    });

    // 3 - savol
    document.getElementById("myForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("formMessage");

        if (!name || !email) {
            message.textContent = "Barcha maydonlarni toldiring";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            message.textContent = "Email notogri!";
            return;
        }

        message.textContent = "Muvaffaqiyatli bajarildi";
        document.getElementById("myForm").reset();
    });

    // 4 - savol
    const box = document.getElementById("box");
    const coords = document.getElementById("coords");

    box.addEventListener("mousemove", function (e) {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        coords.textContent = `X: ${x}, Y: ${y}`;
    });

    box.addEventListener("mouseleave", function () {
        coords.textContent = "Tashqaridaman";
    });

    // 5-savol
    const message = document.getElementById("message");

    const texts = {
        uz: "Salom, xush kelibsiz!",
        en: "Hello, welcome!"
    };

    const savedLang = localStorage.getItem("lang");

    if (savedLang) {
        message.textContent = texts[savedLang];
    } else {
        message.textContent = texts.uz;
    }

    document.getElementById("uzBtn").addEventListener("click", () => {
        message.textContent = texts.uz;
        localStorage.setItem("lang", "uz");
    });

    document.getElementById("enBtn").addEventListener("click", () => {
        message.textContent = texts.en;
        localStorage.setItem("lang", "en");
    });
}
