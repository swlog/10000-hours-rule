document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".btn-go");
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".btn-close");


  openBtn.addEventListener("click", () => {
    modal.showModal();
  });

  closeBtn.addEventListener("click", () => {
    modal.close();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.close();
    }
  });
});