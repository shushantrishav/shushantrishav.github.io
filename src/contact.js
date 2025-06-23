const form = document.querySelector(".contact-form");
const submitBtn = document.getElementById("contact-submit");

submitBtn.addEventListener("click", async () => {
  const data = {
    name: form.name.value,
    from_email: form.from_email.value,
    subject: form.subject.value,
    message: form.message.value,
  };

  console.log("Submitting data: ", data);

  try {
    const response = await fetch("https://contactsync-ov5o.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      showToast(result.message, "success");
      form.reset();
    } else {
      console.error(result);
      showToast("Something went wrong. Please try again.", "error");
    }
  } catch (err) {
    console.error("Fetch error:", err);
    showToast("Failed to send message. Check your connection.", "error");
  }
});

// Toast function with type
function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  setTimeout(() => {
    toast.className = toast.className.replace("show", "").replace("success", "").replace("error", "");
  }, 3000);
}
