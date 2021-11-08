import "./App.css";
import React from "react";
import { ReactComponent as ScreensExample } from "./assets/images/screens.svg";
import logo from "./assets/images/logo.png";
import Frame19 from "./assets/images/frame-19.png";
import { ReactComponent as RestaurantIcon } from "./assets/images/restaurantIcon.svg";
import { ReactComponent as AlienIcon } from "./assets/images/alienIcon.svg";
import { ReactComponent as InclusiveIcon } from "./assets/images/inclusiveIcon.svg";
import MacbookPro from "./assets/images/macbook-pro.png";
import BoardsNotifi from "./assets/images/boards-notifications.png";
import Card1 from "./assets/images/Card.png";
import Card2 from "./assets/images/Card-1.png";
import Card3 from "./assets/images/Card-2.png";
import Card4 from "./assets/images/Card-3.png";
import Card5 from "./assets/images/Card-4.png";
import Card6 from "./assets/images/Card-5.png";
import Card7 from "./assets/images/Card-6.png";
import { ReactComponent as AppstoreIcon } from "./assets/images/appstoreIcon.svg";
import { ReactComponent as ApiaryIcon } from "./assets/images/apiaryIcon.svg";
import { ReactComponent as AndroidIcon } from "./assets/images/androidIcon.svg";
import { ReactComponent as BasecampIcon } from "./assets/images/basecampIcon.svg";
import { ReactComponent as AirbnbIcon } from "./assets/images/airbnbIcon.svg";
import { ReactComponent as IbmIcon } from "./assets/images/ibmIcon.svg";
import Avatar1 from "./assets/images/avatar.png";
import Avatar2 from "./assets/images/avatar-1.png";
import Avatar3 from "./assets/images/avatar-2.png";
import Avatar4 from "./assets/images/avatar-3.png";
import MediaContent from "./assets/images/media-content.png";
import { ReactComponent as MapIcon } from "./assets/images/mapIcon.svg";
import { ReactComponent as PhoneIcon } from "./assets/images/phoneIcon.svg";
import { ReactComponent as LinkedinIcon } from "./assets/images/linkedinIcon.svg";
import { ReactComponent as FacebookIcon } from "./assets/images/facebookIcon.svg";
import { ReactComponent as TwitterIcon } from "./assets/images/twitterIcon.svg";

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" width="170" height="70" />
          </div>
          <div className="center">
            <ul>
              <li className="homeNav">Home</li>
              <li className="productNav">Product</li>
              <li className="aboutNav">About</li>
              <li className="contactNav">Contact</li>
            </ul>
          </div>
          <div className="loginNav">
            <button>Login</button>
          </div>
        </div>
        <div className="textSologan">
          <div className="textHeader">
            <h1>
              Work at the speed <br /> of thought
            </h1>
          </div>
          <div className="textSup">
            <p>
              Most calendars are designed for teams. Slate is designed for
              <br />
              freelancers who want a simple way to plan their schedule.
            </p>
          </div>
        </div>
        <div className="buttonMenu">
          <button className="buttonTry">Try For Free</button>
          <button className="buttonLearn">Learn More</button>
        </div>
        <div className="screensExample">
          <ScreensExample />
        </div>
      </div>
      <div className="feature">
        <div className="textFeature">
          <h3>FEATURES</h3>
          <p>
            Most calendars are designed for teams. Slate is designed for
            <br />
            freelancers who want a simple way to plan their schedule.
          </p>
        </div>
        <div className="frame">
          <img
            src={Frame19}
            alt="Chat Bot"
            className="imageChatbot"
            width="652"
            height="609"
          />
          <div className="textSubChatbot">
            <div className="restaurant">
              <div className="restaurantTitle">
                <RestaurantIcon />
                <h3>A single source of truth</h3>
              </div>
              <p>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </div>
            <div className="restaurant">
              <div className="restaurantTitle">
                <AlienIcon />
                <h3>Intuitive Interface</h3>
              </div>
              <p>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </div>
            <div className="restaurant">
              <div className="restaurantTitle">
                <InclusiveIcon />
                <h3>Or with rules</h3>
              </div>
              <p>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contents">
        <div className="textContents">
          <h3>Contents</h3>
          <p>
            We focus on ergonomics and meeting you where you work.
            <br /> It's only a keystroke away.
          </p>
        </div>
        <div className="contentsExample">
          <div className="workContent">
            <h4>Work</h4>
            <p>
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify .
            </p>
            <button>Sign Up</button>
            <img src={MacbookPro} alt="Macbook Pro" />
          </div>
          <div className="designContent">
            <h4>Design with real data</h4>
            <p>
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify .
            </p>
            <button>Try For Free</button>
            <img src={BoardsNotifi} alt="Boards Notification" />
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="textGallery">
          <h3>Gallery</h3>
          <p>
            We focus on ergonomics and meeting you where you work.
            <br /> It's only a keystroke away.
          </p>
        </div>
        <div className="listImage1">
          <img src={Card1} alt="Card 1" width="340" height="400" />
          <img src={Card2} alt="Card 2" width="340" height="400" />
          <img src={Card3} alt="Card 3" width="340" height="400" />
          <img src={Card4} alt="Card 4" width="340" height="400" />
        </div>
        <div className="listImage2">
          <img src={Card5} alt="Card 5" width="560" height="400" />
          <img src={Card6} alt="Card 6" width="340" height="400" />
          <img src={Card7} alt="Card 7" width="520" height="400" />
        </div>
        <div className="buttonMore">
          <button>See More</button>
        </div>
      </div>
      <div className="partners">
        <div className="textPartners">
          <h3>Partners</h3>
          <p>
            We focus on ergonomics and meeting you where you work.
            <br /> It's only a keystroke away.
          </p>
        </div>
        <div className="logoPartners">
          <div>
            <AppstoreIcon />
          </div>
          <div>
            <ApiaryIcon />
          </div>
          <div>
            <AndroidIcon />
          </div>
          <div>
            <BasecampIcon />
          </div>
          <div>
            <AirbnbIcon />
          </div>
          <div>
            <IbmIcon />
          </div>
        </div>
        <div className="buttonPartners">
          <button>All Partners</button>
        </div>
      </div>
      <div className="testimonials">
        <div className="textTestimonials">
          <h3>Testimonials</h3>
        </div>
        <div className="commentsTestimonials">
          <div className="commentsList1">
            <div className="commentsItem">
              <div className="commentsHeader">
                <img src={Avatar1} alt="Avatar 1" />
                <h4>Claire Bell Designer</h4>
              </div>
              <div className="commentsSub">
                <p>
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year. Slate helps
                  you see how many more days
                  <br /> you need to work to reach your financial goal for the
                  month and year.your financial goal for the month and year.
                </p>
              </div>
            </div>
            <div className="commentsItem">
              <div className="commentsHeader">
                <img src={Avatar2} alt="Avatar 2" />
                <h4>Francisco Lane Designer</h4>
              </div>
              <div className="commentsSub">
                <p>
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year. Slate helps
                  you see how many more day
                  <br />s you need to work to reach your financial goal for the
                  month and year.
                </p>
              </div>
            </div>
          </div>
          <div className="commentsList2">
            <div className="commentsItem">
              <div className="commentsHeader">
                <img src={Avatar3} alt="Avatar 3" />
                <h4>Ralph Fisher Designer</h4>
              </div>
              <div className="commentsSub">
                <p>
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year. Slate helps
                  you see how many more days
                  <br /> you need to work to reach your financial goal for the
                  month and year.
                </p>
              </div>
            </div>
            <div className="commentsItem">
              <div className="commentsHeader">
                <img src={Avatar4} alt="Avatar 4" />
                <h4>Jorge Murphy Designer</h4>
              </div>
              <div className="commentsSub">
                <p>
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year. Slate helps
                  you see how many more days
                  <br /> you need to work to reach your financial goal for the
                  month and year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banners">
        <div className="bannersItem">
          <div className="bannersDes">
            <h2>
              OpenType feature
              <br /> and Variable fonts
            </h2>
            <button>Try For Free</button>
          </div>
          <div className="bannersImage">
            <img src={MediaContent} alt="Media Content" />
          </div>
        </div>
      </div>
      <hr
        style={{
          color: "white",
          backgroundColor: "white",
          height: 0.5,
          marginTop: 250,
        }}
      />
      <div className="footer">
        <div className="footerItem">
          <div className="titleItem">Fingertipe</div>
          <p>Home</p>
          <p>Examples</p>
          <p>Pricing</p>
          <p>Updates</p>
        </div>
        <div className="footerItem">
          <div className="titleItem">Resources</div>
          <p>Home</p>
          <p>Examples</p>
          <p>Pricing</p>
          <p>Updates</p>
        </div>
        <div className="footerItem">
          <div className="titleItem">About</div>
          <p>Home</p>
          <p>Examples</p>
          <p>Pricing</p>
          <p>Updates</p>
        </div>
        <div className="footerContact">
          <div className="map">
            <MapIcon />
            <p>7480 Mockingbird Hill undefined</p>
          </div>
          <div className="phone">
            <PhoneIcon />
            <p>(239)555-0108</p>
          </div>
          <div className="social">
            <div>
              <LinkedinIcon />
            </div>
            <div>
              <FacebookIcon />
            </div>
            <div>
              <TwitterIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
