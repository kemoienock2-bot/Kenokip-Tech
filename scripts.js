const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
      });

      if (res.ok) {
        form.reset();
        document.getElementById("form-success").style.display = "block";
      } else {
        throw new Error();
      }
    } catch {
      document.getElementById("form-error").style.display = "block";
    }
  });
}
