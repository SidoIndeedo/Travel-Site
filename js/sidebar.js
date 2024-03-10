function toggleGrayScale() {
  var buttons = document.querySelectorAll('.basic-content');

  buttons.forEach(function(btn) {
    var img = btn.querySelector('.basic-icon');

    // Check if the clicked button is the same as the current button in the loop
    if (btn === event.currentTarget) {
      // Toggle the 'highlighted1' class for the image associated with the clicked button
      if (img.classList.contains('highlighted1')) {
        img.classList.remove('highlighted1');
      } else {
        img.classList.add('highlighted1');
      }
    } else {
      // If the button is not the clicked one, remove the 'highlighted1' class from its associated image
      img.classList.remove('highlighted1');
    }
  });
}

