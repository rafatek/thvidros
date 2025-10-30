// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle")
const navMenu = document.getElementById("navMenu")

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close menu when a link is clicked
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

// Contact Form Handler
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData(contactForm)
  const name = contactForm.querySelector('input[type="text"]').value
  const email = contactForm.querySelector('input[type="email"]').value
  const phone = contactForm.querySelector('input[type="tel"]').value
  const message = contactForm.querySelector("textarea").value

  // WhatsApp message
  const whatsappMessage = `Olá! Meu nome é ${name}. Email: ${email}. Telefone: ${phone}. Mensagem: ${message}`
  const whatsappUrl = `https://wa.me/5511987654321?text=${encodeURIComponent(whatsappMessage)}`

  // Open WhatsApp
  window.open(whatsappUrl, "_blank")

  // Reset form
  contactForm.reset()

  // Show success message
  alert("Mensagem enviada! Você será redirecionado para o WhatsApp.")
})

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe service cards and gallery items
document.querySelectorAll(".service-card, .gallery-item, .differential-item").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Additional updates can be added here if needed
