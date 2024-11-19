// Mở modal
window.onload = function () {
    const modal = document.getElementById("saleModal");
    const closeBtn = document.querySelector(".close-btn");
    const disableToday = document.getElementById("disableToday");
  
    // Hiển thị modal nếu chưa chọn "Không hiện lại trong hôm nay"
    if (!localStorage.getItem("modalDisabled")) {
      modal.style.display = "block";
    }
  
    // Đóng modal
    closeBtn.onclick = () => {
      modal.style.display = "none";
      if (disableToday.checked) {
        localStorage.setItem("modalDisabled", true);
      }
    };
  
    // Đóng khi click ngoài modal
    window.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };
  };
  