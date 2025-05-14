fetch("https://yourdomain.com/blocked-dates")
  .then(res => res.json())
  .then(bookedRanges => {
    flatpickr("#datePicker", {
      inline: true,
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
  });
