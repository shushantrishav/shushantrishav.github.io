document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const submitBtn = form.querySelector(".submit-btn");

  const getFormData = () => ({
    name: form.name.value.trim(),
    from_email: form.email.value.trim(),
    subject: form.subject.value.trim(),
    message: form.message.value.trim(),
  });

  const validateFormData = (data) => {
    return Object.values(data).every(value => value !== "");
  };

  const showToast = (message, type = "success") => {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.className = `toast show ${type}`;

    setTimeout(() => {
      toast.className = "toast";
    }, 3000);
  };

  const toggleButtonState = (isDisabled, text) => {
    submitBtn.disabled = isDisabled;
    submitBtn.textContent = text;
  };

  const sendContactData = async (data) => {
    try {
      const response = await fetch("https://contactsync-ua7b.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if (response.ok) {
        showToast(result.message || "Message sent!", "success");
        form.reset();
      } else {
        showToast(result.message || "Something went wrong.", "error");
        console.error("Server error:", result);
      }
    } catch (error) {
      showToast("Failed to send message. Check your connection.", "error");
      console.error("Network error:", error);
    }
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = getFormData();

    if (!validateFormData(data)) {
      showToast("Please fill in all fields.", "error");
      return;
    }

    toggleButtonState(true, "Sending...");
    await sendContactData(data);
    toggleButtonState(false, "Send Message");
  });
});
