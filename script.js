document.addEventListener("DOMContentLoaded", function () {
    const colors = [
      "#00a3de",
      "#b6b6b6",
      "#003157",
      "#d00170",
      "#fcd241",
      "#e97722",
      "#ef3240",
    ];
  
    const colorsContainer = document.querySelector(".colors");
    const colorOverlay = document.querySelector(".color-overlay");
    const fileInput = document.getElementById("upload");
    const logoPreview = document.getElementById("logo-preview");
    const uploadButtonText = document.querySelector(".upload-button span:last-child");
  
    colors.forEach((color) => {
      const colorElement = document.createElement("span");
      colorElement.classList.add("color");
      colorElement.style.backgroundColor = color;
      
      if (color === "#00a3de") {
        colorElement.classList.add("selected");
      }
  
      colorElement.addEventListener("click", () => {
        document.querySelectorAll(".color").forEach((el) => 
          el.classList.remove("selected")
        );
        colorElement.classList.add("selected");
        colorOverlay.style.backgroundColor = color;
        document.querySelector(".upload-button").style.backgroundColor = color;
      });
  
      colorsContainer.appendChild(colorElement);
    });
  
    // Handle file upload
    fileInput.addEventListener("change", function(e) {
      const file = e.target.files[0];
      
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          alert("File size must be less than 5MB");
          fileInput.value = "";
          uploadButtonText.textContent = "UPLOAD LOGO";
          return;
        }
  
        if (!file.type.match('image/png') && !file.type.match('image/jpeg')) {
          alert("Only PNG and JPG files are allowed");
          fileInput.value = "";
          uploadButtonText.textContent = "UPLOAD LOGO";
          return;
        }
  
        const reader = new FileReader();
        
        reader.onload = function(event) {
          logoPreview.src = event.target.result;
          logoPreview.style.display = "block";
          uploadButtonText.textContent = file.name;
        };
  
        reader.readAsDataURL(file);
      } else {
        uploadButtonText.textContent = "UPLOAD LOGO";
        logoPreview.style.display = "none";
      }
    });
  
    document.querySelector(".upload-button").style.backgroundColor = "#00a3de";
  });