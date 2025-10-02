import { useState } from "react";
import "./App.css";

import logo from "./assets/group-12.png";
import cartIcon from "./assets/group-3-1.svg";
import dogImage from "./assets/dog-image.jpg";
import manAtDoor from "./assets/man-at-door-yellow-building.jpg";
import windowFlower from "./assets/window-flower.jpg";
import eggBalloon from "./assets/egg-balloon.jpg";
import manAtOcean from "./assets/man-at-ocean.png";
import redBuilding from "./assets/red-building-blue-sky.jpg";
import twoWomen from "./assets/two-women.jpg";
import filterIcon from "./assets/filter-icon.png";

function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="nav-bar">
        <img src={logo} alt="company logo" className="bejamas" />
        <img src={cartIcon} alt="cart-icon" className="cart-icon" />
      </nav>

      <hr />

      {/* Hero Section */}
      <section>
        <div className="sam-button">
          <h1 className="hero-title">Samurai king Resting</h1>
          <button className="add-to-cart">ADD TO CART</button>
        </div>

        <div className="dog-photo">
          <img src={dogImage} alt="A dog" className="dog" />
          <span className="day-photo">Photo of the day</span>
        </div>

        <div className="about-samuri-also-buy">
          <div className="about-samuri">
            <p className="section-title">About the samurai king Resting</p>
            <p className="dark-grey-text category">Pets</p>
            <p className="dark-grey-text description">
              So how did the classical Latin become so incoherent? According to
              McClintock, a 15th century typesetter likely scrambled part of
              Cicero's De Finibus in order to provide placeholder text to mockup
              various fonts for a type specimen book.
            </p>
          </div>

          <div className="also-buy">
            <p>People also buy</p>
            <div className="buy-images">
              <img src={manAtDoor} alt="Man at door" className="small-images" />
              <img src={windowFlower} alt="Window flower" className="small-images" />
              <img src={eggBalloon} alt="Egg Balloon" className="small-images" />
            </div>

            <div className="details-text">
              <p>Details</p>
              <p className="dark-grey-text">Size: 1020 x 1020 pixel</p>
              <p className="dark-grey-text">Size: 15 mb</p>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Product Listing Section */}
      <section>
        <div className="photography-sort">
          <p className="section-title">
            Photography/ <span className="grey-text">Premium Photos </span>
          </p>
          <div className="sort-filter-controls">
            <p className="sort-by">
              <span className="grey-text">⇅ Sort By </span>Price ∨
            </p>
            <button
              className="mobile-filter-button"
              onClick={() => setIsFilterOpen(true)}
            >
              <img src={filterIcon} alt="filter" />
            </button>
          </div>
        </div>

        <div className="layout">
          {/* Sidebar Filters (Desktop) */}
          <div className="filters">
            <p>Category</p>
            <div className="custom-checkbox">
              <input type="checkbox" id="people" />
              <label htmlFor="people">People</label>
            </div>
            <div className="custom-checkbox">
              <input type="checkbox" id="premium" />
              <label htmlFor="premium">Premium</label>
            </div>
            <div className="custom-checkbox">
              <input type="checkbox" defaultChecked id="pets" />
              <label htmlFor="pets">Pets</label>
            </div>
            <div className="custom-checkbox">
              <input type="checkbox" defaultChecked id="food" />
              <label htmlFor="food">Food</label>
            </div>
            <div className="custom-checkbox">
              <input type="checkbox" defaultChecked id="landmarks" />
              <label htmlFor="landmarks">Landmarks</label>
            </div>
            <div className="custom-checkbox">
              <input type="checkbox" id="cities" />
              <label htmlFor="cities">Cities</label>
            </div>
            <div className="custom-checkbox">
              <input type="checkbox" id="nature" />
              <label htmlFor="nature">Nature</label>
            </div>
            <hr />

            <p>Price range</p>
            <div className="custom-checkbox">
              <input type="checkbox" id="lower" />
              <label htmlFor="lower">Lower than $20</label>
            </div>
            <div className="custom-checkbox">
              <input type="checkbox" id="100" />
              <label htmlFor="100">$20 - $100</label>
            </div>
            <div className="custom-checkbox">
              <input type="checkbox" id="200" />
              <label htmlFor="200">$100 - $200</label>
            </div>
            <div className="custom-checkbox">
              <input type="checkbox" id="more" />
              <label htmlFor="more">More than $200</label>
            </div>
          </div>

          {/* Product Grid */}
          <div className="buy-these-images">
            <div className="best-seller-image">
              <img src={twoWomen} alt="Two women" />
              <span className="best-seller">Best Seller</span>
              <button className="add-cart">ADD TO CART</button>
              <p className="dark-grey-text">People</p>
              <p><strong>Two Women</strong></p>
              <p className="dark-grey-text">$18.00</p>
            </div>

            <div className="other-images">
              <img src={eggBalloon} alt="Egg Balloon" />
              <button className="add-cart">ADD TO CART</button>
              <p className="dark-grey-text">Food</p>
              <p><strong>Egg Balloon</strong></p>
              <p className="dark-grey-text">$93.89</p>
            </div>

            <div className="other-images">
              <img src={manAtOcean} alt="Man" />
              <button className="add-cart">ADD TO CART</button>
              <p className="dark-grey-text">People</p>
              <p><strong>Man at Ocean</strong></p>
              <p className="dark-grey-text">$100.00</p>
            </div>

            <div className="other-images">
              <img src={redBuilding} alt="Architecture" />
              <button className="add-cart">ADD TO CART</button>
              <p className="dark-grey-text">Landmarks</p>
              <p><strong>Architecture</strong></p>
              <p className="dark-grey-text">$101.00</p>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Footer */}
      <footer className="footer">
        <div className="page-controls">
          <span className="blac-control">&lt;</span>
          <span className="grey-control">1</span>
          <span className="grey-control">2</span>
          <span className="blac-control">3</span>
          <span className="grey-control">4</span>
          <span className="blac-control">&gt;</span>
        </div>
      </footer>

      {/* Filter Modal (Mobile) */}
      {isFilterOpen && (
        <div className="filter-modal">
          <div className="filter-content">
            <div className="filter-header">
              <h3>Filter</h3>
              <button
                className="close-btn"
                onClick={() => setIsFilterOpen(false)}
              >
                ✕
              </button>
            </div>

            <ul className="filter-list">
              <li><input type="checkbox" /> People</li>
              <li><input type="checkbox" /> Premium</li>
              <li><input type="checkbox" /> Pets</li>
              <li><input type="checkbox" /> Food</li>
              <li><input type="checkbox" /> Landmarks</li>
              <li><input type="checkbox" /> Cities</li>
              <li><input type="checkbox" /> Nature</li>
            </ul>

            <div className="filter-footer">
              <button className="clear-btn">Clear</button>
              <button className="save-btn">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
