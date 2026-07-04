// Typed.js for dynamic text animation
var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "Web Developer", "UI/UX Designer", "MERN Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Add a class to the header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        subject: form.subject.value,
        message: form.message.value
    };

    try {
        const response = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.success) {
            alert("Message Sent Successfully!");
            form.reset();
        } else {
            alert("Failed to send message.");
        }
    } catch (error) {
        console.error(error);
        alert("Server error. Make sure your backend is running.");
    }
});