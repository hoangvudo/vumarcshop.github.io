  const spinner = document.getElementById("spinner");

  function showSpinner() {
    spinner.style.display = "block"; // Hiển thị spinner
  }

  function hideSpinner() {
    spinner.style.display = "none"; // Ẩn spinner
  }

  // Giả lập một quá trình tải
  function loadContent() {
    showSpinner(); // Hiển thị spinner khi bắt đầu tải
    setTimeout(() => {
      hideSpinner(); // Ẩn spinner sau khi tải xong
      alert("Nội dung đã tải xong!");
    }, 3000); // Giả lập thời gian tải là 3 giây
  }

  // Gọi hàm khi trang bắt đầu tải
  window.onload = loadContent;
