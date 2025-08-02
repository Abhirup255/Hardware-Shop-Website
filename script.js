// Product details data
const productDetails = {
  handTools: {
    title: "Hand Tools",
    description: `
      <p>Tools from Stanley, Bosch, Makita.</p>
      <p>Durable and ergonomic hand tools including hammers, screwdrivers, wrenches, and pliers.</p>
    `,
    links: [
      { href: "https://www.stanleyengineeredproducts.com/", text: "Stanley" },
      { href: "https://www.boschtools.com/", text: "Bosch" },
      { href: "https://www.makitatools.com/", text: "Makita" }
    ]
  },
  powerTools: {
    title: "Power Tools",
    description: `
      <p>Tools from DeWalt, Makita, Milwaukee.</p>
      <p>High-performance cordless drills, saws, sanders and more.</p>
    `,
    links: [
      { href: "https://www.dewalt.com/", text: "DeWalt" },
      { href: "https://www.makitatools.com/", text: "Makita" },
      { href: "https://www.milwaukeetool.com/", text: "Milwaukee" }
    ]
  },
  waterTanks: {
    title: "Water Tanks",
    description: `
      <p>Tanks from Penguin, Sintex, Vectus.</p>
      <p>Durable and reliable water storage solutions.</p>
    `,
    links: [
      { href: "https://penguintank.com/", text: "Penguin" },
      { href: "https://www.sintexplastics.com/", text: "Sintex" },
      { href: "https://www.vectus.in/", text: "Vectus" }
    ]
  },
  plumbingMaterials: {
    title: "Plumbing Materials",
    description: `
      <p>From Finolex, Cera, Hindware.</p>
      <p>Pipes, fittings, faucets, and valves suitable for all plumbing work.</p>
    `,
    links: [
      { href: "https://www.finolexpipes.com/", text: "Finolex" },
      { href: "https://www.cerasanitaryware.com/", text: "Cera" },
      { href: "https://www.hindwarehomes.com/", text: "Hindware" }
    ]
  },
  paintsBrushes: {
    title: "Paints & Brushes",
    description: `
      <p>Asian Paints, Pentart brushes, emulsions & finishes.</p>
      <p>Premium quality paints and brushes for interior and exterior use.</p>
    `,
    links: [
      { href: "https://www.asianpaints.com/", text: "Asian Paints" },
      { href: "https://www.pentart.com/", text: "Pentart Brushes" }
    ]
  }
};

// Modal Elements
const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalLinks = document.getElementById("modalLinks");
const modalOverlay = modal.querySelector(".modal-overlay");
const closeBtn = modal.querySelector(".close-btn");

// Open Modal and Populate Content
function openModal(productKey) {
  const product = productDetails[productKey];
  if (!product) return;

  modalTitle.innerText = product.title;
  modalDesc.innerHTML = product.description;

  modalLinks.innerHTML = "";
  product.links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.href;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = link.text;
    modalLinks.appendChild(a);
  });

  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Prevent background scroll
  closeBtn.focus();
}

// Close Modal
function closeModal() {
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = ""; // Restore scroll
}

// Attach event listeners to product cards
document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("click", () => openModal(card.dataset.product));
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(card.dataset.product);
    }
  });
});

// Close modal by button, overlay, or Escape key
closeBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
    closeModal();
  }
});

// WhatsApp order button with single number 7584952687
function orderNow() {
  const phone = "7584952687";
  const message = encodeURIComponent("Hello! I want to order.");
  window.open(`https://wa.me/91${phone}?text=${message}`, "_blank");
}

// UPI Payment integration with your provided UPI ID
function payOnline() {
  const upiId = "7584952687@ibl";          // Your UPI ID
  const payeeName = "AN NANDI Hardware";   // Your business/store name
  const amount = "";                        // Leave empty so user fills amount in UPI app
  const transactionNote = "Payment for order";

  const upiUrl = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${encodeURIComponent(amount)}&tn=${encodeURIComponent(transactionNote)}&cu=INR`;

  // Trigger UPI payment app
  window.location.href = upiUrl;
}

// Print invoice
function printInvoice() {
  window.print();
}

// Dark mode toggle
document.getElementById("themeSwitcher").addEventListener("change", function () {
  document.body.classList.toggle("dark-mode", this.checked);
});
