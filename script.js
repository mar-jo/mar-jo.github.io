const copyBtn = document.getElementById("copy-btn");
    copyBtn.addEventListener("click", function() {
    const email = copyBtn.value;
    
    navigator.clipboard.writeText(email).then(function() {
        alertSuccess.style.display = "block";
        setTimeout(function() {
          alertSuccess.style.opacity = "0";
          setTimeout(function() {
            alertSuccess.style.display = "none";
            alertSuccess.style.opacity = "1";
          }, 300);
        }, 2000);
      });
});