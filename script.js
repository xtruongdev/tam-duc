const menuButton = document.querySelector(".mobile-menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
document.querySelectorAll(".nav-menu #nav-item").forEach((item) => {
  if (window.location.href === item.href) {
    item.classList.add("nav-item-select");
  } else {
    item.classList.remove("nav-item-select");
  }
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
function animateNumber(elementId, targetNumber, duration, suffix = "") {
  const element = document.getElementById(elementId);
  const startNumber = 0;
  const startTime = Date.now();

  function formatNumber(number) {
    return new Intl.NumberFormat("vi-VN").format(number);
  }

  function updateNumber() {
    const elapsedTime = Date.now() - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    const currentNumber = Math.floor(progress * targetNumber);

    element.innerText = formatNumber(currentNumber) + suffix;

    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }
  }

  updateNumber();
}

// Bắt đầu hiệu ứng khi trang tải xong
window.onload = function () {
  animateNumber("prize1", 10, 500, "+");
  animateNumber("prize2", 15, 500, "+");
  animateNumber("prize3", 100, 500, "%");
  animateNumber("prize4", 10000, 500, "+");
};

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  effect: "coverflow",
  loop: true,
  centeredSlides: true,
  spaceBetween: 170,
  coverflowEffect: {
    rotate: 0,
    stretch: 100,
    depth: 170,
    modifier: 1,
  },
  grabCursor: true,
});
document.getElementById("submit-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const phone = document.getElementById("phone").value;

  removeOldErrors();
  let hasError = false;
  if (username === "") {
    addError("username", "Vui lòng nhập họ tên khách hàng");
    hasError = true;
  }

  if (phone === "") {
    addError("phone", "Số điện thoại không đúng định dạng");
    hasError = true;
  }

  if (!hasError) {
    alert("Đăng ký thành công!");
  }
});

function addError(inputId, message) {
  const inputElement = document.getElementById(inputId);

  const errorContainer = document.createElement("div");
  errorContainer.className = "error-container";

  const iconElement = document.createElement("img");
  iconElement.src = "./assets/icon-error.svg"; // Đường dẫn tới icon
  iconElement.alt = "Error icon"; // Mô tả thay thế
  iconElement.className = "error-icon"; // Class để định dạng

  // Tạo thẻ span cho thông báo lỗi
  const errorElement = document.createElement("span");
  errorElement.className = "error-message";
  errorElement.textContent = message;

  // Thêm icon và span vào container
  errorContainer.appendChild(iconElement);
  errorContainer.appendChild(errorElement);

  // Thêm container vào ngay sau phần tử input
  inputElement.parentElement.appendChild(errorContainer);
}

function removeOldErrors() {
  const oldErrors = document.querySelectorAll(".error-message");
  oldErrors.forEach((error) => error.remove());
}
