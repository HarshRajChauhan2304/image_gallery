
    // List of image URLs
    const images = [
      "imag1.jpeg",
      "imag2.jpeg",
      "imag3.jpeg",
      "imag4.jpeg",
      "imag5.jpeg"
    ];

    let modal = document.getElementById("modal");
    let modalImage = document.getElementById("modal-image");
    let caption = document.getElementById("caption");
    let currentIndex = 0; // Keeps track of the current image index

    // Function to open the modal and display the selected image
    function openModal(index) {
      currentIndex = index;
      modal.style.display = "block";
      modalImage.src = images[currentIndex];
      caption.innerHTML = "Image " + (currentIndex + 1);
    }

    // Function to close the modal
    function closeModal() {
      modal.style.display = "none";
    }

    // Function to change the image (prev/next)
    function changeImage(direction) {
      currentIndex += direction;
      if (currentIndex < 0) currentIndex = images.length - 1;
      if (currentIndex >= images.length) currentIndex = 0;

      modalImage.src = images[currentIndex];
      caption.innerHTML = "Image " + (currentIndex + 1);
    }

    // Close modal if clicked outside the image
    window.onclick = function(event) {
      if (event.target === modal) {
        closeModal();
      }
    };
  
