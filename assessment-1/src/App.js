import logo from './logo.svg';
import './App.css';
import { MenuButton, ShadedButton } from './components/Buttons';
import { useState } from 'react';
import { FormInput } from './components/Inputs';
import { ImageContainer } from './components/custom/ImageContainer';
import { faChevronDown, faSearch, faTh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function App() {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div className="app">
      <header>
        {/* Mobile Nav */}
        <nav>
          <a className='logo'>Your logo</a>
          <div className='desktop_only'>
            <a className='nav_item'>Explore </a>
            <a className='nav_item'>About Us </a>
            <a className='nav_item'>Cities &nbsp;<FontAwesomeIcon icon={faChevronDown} /></a>
            <a className='nav_item cta'>Call </a>
          </div>
          <div className='mobile_only'>
            <FontAwesomeIcon icon={faTh} />
          </div>
        </nav>
      </header>
      <main>
        <section className='first_section'>
          <div>
            <h1>Rethink Your<br />living & renting</h1>
            <h2>Make your stay painless with us</h2>
          </div>
          <form>
            <FormInput label="CITY" placeholder="Select your city" />
            <FormInput label="DATES" placeholder="Select your dates" />
            <FormInput label="GUESTS" placeholder="Add guests" />
            <ShadedButton search>
              <FontAwesomeIcon icon={faSearch} />
              &nbsp;
              Search
            </ShadedButton>
          </form>
          <div className='mobile_only'>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </section>
        <section className='second_section'>
          <h3>Explore</h3>
          <p>From one-guest rooms to <br />penthouses with pools and gardens</p>
          <div className='second_section gallery'>
            <ImageContainer src="/images/2.jpg" title="Room with one king-size bed" options={["35$", <>28<sub>M<sup>2</sup></sub></>, "Book!"]} />
            <ImageContainer src="/images/3.jpg" title="Penthouse for 8 person" options={["2039$", <>438<sub>M<sup>2</sup></sub></>, "Book!"]} />
          </div>
        </section>
        <section className='third_section'>
          <h3>About</h3>
          <p>Allow us to tell you a short story...</p>
          <div className='third_section gallery' style={{ position: "relative" }}>
            <div>
              <ImageContainer src="/images/4.jpg" title="Chapter I"
                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`} />
              <ImageContainer src="/images/6.jpg" title="Chapter III"
                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`} />
            </div>
            <div>
              <ImageContainer src="/images/5.jpg" title="Chapter II"
                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`} />
              <ImageContainer src="/images/7.jpg" title="Chapter IV"
                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`} />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <nav>
          <div>
            <a className='logo'>Your logo</a>
            <summary>&#169; 2021 Company Name <br />All rights reserved</summary>
          </div>
          <div className='desktop_only'>
            <a className='nav_item'>Explore </a>
            <a className='nav_item'>About Us </a>
            <a className='nav_item'>Cities </a>
            <a className='nav_item cta'>Call </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default App;
