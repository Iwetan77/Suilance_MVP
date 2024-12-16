import React from "react";
import { useConnectWallet, useDisconnectWallet, useCurrentWallet } from "@mysten/dapp-kit"; // Correct wallet hooks
import { useNavigate } from "react-router-dom"; // Import navigate from react-router-dom

const ConnectWallet = () => {
  const connectWallet = useConnectWallet();
  const disconnectWallet = useDisconnectWallet();
  const currentWallet = useCurrentWallet();
  const navigate = useNavigate(); // Define navigate

  const handleConnect = async () => {
    try {
      await connectWallet();
      alert("Wallet connected successfully!");
      navigate("/dashboard"); // Navigate to another route after connecting
    } catch (error) {
      console.error("Error connecting wallet:", error);
      alert("Failed to connect wallet. Please try again.");
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnectWallet();
      alert("Wallet disconnected successfully!");
      navigate("/"); // Navigate to home after disconnecting
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
      alert("Failed to disconnect wallet.");
    }
  };

  return (
    <div>
      {!currentWallet ? (
        <button onClick={handleConnect}>Connect Wallet</button>
      ) : (
        <button onClick={handleDisconnect}>Disconnect Wallet</button>
      )}
    </div>
  );
};

export default ConnectWallet;
