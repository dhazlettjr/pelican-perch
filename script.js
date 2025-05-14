// Optional: Add client-side behavior here
console.log("Pelican Perch website loaded.");
const bookedRanges = [
  { from: "2025-05-14", to: "2025-05-16" },
  { from: "2025-05-20", to: "2025-05-22" },
  // Add more date blocks here
];

flatpickr("#datePicker", {
  mode: "range",
  minDate: "today",
  disable: bookedRanges,
  onClose: function(selectedDates) {
    if (selectedDates.length === 2) {
      const nights = Math.round((selectedDates[1] - selectedDates[0]) / (1000 * 60 * 60 * 24));
      document.getElementById("paypalNights").value = nights;
      document.getElementById("paypalAmount").value = nights * 190;
    }
  }
});
