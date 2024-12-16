import React from "react";
import "./mainpage.css";
import { ConnectButton } from "@suiet/wallet-kit";
import { WalletProvider } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWallet, 
  faBolt, 
  faBriefcase, 
  faCheckCircle, 
  faCircle,
  faQuestionCircle,
  faEnvelope,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';
import { 
  faTwitter,
  faDiscord, 
  faTelegram 
} from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <WalletProvider>
      <div>
        {/* Header */}
        <header>
          <div className="logo">
            <img src="suilance.png" alt="Suilance Logo" />
          </div>
          <nav>
           
            <div className="connect-wallet-wrapper">
              <ConnectButton>Connect Wallet</ConnectButton >
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main>
          <section className="user-dashboard">
            <div className="user-profile">
              <div className="avatar">I</div>
              <div className="welcome-text">
                <h2>Hello, Ivan</h2>
                <p>@Iv_verse</p>
              </div>
            </div>
            <div className="user-stats">
              <div className="stat">
                <div className="stat-label">
                  <FontAwesomeIcon icon={faWallet} /> <span>Earned</span>
                </div>
                <p className="stat-value">2,450 USDC</p>
              </div>
              <div className="stat">
                <div className="stat-label">
                  <FontAwesomeIcon icon={faBolt} /> <span>Bounties</span>
                </div>
                <p className="stat-value">12</p>
              </div>
              <div className="stat">
                <div className="stat-label">
                  <FontAwesomeIcon icon={faBriefcase} /> <span>Jobs</span>
                </div>
                <p className="stat-value">5</p>
              </div>
            </div>
          </section>

          {/* Categories Dropdown */}
          <section className="categories">
            <select id="category-select">
              <option value="for-you">For You</option>
              <option value="bounties">Bounties</option>
              <option value="grants">Grants</option>
              <option value="hackathons">Hackathons</option>
            </select>
          </section>

          {/* Services Section */}
          <section className="services">
            <div className="service-card">
              <img src="cetus.png" alt="Cetus" className="service-logo" />
              <div className="service-details">
                <h3>Write a thread on Cetus Aggregator</h3>
                <div className="service-info">
                  <div className="price-container">
                    <img src="USDC.png" alt="USDC" className="usdc-icon" />
                    <span className="price-amount">400 USDC</span>
                  </div>
                  <div className="provider-info">
                    <div className="provider">
                      <span>
                        Cetus <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#0073e6" }} />
                      </span>
                      <span className="days-left">
                        <FontAwesomeIcon icon={faCircle} style={{ color: "rgb(71, 221, 71)", marginRight: "5px" }} />
                        2d left
                      </span>
                    </div>
                    <button className="apply-now-btn">Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="services">
            <div className="service-card">
              <img src="cetus.png" alt="Cetus" className="service-logo" />
              <div className="service-details">
                <h3>Write a thread on Cetus Aggregator</h3>
                <div className="service-info">
                  <div className="price-container">
                    <img src="USDC.png" alt="USDC" className="usdc-icon" />
                    <span className="price-amount">400 USDC</span>
                  </div>
                  <div className="provider-info">
                    <div className="provider">
                      <span>
                        Cetus <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#0073e6" }} />
                      </span>
                      <span className="days-left">
                        <FontAwesomeIcon icon={faCircle} style={{ color: "rgb(71, 221, 71)", marginRight: "5px" }} />
                        2d left
                      </span>
                    </div>
                    <button className="apply-now-btn">Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer>
          <div className="footer-container">
            <div className="footer-section">
              <h2 className="footer-logo">
                <div className="logo">
                  <img src="suilance.png" alt="Suilance Logo" />
                </div>
              </h2>
              <p className="footer-description">
                With Suilance, Web3 freelancers can do tasks and get paid in cryptocurrency.
              </p>
              <button className="subscribe-button">Subscribe to Newsletter</button>
            </div>
            <div className="footer-section">
              <h3>About</h3>
              <ul>
                <li><a href="#">Docs</a></li>
                <li><a href="#">Earn</a></li>
                <li><a href="#">Investors</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Socials</h3>
              <ul>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} /> X
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faDiscord} /> Discord
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTelegram} /> Telegram
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faQuestionCircle} /> FAQs
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faEnvelope} /> Email
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faHeadset} /> Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p><a href="#">Terms of Use</a></p>
            <p><a href="#">Privacy Policy</a></p>
            <p>&copy; 2024 Suilance. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </WalletProvider>
  );
}

export default App;