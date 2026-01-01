// Smooth scrolling for navbar links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Contact form validation
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
  const fileInput = form.querySelector('input[type="file"]');
  const file = fileInput.files[0];

  if (file) {
    const allowedTypes = ['application/pdf', 'application/msword', 
                          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                          'image/png', 'image/jpeg'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      alert("Invalid file type. Only PDF, DOC, DOCX, PNG, JPG are allowed.");
      e.preventDefault();
      return false;
    }

    if (file.size > maxSize) {
      alert("File size exceeds 5MB limit.");
      e.preventDefault();
      return false;
    }
  }

  // Optional: Show temporary success message (before redirect)
  const successMessage = document.createElement('p');
  successMessage.textContent = "Message sent successfully!";
  successMessage.style.color = "green";
  successMessage.style.textAlign = "center";
  form.appendChild(successMessage);

  /
