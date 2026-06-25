const modal = document.querySelector(".contact-modal");
const interest = modal.querySelector("select");
const form = modal.querySelector("form");
const status = modal.querySelector(".form-status");

document.querySelectorAll("[data-open-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    interest.value = button.dataset.openModal;
    status.textContent = "";
    modal.showModal();
  });
});

modal.querySelector(".modal-close").addEventListener("click", () => modal.close());

modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = new FormData(form).get("name").trim().split(" ")[0];
  status.textContent = `Thank you, ${name}. Your enquiry is ready to be connected to your email or CRM.`;
  form.reset();
});
