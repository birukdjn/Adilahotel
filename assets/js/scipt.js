document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('collapsed'); 
});
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
}
function collapseSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar.classList.contains('collapsed')) {
        sidebar.classList.add('collapsed');
    }
}

  
  document.getElementById('bookingForm').addEventListener('submit', function(event) {
    // Validate phone number
    var phone = document.getElementById('phone').value;
    var phonePattern = /^\+2519\d{8}|\+2517\d{8}$/;
    if (!phone.match(phonePattern) || phone.length !== 13) {
      alert("Please enter a valid phone number starting with +2519 or +2517 and 13 characters long.");
      event.preventDefault();  // Prevent form submission
      return;
    }

    // Validate email format
    var email = document.getElementById('email').value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
      return;
    }

    // Validate ID file format (photo or pdf)
    var id = document.getElementById('id').files[0];
    if (id) {
      var allowedExtensions = ['image/jpeg', 'image/png', 'application/pdf'];
      if (!allowedExtensions.includes(id.type)) {
        alert("Please upload a valid photo (JPEG/PNG) or PDF.");
        event.preventDefault();
        return;
      }
    } else {
      alert("Please upload your ID (photo or PDF).");
      event.preventDefault();
      return;
    }

    // Validate check-in date is greater than or equal to today
    var checkin = new Date(document.getElementById('checkin').value);
    var today = new Date();
    today.setHours(0, 0, 0, 0);  // Reset time for today's date
    if (checkin < today) {
      alert("Check-in date must be today or later.");
      event.preventDefault();
      return;
    }

    // Validate check-out date is after check-in date
    var checkout = new Date(document.getElementById('checkout').value);
    if (checkout <= checkin) {
      alert("Check-out date must be later than check-in date.");
      event.preventDefault();
      return;
    }
  });