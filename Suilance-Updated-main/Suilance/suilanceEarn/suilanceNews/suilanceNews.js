// Ripple effect for buttons
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
  
    const ripple = button.getElementsByClassName("ripple")[0];
  
    if (ripple) {
      ripple.remove();
    }
  
    button.appendChild(circle);
  }
  
  document.querySelectorAll(".tip-button, .connect-wallet").forEach(button => {
    button.addEventListener("click", createRipple);
  });
  

  
  // Smooth scroll effect
  document.documentElement.style.scrollBehavior = "smooth";
  
  // Sticky search bar
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
  
  // News card hover animation
  document.querySelectorAll(".news-card").forEach(card => {
    card.addEventListener("mouseover", () => {
      card.classList.add("hovered");
    });
    card.addEventListener("mouseout", () => {
      card.classList.remove("hovered");
    });
  });
  
  // Tip modal popup
  function openTipModal(event) {
    event.stopPropagation();
  
    const modal = document.createElement("div");
    modal.classList.add("tip-modal");
  
    modal.innerHTML = `
      <div class="modal-content">
        <h3>Tip the Author</h3>
        <p>Enter the amount you'd like to tip:</p>
        <input type="number" min="0" placeholder="e.g., 0.1 SUI" class="tip-amount">
        <button class="send-tip-button">Send Tip</button>
        <button class="close-modal">Cancel</button>
      </div>
    `;
  
    document.body.appendChild(modal);
  
    // Close modal on button click
    modal.querySelector(".close-modal").addEventListener("click", () => {
      document.body.removeChild(modal);
    });
  
    // Send tip button logic
    modal.querySelector(".send-tip-button").addEventListener("click", () => {
      const tipAmount = modal.querySelector(".tip-amount").value;
      alert(`Tip of ${tipAmount} sent!`);
      document.body.removeChild(modal);
    });
  }
  
  document.querySelectorAll(".tip-button").forEach(button => {
    button.addEventListener("click", openTipModal);
  });
  
  // CSS Styles for JavaScript effects (inline CSS in JS for demo purposes)
  const style = document.createElement("style");
  style.innerHTML = `
    /* Ripple effect */
    .ripple {
      position: absolute;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple-animation 0.6s linear;
    }
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  
    /* Dark mode toggle */
    .dark-mode-toggle {
      position: fixed;
      top: 20px;
      right: 20px;
      background-color: #007bff;
      color: white;
      border: none;
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
    }
    .light-mode {
      background-color: #f4f4f9;
      color: #333;
    }
  
    /* Sticky header */
    .header.sticky {
      position: fixed;
      width: 100%;
      top: 0;
      background-color: rgba(40, 41, 61, 0.9);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
    }
  
    /* News card hover effect */
    .news-card.hovered {
      transform: scale(1.03);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
    }
  
    /* Tip modal */
    .tip-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .modal-content {
      background-color: #28293d;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      color: #f4f4f9;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    }
    .modal-content h3 {
      margin-bottom: 10px;
    }
    .tip-amount {
      padding: 8px;
      margin-bottom: 15px;
      border-radius: 4px;
      border: none;
      width: 80%;
    }
    .send-tip-button, .close-modal {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      margin: 5px;
      cursor: pointer;
    }
    .send-tip-button:hover, .close-modal:hover {
      background-color: #0056b3;
    }
  `;
  document.head.appendChild(style);
  

  document.querySelectorAll('.tip-button').forEach(button => {
    button.addEventListener('click', () => {
      const tipInfo = button.nextElementSibling; // Assuming it's the next sibling
      const tippers = ['Stan', 'Alice', 'Bob']; // Example array
      const additionalTippers = tippers.length - 1;
      tipInfo.textContent = `${tippers[0]} and ${additionalTippers} others tipped`;
    });
  });
  

