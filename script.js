flatpickr("#datePicker", {
  inline: true,
  mode: "range",
  minDate: "today",
  disable: [
    { from: "2025-05-14", to: "2025-05-16" },
    { from: "2025-05-20", to: "2025-05-22" }
  ],
  onClose: function(selectedDates) {
    if (selectedDates.length === 2) {
      const nights = Math.round((selectedDates[1] - selectedDates[0]) / (1000 * 60 * 60 * 24));
      document.getElementById("paypalNights").value = nights;
      document.getElementById("paypalAmount").value = nights * 190;
    }
  }
});
