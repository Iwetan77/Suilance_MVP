document.addEventListener("DOMContentLoaded", function(){
// Check if the Sui wallet API is available
function checkWalletAvailability() {
  if (window.suiWallet) {
    return true;
  } else {
    return false;
  }
}

// Function to connect to the wallet
async function connectWallet() {
  const messageElement = document.getElementById("message");

  if (!checkWalletAvailability()) {
    alert("Baba Wahala first dey herre")
   // messageElement.textContent = "Sui Wallet not found. Please install a Sui-compatible wallet.";
    return;
  }

  try {
    // Request wallet connection
    const wallet = await window.suiWallet.requestPermissions();
    const accounts = await window.suiWallet.getAccounts();

    // Update the UI with wallet info
    if (accounts.length > 0) {
      messageElement.textContent = `Wallet connected: ${accounts[0]}`;
      console.log("Connected wallet:", accounts[0]);

      // Redirect to the dashboard
      window.location.href = "/dashboard";
    } else {
      messageElement.textContent = "No wallet accounts found.";
    }
  } catch (error) {
    console.error("Error connecting to wallet:", error);
    messageElement.textContent = "Failed to connect to wallet. Please try again.";
  }
}

// Add event listener to the button
document.getElementById("connectWallet").addEventListener("click", connectWallet);});