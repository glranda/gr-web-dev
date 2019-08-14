/* ----- Designed and coded by Grayson Randall -----
----- https://graysonrandall.github.io/portfolio/index.html ----- */

@font-face {
    font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;
    src: /portfolio/ArialRoundedMTStd.otf;
}

@font-face {
    font-family: 'Hiragino Kaku Gothic Std';
    src: url(/portfolio/hiragino-kaku-gothic-std-w8.otf);
}

a {
  color: blue;
}

a:visited {
  color: blue;
}

body {
  font-family: 'Libre Franklin', sans-serif;
  line-height: 1.3;
  color: #343434;
}

.outer-wrapper {
  max-width: 1366px;
  margin: 0 auto;
  text-align: center;
}

.content-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
}

.navigation {
  padding: 0 1rem;
  position: fixed;
  top: 0;
  background: #fff;
  box-shadow: 0 1px 9px #ccc;
  left: 0;
  right: 0;
  z-index: 3;
  opacity: .9;
}

@media only screen and (min-width: 19.375rem) {
  .navigation {
    padding: 1rem 1rem;
  }
}

@media only screen and (min-width: 26.25rem) {
  .navigation {
    padding: 1rem 2rem;
  }
}

.navigation ul {
  padding: 0;
  display: block;
  align-items: center;
  justify-content: center;
}

@media only screen and (min-width: 19.375rem) {
  .navigation ul {
    display: flex;
  }
}

@media only screen and (min-width: 26.25rem) {
  .navigation ul {
    justify-content: inherit;
  }
}

.navigation ul li:last-child {
  margin-right: .8rem;
  margin-left: .8rem;
}

@media only screen and (min-width: 26.25rem) {
  .navigation ul li:last-child {
    margin-left: auto;
    margin-right: 2rem;
  }
}

.navigation ul li {
  list-style-type: none;
  margin: .5rem .8rem;
}

@media only screen and (min-width: 19.375rem) {
  .navigation ul li {
    margin: 0 .8rem;
  }
}

@media only screen and (min-width: 26.25rem) {
  .navigation ul li {
    margin: 0 2rem;
  }
}

.main-logo {
  padding-top: 14rem;
  max-width: 15rem;
  opacity: 0;
}

.home-top-section h1 {
  font-size: 1.5rem;
  margin-bottom: 20%;
  margin-bottom: 1.5rem;
}

@media only screen and (min-width: 25rem) {
  .home-top-section h1  {
    font-size: 2rem;
  }
}

@media only screen and (min-width: 26.25rem) {
  .home-top-section h1 {
    margin-bottom: inherit;
  }

  .main-logo {
    padding-top: 16rem;
  }
}

.main-header {
  opacity: 0;
}

.home-top-section .underbrow {
  border-top: 1px solid black;
  margin-top: .5rem;
  display: inline-block;
  padding-top: 0.5rem;
  font-size: 1.2rem;
  opacity: 0;
  transform: translate(0, 400px);
  -webkit-transform: translate(0, 400px);
  -moz-transform: translate(0, 400px);
  -o-transform: translate(0, 400px);
  -ms-transform: translate(0, 400px);
  transform: translate(0, 400px);
}

.home-top-section .show-under {
  opacity: 1;
  -webkit-transition: all .7s ease-in;
  -moz-transition: all .7s ease-in;
  -o-transition: all .7s ease-in;
  -ms-transition: all .7s ease-in;
  transition: all .7s ease-in;
  -webkit-transform: translate(0, 0);
  -moz-transform: translate(0, 0);
  -o-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
}

@media only screen and (min-width: 25rem) {
  .home-top-section .underbrow {
    font-size: 1.7rem;
    margin-top: .8rem;
  }
}

.home-top-section p.intro-text {
  font-size: 1.2rem;
  width: 80%;
  text-align: left;
  margin: 5rem auto;
}

@media only screen and (min-width: 25rem) {
  .home-top-section p.intro-text {
    font-size: 1.4rem;
  }
}

@media only screen and (min-width: 65.625rem) {
  .home-top-section p.intro-text {
    width: 65%;
  }
}

.home-top-section p.intro-text.paragraph {
  border-top: 1px solid #ccc;
  padding-top: 4rem;
  margin: -7rem auto 7.5rem;
}

.homepage-button {
  background: #72a2ba;
  color: #fff;
  display: inline-block;
  font-size: .85rem;
  padding: 1.5rem 0;
  margin: -2rem auto 12rem;
  width: 18rem;
  border-radius: 7px;
  cursor: pointer;
  transition: all .2s ease-in-out;
}

.homepage-button:visited {
  color: #fff;
}

@media only screen and (min-width: 45rem) {
  .homepage-button {
    width: 35rem;
    font-size: 1.2rem;
  }
}

.homepage-button:hover {
  text-decoration: underline;
  transform: scale(1.06);
}

.photography-header {
  display: none;
}

@media only screen and (min-width: 43rem) {
  .photography-header {
    display: block;
  }
}

.photography-showcase {
  background-image: url(/portfolio/image/photography/15.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 14rem;
  min-height: 26rem;
  max-height: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media only screen and (min-width: 43rem) {
  .photography-showcase {
    min-height: 35rem;
    background-image: url(/portfolio/image/15-homepage.png);
  }
}

.intro-content {
  opacity: 0;
  transform: translate(0, 400px);
  -webkit-transform: translate(0, 400px);
  -moz-transform: translate(0, 400px);
  -o-transform: translate(0, 400px);
  -ms-transform: translate(0, 400px);
  transform: translate(0, 400px);
}

.show-intro {
  opacity: 1;
  -webkit-transition: all .7s ease-in;
  -moz-transition: all .7s ease-in;
  -o-transition: all .7s ease-in;
  -ms-transition: all .7s ease-in;
  transition: all .7s ease-in;
  -webkit-transform: translate(0, 0);
  -moz-transform: translate(0, 0);
  -o-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
}

.home-top-section p {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
}

@media only screen and (min-width: 65.625rem) {
  .home-top-section p {
    font-size: 2.5rem;
  }
}

.showcase-box {
  text-align: center;
  color: #fff;
  overflow: hidden;
  position: relative;
  border-radius: 5px 5px 0 0;
}

.homepage-wrapper h2 {
  text-decoration: underline;
}

@media only screen and (min-width: 65.625rem) {
  .homepage-wrapper h2 {
    text-decoration: none;
  }
}

.homepage-wrapper .no-underline h2 {
  text-decoration: none;
}

.homepage-wrapper .showcase-box {
  width: 100%;
  margin: 0 auto 2rem;
}

@media only screen and (min-width: 68rem) {
  .homepage-wrapper .showcase-box {
    width: 85%;
  }
}

.showcase-box-home .mobile {
  display: inline-block;
  max-width: 16rem;
  margin-bottom: -.3rem;
  box-shadow: 2px 3px 7px 0px #333;
  border-radius: 16px 16px 0 0;
  border-radius: 5px 5px 0 0;
  margin-top: 12%;
}

@media only screen and (min-width: 23.75rem) {
  .showcase-box-home .mobile {
    display: none;
  }
}

.showcase-box img {
  display: inline-block;
  max-width: 16rem;
  margin-bottom: -.3rem;
  box-shadow: 2px 3px 7px 0px #333;
  border-radius: 16px 16px 0 0;
  border-radius: 5px 5px 0 0;
  margin-top: 12%;
}

.showcase-box-home img {
  display: none;
  max-width: 16rem;
  margin-bottom: -.3rem;
  box-shadow: 2px 3px 7px 0px #333;
  border-radius: 16px 16px 0 0;
  border-radius: 5px 5px 0 0;
  margin-top: 12%;
}

.showcase-box-secondary img {
  max-width: 16rem;
}

@media only screen and (min-width: 23.75rem) {
  .showcase-box img {
    display: inline-block;
    max-width: 18rem;
    margin-top: 4%;
  }

  .showcase-box-home img {
    display: inline-block;
    max-width: 18rem;
    margin-top: 4%;
  }

  .showcase-box-secondary img {
    max-width: 18rem;
  }
}

@media only screen and (min-width: 35rem) {
  .showcase-box img {
    max-width: 30rem;
  }

  .showcase-box-secondary img {
    max-width: 35rem;
  }
}

@media only screen and (min-width: 45.875rem) {
  .showcase-box img {
    max-width: 40rem;
  }

  .showcase-box-secondary img {
    max-width: 35rem;
  }
}

@media only screen and (min-width: 65.625rem) {
  .showcase-box img {
    border-radius: 16px 16px 0 0;
    margin-top: 0;
  }
}

.showcase-box h2 {
  padding: 3rem 0 1rem;
  margin: 0;
  font-size: 2rem;
  font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;
  font-weight: normal;
}

@media only screen and (min-width: 35rem) {
  .showcase-box h2 {
    font-size: 3rem;
  }
}

@media only screen and (min-width: 65.625rem) {
  .showcase-box h2 {
    padding: 4rem 0;
  }
}

.home-box-hover {
  text-decoration: none;
}

.cover-links {
  position: absolute;
  width: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 40%;
  height: auto;
  margin: auto;
  color: #fff;
  z-index: 2;
  font-size: 1.8rem;
  text-decoration: underline;
}

.mobile-cover-links {
  display: block;
  position: relative;
  font-size: 1.15rem;
}

.mobile-cover-links a {
  color: #fff;
}

@media only screen and (min-width: 65.625rem) {
  .mobile-cover-links {
    display: none;
  }
}

.cover-links a {
  text-decoration: none;
  color: #fff;
}

@media only screen and (min-width: 30rem) {
  .next-project p:after {
    display: inline-block;
  }
}

.cover-links a:hover {
  text-decoration: underline;
}

.cover-links:last-child {
  margin-top: 5.5rem;
}

.showcase-box .cover {
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  z-index: 1;
  opacity: .7;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: none;
}

.showcase-box:hover .cover {
  display: none;
}

@media only screen and (min-width: 65.625rem) {
  .showcase-box:hover .cover {
    display: block;
  }
}

.showcase-box .cover-links {
  display: none;
}

.showcase-box:hover .cover-links {
  display: none;
}

@media only screen and (min-width: 65.625rem) {
  .showcase-box:hover .cover-links {
    display: block;
  }
}

.home-hearst-box {
  background-color: #73ADA1;
}

.home-hearst-box img {
  border-radius: 2px 2px 0 0;
}

@media only screen and (min-width: 26.25rem) {
  .home-hearst-box img {
    border-radius: 5px 5px 0 0;
  }
}

.home-su-box {
  background-color: #72A2BA;
}

.home-wh-box {
  background-color: #73ADA1;
}

.home-anni-box {
  background-color: #72A2BA;
}

.home-ci-box {
  background-color: #F9E399;
}

.home-att-box {
  background-color: #FF776E;
}

.homepage-wrapper .home-att-box h2 {
    text-decoration: underline;
}

.dev-header-home {
  margin-top: 10rem;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

@media only screen and (min-width: 26.25rem) {
  .dev-header-home {
    margin-top: 13rem;
  }
}

@media only screen and (min-width: 65.625rem) {
  .dev-header-home {
    font-size: 2.5rem;
  }
}

.logos-header {
  margin-top: -4rem;
  padding-bottom: 1rem;
}

.logos-home-container {
  margin: 0rem auto 11rem;
  align-items: center;
  max-width: 80%;
  justify-content: space-between;
  display: none;
}

@media only screen and (min-width: 47rem) {
  .logos-home-container {
    display: flex;
  }
}

@media only screen and (min-width: 65.625rem) {
  .logos-home-container {
    max-width: 65%;
  }
}

.logos-home-container img {
  width: 3rem;
}

.logos-home-container span {
  display: block;
  text-align: center;
  padding-top: .5rem;
  font-size: .8rem;
}

.logos-home-container-mobile {
  margin: 0rem auto 11rem;
  display: flex;
  align-items: center;
  max-width: 100%;
  justify-content: space-around;
}

@media only screen and (min-width: 19.375rem) {
  .logos-home-container-mobile {
    max-width: 80%;
  }
}

@media only screen and (min-width: 47rem) {
  .logos-home-container-mobile {
    display: none;
  }
}

.logos-home-container-mobile img {
  width: 3rem;
}

.logos-home-container-mobile span {
  display: block;
  text-align: center;
  padding-top: .5rem;
  padding-bottom: 1.8rem;
  font-size: .8rem;
}

.home-about-wrapper {
  margin: 10rem auto 8rem;
}

.about-section-spacer {
  text-align: left;
  max-width: 80%;
  margin: 2rem auto;
  display: block;
  align-items: baseline;
}

@media only screen and (min-width: 65.625rem) {
  .about-section-spacer {
    display: flex;
    max-width: 65%;
  }
}

.about-section-spacer p {
  font-size: 1.4rem;
}

.about-section-spacer h3 {
  width: 100%;
  min-width: 8rem;
  margin-right: 4rem;
  font-size: 2.5rem;
}

@media only screen and (min-width: 26.25rem) {
  .about-section-spacer h3 {
    font-size: 1.5rem;
  }
}

.resume-link {
  margin: 2rem 0;
}

.su-wrapper , .wh-wrapper, .dev-wrapper {
  text-align: left;
}

.text-spacer {
  width: 80%;
  margin: 0 auto;
}

@media only screen and (min-width: 65.625rem) {
  .text-spacer {
    margin: 0 auto 0 7rem;
  }
}

.text-spacer p {
  font-size: 1.4rem;
}

.text-spacer h2 {
  font-size: 2rem;
}

.before-after p {
  font-size: 1.4rem;
}

.before-after h2 {
  font-size: 2rem;
}

.wh-progress-content {
  margin-top: 4rem;
}

@media only screen and (min-width: 26.25rem) {
  .wh-progress-content {
    margin-top: 6rem;
  }
}

.text-spacer-center {
  width: 80%;
  margin: 0 auto;
}

@media only screen and (min-width: 26.25rem) {
    .text-spacer-center {
      width: 70%;
    }
}

.text-spacer-center p {
  font-size: 1.4rem;
}

.wh-mockups {
  margin-bottom: 8rem;
}

.wh-mockups img {
  width: 100%;
}

@media only screen and (min-width: 65.625rem) {
  .wh-mockups img {
    width: 90%;
  }
}

.process-page-header {
  margin-top: 12rem;
}

@media only screen and (min-width: 27rem) {
  .process-page-header {
    font-size: 2.5rem;
  }
}

.dev-page-header {
  margin-top: 9rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}

@media only screen and (min-width: 43rem) {
  .dev-page-header {
    margin-top: 12rem;
  }
}

@media only screen and (min-width: 27rem) {
  .dev-page-header {
    font-size: 2.5rem;
    text-align: center;
    width: auto;
  }
}

.dev-wrapper .su-page-box .hearst {
  border-radius: 5px;
}

.su-page-box , .su-layout-box , .su-main-box {
  background-color: #72A2BA;
}

.wh-page-box , .wh-main-box {
  background-color: #73ADA1;
}

.anni-main-box {
  background-color: #72A2BA;
}

.ci-main-box {
  background-color: #F9E399;
}

.att-main-box {
  background-color: #FF776E;
}

div.wh-page-box img {
  width: 100%;
  border-radius: 0;
  box-shadow: none;
  margin-bottom: 0;
}

.wh-main-box:hover h2 {
  text-decoration: underline;
}

.wh-main-box h2 {
  text-decoration: underline;
}

@media only screen and (min-width: 65.625rem) {
  .wh-main-box h2 {
    text-decoration: none;
  }
}

.wh-main-box:hover {
  opacity: .9;
}

.anni-main-box:hover h2 {
  text-decoration: underline;
}

.anni-main-box h2 {
  text-decoration: underline;
}

@media only screen and (min-width: 65.625rem) {
  .anni-main-box h2 {
    text-decoration: none;
  }
}

.anni-main-box:hover {
  opacity: .9;
}

.ci-main-box:hover h2 {
  text-decoration: underline;
}

.ci-main-box h2 {
  text-decoration: underline;
}

@media only screen and (min-width: 65.625rem) {
  .ci-main-box h2 {
    text-decoration: none;
  }
}

.ci-main-box:hover {
  opacity: .9;
}

.att-main-box:hover h2 {
  text-decoration: underline;
}

.att-main-box h2 {
  text-decoration: underline;
}

@media only screen and (min-width: 65.625rem) {
  .att-main-box h2 {
    text-decoration: none;
  }
}

.att-main-box:hover {
  opacity: .9;
}

.photography-showcase:hover h2 {
  text-decoration: underline;
}

.photography-showcase h2 {
  text-decoration: underline;
}

@media only screen and (min-width: 65.625rem) {
  .photography-showcase h2 {
    text-decoration: none;
  }
}

.reference-section {
    display: block;
    margin-top: 10rem;
}

.reference-section p {
    padding-left: 0;
    margin-bottom: 10rem;
}

@media only screen and (min-width: 43rem) {
  .reference-section p {
    padding-left: 12rem;
  }
}

.reference-section p:before {
  content: '';
  background-image: url(/portfolio/image/nelnet-logo.png);
  background-size: 9rem;
  background-repeat: no-repeat;
  background-color: transparent;
  position: absolute;
  width: 9rem;
  height: 9rem;
  margin-left: -12.5rem;
  display: none;
}

@media only screen and (min-width: 43rem) {
  .reference-section p:before {
    display: block;
  }
}

.nelnet-logo-mobile {
  display: block;
  margin: 0 auto;
}

.reference-quote {
  display: block;
  margin-top: 1.5rem;
  font-weight: bold;
}

@media only screen and (min-width: 43rem) {
  .nelnet-logo-mobile {
    display: none;
  }
}

.mypicture {
  display: block;
  margin-bottom: 3rem;
  max-width: 200px;
  border: 8px solid #FF776E;
  border-radius: 108px;
}

.photography-main-section {
  margin: 5rem 0;
  padding: 0;
}

@media only screen and (min-width: 35rem) {
  .photography-main-section {
    padding: 0 2rem;
  }
}

.photo-spacer {
  display: inline;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
}

@media only screen and (min-width: 70.6rem) {
  .photo-spacer {
    display: flex;
    margin-bottom: 2rem;
  }
}

.photo-spacer img {
  max-width: 20rem;
  max-height: 20rem;
  margin: 1rem 0;
  display: inline;
}

@media only screen and (min-width: 35rem) {
  .photo-spacer img {
    margin: 1rem;
  }
}

@media only screen and (min-width: 70.6rem) {
  .photo-spacer img {
    margin: 0 1rem;
  }
}

.su-main-box:hover h2 {
  text-decoration: underline;
}

.su-main-box h2 {
  text-decoration: underline;
}

@media only screen and (min-width: 65.625rem) {
  .su-main-box h2 {
    text-decoration: none;
  }
}

.su-main-box:hover {
  opacity: .9;
}

.su-main-box {
  margin-top: 6rem;
}

@media only screen and (min-width: 65.625rem) {
  .su-main-box {
    margin-top: 0;
  }
}

.su-page-box , .wh-page-box {
  padding-top: 1.5rem;
}

@media only screen and (min-width: 26.25rem) {
    .su-page-box , .wh-page-box {
      padding-top: 4rem;
    }
}

.wh-page-box {
  margin-bottom: 2rem;
  padding-bottom: 0;
}

@media only screen and (min-width: 65.625rem) {
  .wh-page-box {
    padding-bottom: 2rem;
  }
}

.su-page-box {
  margin-bottom: 5rem;
}

@media only screen and (min-width: 26.25rem) {
  .wh-page-box {
    margin-bottom: inherit;
  }
}

.su-page-box img , .wh-page-box img {
  width: 40%;
}

.su-page-box img:first-child {
  margin-left: -1rem;
  margin-right: 1rem;
  display: none;
}

@media only screen and (min-width: 65.625rem) {
  .su-page-box img:first-child {
    display: inline;
    border-radius: 0;
  }
}

.su-page-box img:last-child {
  min-width: 17rem;
  border-radius: 0;
  box-shadow: none;
}

@media only screen and (min-width: 26.25rem) {
  .su-page-box img:last-child {
    width: 48%;
  }
}

.wh-page-box img:first-child {
  margin-left: 0;
  margin-right: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.wh-page-box.hearst img:first-child {
  margin-bottom: -1rem;
}

.wh-page-box.hearst {
  padding-bottom: 0;
}

.wh-page-box.hearst img {
  border-radius: 5px 5px 0 0;
}

@media only screen and (min-width: 23.75rem) {
    .wh-page-box img:first-child {
      margin-top: 0rem;
    }
}

@media only screen and (min-width: 26.25rem) {
    .wh-page-box img:first-child {
      margin-top: -2rem;
    }
}

@media only screen and (min-width: 65.625rem) {
  .wh-page-box img:first-child {
    margin-left: -1rem;
    margin-right: 1rem;
    margin-top: inherit;
    margin-bottom: inherit;
  }
}

#lazyload {
  position: relative;
}

.su-layout-box {
  padding-top: 1rem;
  margin-bottom: 6rem;
}

.su-layout-box .images {
  display: inherit;
  margin: 0 auto;
  width: fit-content;
  width: -moz-fit-content;
}

@media only screen and (min-width: 65.625rem) {
  .su-layout-box .images {
    display: flex;
    align-items: center;
  }
}

.su-layout-box .images img {
  border-radius: 0;
  box-shadow: none;
  max-width: 16rem;
}

@media only screen and (min-width: 23.75rem) {
  .su-layout-box .images img {
    max-width: 20rem;
  }
}

@media only screen and (min-width: 40rem) {
  .su-layout-box .images img {
    max-width: 40rem;
  }
}

@media only screen and (min-width: 75rem) {
  .su-layout-box .images img {
    max-width: 53rem;
  }
}

.su-layout-box .images a {
  margin: 0rem auto 2rem auto;
}

@media only screen and (min-width: 26.25rem) {
  .su-layout-box .images a {
    margin: 4rem 2rem 2rem auto;
  }
}

.su-layout-box a.second img {
  box-shadow: 2px 3px 7px 0px #333;
  max-width: 13rem;
}

@media only screen and (min-width: 23.75rem) {
  .su-layout-box a.second img {
    max-width: 18rem;
  }
}

.su-layout-box .images a:last-child {
  margin: 2rem auto;
}

@media only screen and (min-width: 65.625rem) {
  .su-layout-box .images a:last-child {
    margin: auto auto auto 2rem;
  }
}

.su-layout-box a {
  display: block;
  margin: 4rem 0 2rem;
}

.su-layout-box a {
  margin: 2rem auto 4rem;
  width: fit-content;
  width: -moz-fit-content;
  display: table;
  text-transform: uppercase;
  color: #fff;
}

.site-wrapper-link {
  text-decoration: none;
  color: #fff;
}

.functionality-header {
  display: none;
}

.functionality-header-mobile {
  display: inherit;
  margin-top: 6rem;
}

@media only screen and (min-width: 64.375rem) {
  .functionality-header {
    margin-top: 4rem;
    font-size: 2rem;
    display: inherit;
  }

  .functionality-header-mobile {
    display: none;
  }
}

.interview-section {
  text-align: center;
  margin-bottom: 6rem;
  margin-top: 4.3%;
}

.interview-section img {
  max-width: 15rem;
  margin-right: 0;
  margin-bottom: 1.5rem;
  box-shadow: 2px 3px 7px 0px #333;
}

@media only screen and (min-width: 26.25rem) {
  .interview-section img {
    max-width: 25rem;
  }
}

@media only screen and (min-width: 41.875rem) {
  .interview-section img {
    margin-right: 0rem;
    margin-bottom: 1.5rem;
  }
}

@media only screen and (min-width: 53.25rem) {
  .interview-section img {
    margin-right: 2rem;
    margin-bottom: 0
  }
}

.interview-section a:last-child img {
  max-width: 15rem;
  margin-right: 0;
}

@media only screen and (min-width: 26.25rem) {
  .interview-section a:last-child img {
    max-width: 25rem;
  }
}

@media only screen and (min-width: 41.875rem) {
  .interview-section a:last-child img {
    max-width: 25rem;
  }
}

.before-after {
  margin-top: 1rem;
}

@media only screen and (min-width: 26.25rem) {
  .before-after {
    margin-top: 6.5rem;
  }
}

.before-after img {
  box-shadow: 2px 3px 7px 0px #333;
}

.before-after .top {
  display: inherit;
  margin: 0 2rem;
}

@media only screen and (min-width: 65.625rem) {
  .before-after .top {
    display: flex;
  }
}

.before-after .top .content {
  display: inline-block;
  width: auto;
  text-align: left;
  padding-left: 0;
}

@media only screen and (min-width: 30rem) {
  .before-after .top .content {
    width: 30rem;
  }
}

@media only screen and (min-width: 65.625rem) {
  .before-after .top .content {
    padding-left: 3rem;
  }
}

.before-after .top img {
  max-width: 14rem;
  max-height: 30rem;
  display: inline-block;
}

@media only screen and (min-width: 23.75rem) {
  .before-after .top img {
    max-width: 19rem;
  }
}

@media only screen and (min-width: 32rem) {
  .before-after .top img {
    max-width: 30rem;
    max-height: 21rem;
  }
}

@media only screen and (min-width: 65.625rem) {
  .before-after .top img {
    max-width: inherit;
    width: 46%;
    height: 30%;
    max-height: inherit;
  }
}

@media only screen and (min-width: 85.375rem) {
  .before-after .top img {
    max-width: inherit;
    width: auto;
    height: auto;
    max-height: 30rem;
  }
}

.before-after .bottom {
  display: none;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 2rem 7rem;
}

@media only screen and (min-width: 65.625rem) {
  .before-after .bottom {
    display: flex;
  }
}

.before-after .bottom img {
  max-width: 23rem;
  max-height: 15rem;
  height: 15rem;
  width: 33%;
}

@media only screen and (min-width: 85.375rem) {
  .before-after .bottom img {
    max-width: 26rem;
    max-height: 18rem;
    width: 26rem;
    height: 18rem;
  }
}




.mobile-background {
  background: url(/portfolio/image/madison-mobile.jpg);
  position: absolute;
  width: 100%;
  z-index: -1;
  height: 100%;
  padding: 0;
  margin: 0;
  background-repeat: no-repeat;
  background-position: 50% 0;
  display: inherit;
}

.functionality-section {
    background-image: none;
    height: 41rem;
    overflow: hidden;
    position: relative;
}

.functionality-section h2 {
  font-family: 'Hiragino Kaku Gothic Std';
}

@media only screen and (min-width: 75rem) {
  .functionality-section h2 {
    font-family: 'Hiragino Kaku Gothic Std';
  }
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .functionality-section h2 {
    font-family: 'Roboto';
  }
}

@-moz-document url-prefix() {
  .functionality-section h2 {
    font-family: 'Hiragino Kaku Gothic Std';
  }
}

@media only screen and (min-width: 26.25rem) {
  .mobile-background {
    background: url(/portfolio/image/Wyldhaven-background.png);
    background-position: 50% 50%;
  }
}

@media only screen and (min-width: 64.375rem) {
  .functionality-section {
    background: url(/portfolio/image/Wyldhaven-background.png);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: initial;
  }

  .mobile-background {
    display: none;
  }
}

.functionality-section h2 {
  color: #fff;
  text-transform: uppercase;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 100%;
  font-size: 1.5rem;
}

@media only screen and (min-width: 20.5rem) {
  .functionality-section h2 {
    margin-top: 80%;
    font-size: 2.5rem;
  }
}

@media only screen and (min-width: 23.75rem) {
  .functionality-section h2 {
    margin-top: 68%;
  }
}

@media only screen and (min-width: 34rem) {
  .functionality-section h2 {
    margin-top: 49%;
    font-size: 4rem;
  }
}

@media only screen and (min-width: 41rem) {
  .functionality-section h2 {
    margin-top: 29%;
    font-size: 5rem;
  }
}

@media only screen and (min-width: 65.625rem) {
  .functionality-section h2 {
    margin-top: 20%;
  }
}

.print-header {
  text-align: center;
}

.print-media {
  margin-bottom: 10rem;
  display: block;
  align-items: start;
  justify-content: space-around;
}

@media only screen and (min-width: 65.625rem) {
  .print-media {
    display: flex;
  }
}

.print-media img {
  max-width: 13rem;
  margin: .5rem auto 1.5rem;
}

@media only screen and (min-width: 29rem) {
  .print-media img {
    max-width: 25rem;
  }
}

@media only screen and (min-width: 65.625rem) {
  .print-media img {
    margin: .5rem 0 1.5rem;
  }
}

.print-media .columns {
  margin: 5rem 0;
  text-align: center;
}

@media only screen and (min-width: 65.625rem) {
  .print-media .columns {
    margin: 0;
  }
}

.print-media .column-right {
  margin-left: 0;
}

@media only screen and (min-width: 65.625rem) {
  .print-media .column-right {
    margin-left: 16%;
  }
}


.print-media .cds {
  display: block;
  margin-bottom: 5rem;
}

@media only screen and (min-width: 65.625rem) {
  .print-media .cds {
    display: flex;
  }
}

.print-media .stickers {
  max-width: 13rem;
}

@media only screen and (min-width: 29rem) {
  .print-media .stickers {
    max-width: 15rem;
  }
}

.print-media .cds img {
   max-width: 24rem;
   max-height: 6rem;
 }

 @media only screen and (min-width: 29rem) {
   .print-media .cds img {
      max-width: 30rem;
      max-height: 9rem;
    }
 }

.what-i-did {
  margin-top: 5rem;
  margin-bottom: 3rem;
}

.what-i-did ul {
  padding-left: 1.3rem;
  display: block;
}

@media only screen and (min-width: 65.625rem) {
  .what-i-did ul {
    display: flex;
  }
}

.what-i-did  li {
  font-size: 1.2rem;
  padding: .3rem 0;
}

.what-i-did .dev-list-left {
  margin: 0 3rem 0 0;
  display: block;
  width: 100%;
}

.what-i-did .dev-list-right {
  margin: 0;
  display: block;
  width: 100%;
}

@media only screen and (min-width: 65.625rem) {
  .what-i-did .dev-list-right {
    margin: 0 0 0 3rem;
  }
}

.next-project {
  margin-top: 1.5rem;
}

.next-project p {
  display: inline-block;
  position: relative;
}

.next-project p:after {
  content: '';
  background-image: url(/portfolio/image/arrow-dev.png);
  background-size: 3rem;
  background-repeat: no-repeat;
  background-color: transparent;
  position: absolute;
  width: 3rem;
  height: 1rem;
  display: none;
  margin-left: 1rem;
  top: .25rem;
}

@media only screen and (min-width: 30rem) {
  .next-project p:after {
    display: inline-block;
  }
}

.next-project ul {
  display: block;
  width: auto;
  margin: 0;
  padding: 0;
}

.next-project li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 18px;
  background: #333;
  border-radius: 50%;
  opacity: .25;
}

.next-project li.active {
  opacity: 1;
}

.image-showcase {
  width: 95%;
  position: relative;
  height: 28rem;
  margin-bottom: 3rem;
  overflow: scroll;
  margin: 0 auto;
  display: block;
}

@media only screen and (min-width: 65.625rem) {
  .image-showcase {
    width: 100%;
  }
}

.image-showcase .h-images {
  position: absolute;
  height: 100%;
  width: 87%;
  left: 0;
  right: 0;
  margin: 0 auto;
}

@media only screen and (min-width: 65.625rem) {
  .image-showcase .h-images {
    width: 100%;
  }
}

.image-showcase .image {
  width: 100%;
  max-width: 35rem;
  display: block;
  border-radius: 2px;
  padding: 3rem 0 5rem;
  margin: 0 auto;
}

#hm-1.load {
  background: url('/portfolio/image/1-load.png');
}
#hm-1.unload {
  background: url('/portfolio/image/1-unload.png');
}
#hm-2.load {
  background: url('/portfolio/image/2-load.png');
}
#hm-2.unload {
  background: url('/portfolio/image/2-unload.png');
}
#hm-3.load {
  background: url('/portfolio/image/3-unload.png');
}
#hm-3.unload {
  background: url('/portfolio/image/3-unload.png');
}
#hm-4.load {
  background: url('/portfolio/image/4-unload.png');
}
#hm-4.unload {
  background: url('/portfolio/image/4-unload.png');
}

@media only screen and (min-width: 65.625rem) {
  .image-showcase .image {
    margin: 0;
  }
}

@media only screen and (min-width: 74rem) {
  .image-showcase .image {
    max-width: 39rem;
  }
}

.image-showcase .image:first-child {
  padding-top: 5.5rem;
  border-top: none;
}

.image-showcase .image:last-child {
  padding-bottom: 16rem;
  border-top: none;
}

@media only screen and (min-width: 65.625rem) {
  .image-showcase .image:first-child {
    border-top: 2px solid #73ADA1;
  }
  .image-showcase .image:last-child {
    border-bottom: 2px solid #73ADA1;
  }
}

.h-bottom-content {
  width: 80%;
  right: 0;
  padding: 3rem 0rem;
  position: relative;
  float: none;
  margin: 0 auto;
  border-top: 1px solid #ccc;
}

@media only screen and (min-width: 65.625rem) {
  .h-bottom-content {
    width: 38%;
    padding: 7rem 2rem 0 6rem;
    float: right;
    position: absolute;
    margin: 0;
    border: none;
  }
}

@media only screen and (min-width: 74rem) {
  .h-bottom-content {
    width: 45%;
  }
}

.cover-links.single {
  margin-top: auto
}





.featherlight .featherlight-content {
  margin: auto !important;
}

.featherlight .featherlight-inner {
    max-height: inherit;
    max-width: 75rem;
    margin: auto;
}

.footer {
  padding: 1rem 0;
  background: #fff;
  margin-top: 5rem;
}

.footer ul {
  padding: 0 .8rem;
  display: flex;
  align-items: center;
}

.footer ul li {
  list-style-type: none;
  margin: 0;
  width: 120px;
  padding-right: 1rem;
}

@media only screen and (min-width: 26.25rem) {
  .footer ul li {
    margin: 0 0 0 2rem;
    padding-right: 1rem;
  }
}

.footer ul li:last-child {
  margin-right: 0;
  margin-left: auto;
  width: 95px;
  display: none;
}

@media only screen and (min-width: 19.375rem) {
  .footer ul li:last-child {
    display: block;
  }
}

@media only screen and (min-width: 26.25rem) {
  .footer ul li:last-child {
    margin-right: 2rem;
  }
}

.footer ul li.linkedin {
  margin-left: auto;
  margin-top: -.5rem;
  padding-right: 0;
}

@media only screen and (min-width: 19.375rem) {
  .footer ul li.linkedin {
    padding-right: 21px;
  }
}

.footer .linkedin img {
  max-width: 3rem;
  margin-right: auto;
  margin-left: auto;
}

.footer-home ul li.linkedin {
  margin-left: auto;
  margin-right: auto;
  margin-top: -.5rem;
}

.footer-home .linkedin img {
  max-width: 3rem;
  margin-right: auto;
  margin-left: 0;
}

@media only screen and (min-width: 35rem) {
  .footer-home .linkedin img {
    margin-left: calc(50% - 165px);
  }
}

.footer-home ul li:last-child {
  display: block;
}

.footer-home ul li:first-child {
  padding-left: 0rem;
}

@media only screen and (min-width: 19.375rem) {
  .footer-home ul li:first-child {
    padding-left: 1rem;
  }
}

@media only screen and (min-width: 35rem) {
  .footer-home ul li:first-child {
    padding-left: 0;
  }
}

.linkedin a:hover {
  opacity: .6;
}

.su-layout-box a.light-box-desktop {
  display: none;
}

@media only screen and (min-width: 65.625rem) {
  .su-layout-box a.light-box-desktop {
    display: table;
  }
}

.light-box-desktop {
  display: none;
}

@media only screen and (min-width: 65.625rem) {
  .light-box-desktop {
    display: inherit;
  }
}

.su-layout-box a.light-box-mobile {
  display: inherit;
}

@media only screen and (min-width: 65.625rem) {
  .su-layout-box a.light-box-mobile {
    display: none;
  }
}

.images .light-box-mobile {
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.light-box-mobile {
  display: block;
}

@media only screen and (min-width: 65.625rem) {
  .light-box-mobile {
    display: none !important;
  }
}

.external-link-home::after {
  content: '';
  background-image: url(/portfolio/image/link-external.png);
  background-repeat: no-repeat;
  background-color: transparent;
  position: absolute;
  background-size: .65rem;
  width: .65rem;
  height: .65rem;
  margin-left: .65rem;
  top: .33rem;
}

@media only screen and (min-width: 65.625rem) {
  .external-link-home::after {
    background-size: .9rem;
    width: .9rem;
    height: .9rem;
    margin-left: .8rem;
    top: .8rem;
  }
}

.external-link-main::after {
  content: '';
  background-image: url(/portfolio/image/link-external.png);
  background-repeat: no-repeat;
  background-color: transparent;
  position: absolute;
  margin-left: .8rem;
  background-size: 1rem;
  width: 1rem;
  height: 1rem;
  top: 3.9rem;
}

@media only screen and (min-width: 35rem) {
  .external-link-main::after {
    width: 1.3rem;
    height: 1.3rem;
    top: 4.47rem;
    background-size: 1.3rem;
  }
}

@media only screen and (min-width: 65.625rem) {
  .external-link-main::after {
    top: 5.46rem;
  }
}

.external-link-inv::after {
  content: '';
  background-image: url(/portfolio/image/link-external.png);
  background-size: .7rem;
  background-repeat: no-repeat;
  background-color: transparent;
  position: absolute;
  width: .7rem;
  height: .7rem;
  margin-left: .7rem;
  bottom: 4.319rem;
 }
