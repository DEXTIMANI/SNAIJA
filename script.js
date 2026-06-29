document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".contact-modal");
    
    // Safety check: only run if modal exists on the page
    if (!modal) return;

    const interest = modal.querySelector("select");
    const form = modal.querySelector("form");
    const status = modal.querySelector(".form-status");

    // Handle opening the modal
    document.querySelectorAll("[data-open-modal]").forEach((button) => {
        button.addEventListener("click", () => {
            // Set the dropdown value based on the button clicked
            if (interest) interest.value = button.dataset.openModal;
            if (status) status.textContent = "";
            modal.showModal();
        });
    });

    // Close functionality
    modal.querySelector(".modal-close").addEventListener("click", () => modal.close());

    // Close when clicking the backdrop
    modal.addEventListener("click", (event) => {
        if (event.target === modal) modal.close();
    });

    // Form Submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const name = formData.get("name").trim().split(" ")[0];
        
        if (status) {
            status.textContent = `Thank you, ${name}. Your enquiry has been sent. We'll be in touch!`;
        }
        
        form.reset();
        
        // Optional: Close modal after a short delay
        setTimeout(() => modal.close(), 3000);
    });
});
