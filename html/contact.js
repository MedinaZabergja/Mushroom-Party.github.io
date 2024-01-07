function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validate form data
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const mailtoLink = `mailto:medina.zabergja@umib.net?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(
    name
  )}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(
    message
  )}`;



   window.open(mailtoLink, "_blank");
}
