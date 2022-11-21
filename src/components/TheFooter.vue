<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__info">
        <a class="footer__info--logo">
          ISLIM
        </a>
        <ul class="footer__info--links">
          <li>
            <a href="mailto:contact@leebros.us">
              contact@leebros.us
            </a>
          </li>
          <li>
            <a href="tel:+1 (00) 86 868 868 777">
              +1 (00) 86 868 868 777
            </a>
          </li>
          <li>© 2019 ISLIM America Inc.</li>
        </ul>
        <ul class="footer__info--media">
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="7" height="16" viewBox="0 0 7 16" fill="none">
                <path
                    d="M6.48999 8.22043H4.48422V15.7922H1.44531V8.22043H0V5.55939H1.44531V3.8374C1.44531 2.60599 2.01298 0.677734 4.51127 0.677734L6.7623 0.687438V3.27043H5.12903C4.86113 3.27043 4.48442 3.40835 4.48442 3.99577V5.56187H6.75549L6.48999 8.22043Z"
                    fill="#444546"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                <path
                    d="M10.733 15.7324H4.12782C1.88472 15.7324 0.0598145 13.8904 0.0598145 11.6264V4.95956C0.0598145 2.69545 1.88472 0.853516 4.12782 0.853516H10.733C12.9763 0.853516 14.8012 2.69553 14.8012 4.95956V11.6264C14.8013 13.8904 12.9763 15.7324 10.733 15.7324ZM13.4934 4.95956C13.4934 3.42337 12.2551 2.17364 10.7331 2.17364H4.12782C2.60591 2.17356 1.36774 3.42337 1.36774 4.95956V11.6264C1.36774 13.1625 2.60591 14.4123 4.12782 14.4123H10.733C12.255 14.4123 13.4933 13.1625 13.4933 11.6264V4.95956H13.4934Z"
                    fill="#444546"/>
                <path
                    d="M7.43082 12.1277C5.3363 12.1277 3.63232 10.4078 3.63232 8.29361C3.63232 6.17956 5.3363 4.45972 7.43082 4.45972C9.52534 4.45972 11.2293 6.17956 11.2293 8.29361C11.2293 10.4078 9.52534 12.1277 7.43082 12.1277ZM7.43082 5.77999C6.05758 5.77999 4.94026 6.9076 4.94026 8.2937C4.94026 9.67989 6.05749 10.8076 7.43082 10.8076C8.80414 10.8076 9.92138 9.67989 9.92138 8.2937C9.92138 6.9076 8.80406 5.77999 7.43082 5.77999Z"
                    fill="#444546"/>
                <path
                    d="M11.3881 13.2471C11.1361 13.2471 10.8886 13.1441 10.7106 12.9637C10.5318 12.7841 10.429 12.5342 10.429 12.2789C10.429 12.0245 10.5318 11.7746 10.7106 11.5942C10.8885 11.4146 11.1361 11.3108 11.3881 11.3108C11.641 11.3108 11.8877 11.4146 12.0665 11.5942C12.2452 11.7746 12.3473 12.0246 12.3473 12.2789C12.3473 12.5342 12.2452 12.7841 12.0665 12.9637C11.8886 13.1441 11.641 13.2471 11.3881 13.2471Z"
                    fill="#444546"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18.4185 2.61479C17.7513 2.91342 17.0336 3.1154 16.2809 3.20561C17.0494 2.74086 17.6392 2.00549 17.9176 1.12781C17.1985 1.55838 16.4017 1.87074 15.5543 2.0391C14.8755 1.30934 13.9083 0.853271 12.8372 0.853271C10.7824 0.853271 9.11575 2.53551 9.11575 4.60967C9.11575 4.9041 9.14877 5.19068 9.21261 5.46578C6.11973 5.30918 3.37738 3.81379 1.54175 1.54045C1.22147 2.09513 1.03775 2.74086 1.03775 3.42916C1.03775 4.73209 1.69523 5.88235 2.69325 6.5558C2.08351 6.53647 1.50928 6.36755 1.00777 6.08545C1.00749 6.10142 1.00749 6.11738 1.00749 6.13307C1.00749 7.95314 2.29083 9.47122 3.99296 9.81607C3.68101 9.90236 3.35157 9.94802 3.0127 9.94802C2.77235 9.94802 2.5395 9.92477 2.31247 9.88106C2.78595 11.3731 4.16004 12.4592 5.78891 12.4897C4.51501 13.4974 2.91057 14.0977 1.16652 14.0977C0.866782 14.0977 0.569817 14.0801 0.279236 14.0451C1.92531 15.1113 3.88195 15.7329 5.98346 15.7329C12.8286 15.7329 16.5721 10.0091 16.5721 5.04473C16.5721 4.88197 16.5685 4.71976 16.5612 4.55896C17.2889 4.0295 17.9198 3.36809 18.4185 2.61479Z"
                    fill="#444546"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div class="footer__help footer-menu">
        <p class="light-black">HELP</p>
        <ul>
          <li><a class="light-black" href="#">Orders & Returns</a></li>
          <li><a class="light-black" href="#">Search Terms</a></li>
          <li><a class="light-black" href="#">Advance Search</a></li>
          <li><a class="light-black" href="#">Affiliates</a></li>
        </ul>
      </div>

      <div class="footer__account footer-menu">
        <p class="light-black">MY ACCOUNT</p>
        <ul>
          <li><a class="light-black" href="#">About Us</a></li>
          <li><a class="light-black" href="#">Delivery Information</a></li>
          <li><a class="light-black" href="#">Privacy & Policy</a></li>
          <li><a class="light-black" href="#">Terms & Conditions</a></li>
        </ul>
      </div>

      <div class="footer__contact">
        <p>CONTACT</p>

        <div class="footer-input-wrap">
          <input type="text" placeholder="Name">
        </div>

        <div class="footer-input-wrap">
          <input type="text" placeholder="Email Address">
          <div class="btn-ok">OK</div>
        </div>

        <ul class="footer__contact--payments"></ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 18px 0 38px;
  background: #ECEEF0;

  .container {
    display: flex;
    justify-content: space-between;
  }

  &__info {
    &--logo {
      margin-bottom: 10px;
      font-family: $base-font;
      font-weight: 500;
      font-size: 36px;
      line-height: 44px;
      color: $light-black;
    }

    &--links {
      li {
        & + li {
          margin-top: 10px;
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          color: $light-black;
        }

        a {
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          color: $light-black;
        }
      }
    }

    &--media {
      display: flex;
      align-items: center;
      margin-top: 12px;

      li {
        & + li {
          margin-left: 15px;
        }
      }
    }
  }

  .footer-menu {
    p {
      margin-bottom: 23px;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
    }

    ul {
      li {
        & + li {
          margin-top: 10px;
        }

        a {
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
        }
      }
    }
  }

  &__contact {
    p {
      margin-bottom: 25px;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
    }

    .footer-input-wrap {
      width: 250px;
      background: #FFFFFF;
      border-radius: 4px;

      & + .footer-input-wrap {
        margin-top: 15px;
        display: flex;
        align-items: center;
      }

      input {
        width: 100%;
        padding: 12px 6px;
        border: none;
        border-radius: 4px;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #C4C4C4;
      }

      .btn-ok {
        height: 100%;
        padding: 12px 10px;
        background: #B0BEC5;
        border-radius: 0px 4px 4px 0px;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
      }
    }
  }
}
</style>