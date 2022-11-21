<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <ul class="header-top__left menu">
          <li>
            <router-link to="/home-page" class="grey">
              Welcome
            </router-link>
          </li>
          <li>
            <a
                class="grey"
                href="#"
                @click="popUpOpen = true, popUpOpenName = 'popUpLogin'"
            >
              Sing in
            </a>
          </li>
          <li>
            <a
                class="grey"
                href="#"
                @click="popUpOpen = true, popUpOpenName = 'popUpRegister'"
            >
              Register
            </a>
          </li>
        </ul>
        <ul class="header-top__right menu">
          <li><a class="grey" href="#">How to Buy</a></li>
          <li><a class="grey" href="#">Customer assistance</a></li>
          <li><a class="grey" href="#">Payment and delivery</a></li>
        </ul>
      </div>
    </div>

    <div class="header-bottom">
      <div class="container">
        <router-link to="/" class="header-bottom__logo">ISLIM</router-link>
        <div class="header-bottom__search">
          <select name="" id="">
            <option>Categories1</option>
            <option>Categories2</option>
            <option>Categories3</option>
            <option>Categories4</option>
          </select>
          <input type="text" placeholder="">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                  d="M15.5108 14.8859L11.7357 11.1858C12.6715 10.0676 13.2355 8.63525 13.2355 7.07415C13.2355 3.49336 10.2711 0.587891 6.61775 0.587891C2.96116 0.587891 0 3.49336 0 7.07415C0 10.6549 2.96116 13.5604 6.61775 13.5604C8.21049 13.5604 9.66864 13.0107 10.8095 12.0935L14.5847 15.7905C14.8411 16.0418 15.2545 16.0418 15.5108 15.7905C15.7672 15.5424 15.7672 15.1341 15.5108 14.8859ZM6.61775 12.2694C3.69184 12.2694 1.31393 9.93878 1.31393 7.07415C1.31393 4.20951 3.69184 1.87572 6.61775 1.87572C9.54045 1.87572 11.9216 4.20951 11.9216 7.07415C11.9216 9.93878 9.54045 12.2694 6.61775 12.2694Z"
                  fill="white"/>
            </svg>
            Search
          </button>
        </div>
        <div class="header-bottom__info">
          <div class="header-account">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
              <path
                  d="M9.42041 10.1504C12.4139 10.1504 14.8407 8.01257 14.8407 5.37518C14.8407 2.73794 12.4139 0.599976 9.42041 0.599976C6.4269 0.599976 4.00012 2.73794 4.00012 5.37518C4.00301 8.01158 6.42802 10.1478 9.42041 10.1504ZM9.42041 1.50349C11.8477 1.50349 13.8151 3.23708 13.8151 5.37518C13.8151 7.51357 11.8477 9.24687 9.42041 9.24687C6.99331 9.24687 5.02585 7.51357 5.02585 5.37518C5.02858 3.23793 6.99443 1.50603 9.42041 1.50349Z"
                  fill="#828C90"/>
              <mask id="path-2-inside-1_1_336" fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0 20.3981H18.4086C17.668 15.513 13.829 11.7906 9.20429 11.7906C4.57962 11.7906 0.74055 15.513 0 20.3981Z"/>
              </mask>
              <path
                  d="M0 20.3981L-0.988704 20.2482C-1.03238 20.5363 -0.948221 20.8291 -0.758249 21.0501C-0.568276 21.271 -0.291384 21.3981 0 21.3981V20.3981ZM18.4086 20.3981V21.3981C18.7 21.3981 18.9769 21.271 19.1668 21.0501C19.3568 20.8291 19.441 20.5363 19.3973 20.2482L18.4086 20.3981ZM0 21.3981H18.4086V19.3981H0V21.3981ZM9.20429 12.7906C13.254 12.7906 16.7407 16.0676 17.4199 20.548L19.3973 20.2482C18.5954 14.9584 14.4039 10.7906 9.20429 10.7906V12.7906ZM0.988704 20.548C1.6679 16.0676 5.15456 12.7906 9.20429 12.7906V10.7906C4.00467 10.7906 -0.186803 14.9584 -0.988704 20.2482L0.988704 20.548Z"
                  fill="#828C90" mask="url(#path-2-inside-1_1_336)"/>
            </svg>
          </div>
          <div
              class="header-favorites"
              :data-amount="(FAVORITES.length) ? FAVORITES.length : 0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
              <path
                  d="M11.0149 3.23498L11.4427 3.94168L11.8704 3.235C12.8095 1.68371 14.4851 0.652832 16.3979 0.652832C19.3284 0.652832 21.7172 3.06736 21.7172 6.06217C21.7172 7.69048 21.0072 9.1457 19.8881 10.137L19.8753 10.1483L19.8634 10.1605L11.6174 18.5346C11.5698 18.583 11.5068 18.6087 11.4427 18.6087C11.3786 18.6087 11.3156 18.583 11.2679 18.5346L3.02201 10.1605L3.01005 10.1483L2.99729 10.137C1.87823 9.14571 1.16834 7.6905 1.16834 6.06217C1.16834 3.06727 3.55642 0.652832 6.48687 0.652832C8.39974 0.652832 10.0761 1.68378 11.0149 3.23498Z"
                  stroke="#828C90"/>
            </svg>
          </div>
          <router-link
              to="/cart"
              class="header-cart"
              :data-amount="(CART.length) ? CART.length : 0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 17 24" fill="none">
              <path
                  d="M16.5758 23.1088H0.428019C0.33438 23.1088 0.244841 23.0699 0.180592 23.0012C0.116342 22.9325 0.0821673 22.8402 0.0862683 22.7451L0.855208 6.34711C0.864094 6.16179 1.01378 6.01672 1.19696 6.01672H15.8068C15.9893 6.01672 16.1397 6.16179 16.1486 6.34711L16.9175 22.7451C16.9216 22.8402 16.8881 22.9325 16.8232 23.0012C16.7583 23.0699 16.6687 23.1088 16.5758 23.1088ZM0.786174 22.4147H16.2169L15.4808 6.71082H1.52231L0.786174 22.4147Z"
                  fill="#828C90"/>
              <path
                  d="M12.1944 8.09906C12.0057 8.09906 11.8526 7.94358 11.8526 7.75201V4.30236C11.8526 2.42553 10.3489 0.89783 8.50005 0.89783C6.65118 0.89783 5.14747 2.42553 5.14747 4.30236V7.75201C5.14747 7.94358 4.99437 8.09906 4.80572 8.09906C4.61708 8.09906 4.46397 7.94358 4.46397 7.75201V4.30236C4.46397 2.04239 6.27457 0.203735 8.50005 0.203735C10.7255 0.203735 12.5361 2.04239 12.5361 4.30236V7.75201C12.5361 7.94358 12.3837 8.09906 12.1944 8.09906Z"
                  fill="#828C90"/>
            </svg>
          </router-link>
        </div>
      </div>
    </div>

    <PopUpRegister
        :pop-up-status="popUpOpen"
        :pop-up-open-name="popUpOpenName"
        @closePopUp="closePopUp"
        @backToLogin="backToLogin"
    />

    <PopUpLogin
        :pop-up-status="popUpOpen"
        :pop-up-open-name="popUpOpenName"
        @closePopUp="closePopUp"
    />
  </header>
</template>

<script>
import {mapGetters} from "vuex"
import PopUpRegister from "@/components/pop-up/PopUpRegister";
import PopUpLogin from "@/components/pop-up/PopUpLogin";


export default {
  name: "TheHeader",
  components: {
    PopUpRegister,
    PopUpLogin
  },
  data() {
    return {
      popUpOpen: false,
      popUpOpenName: null,
    }
  },
  computed: {
    ...mapGetters('cart', [
      'CART'
    ]),
    ...mapGetters('favorites', [
      'FAVORITES'
    ]),
  },
  methods: {
    closePopUp() {
      this.popUpOpen = false;
      this.popUpName = null;
    },
    backToLogin() {
      this.popUpOpen = true;
      this.popUpOpenName = 'popUpLogin';
    },
  }
}
</script>

<style lang="scss" scoped>
.header {
  .header-top {
    border-bottom: 1px solid #B0BEC5;

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 0;
    }
  }

  .menu {
    display: flex;
    align-items: center;

    li {
      position: relative;

      & + li {
        margin-left: 10px;
        padding-left: 12px;

        &::before {
          position: absolute;
          content: "";
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          display: block;
          height: 10px;
          border-left: 1px solid $grey;
        }
      }

      a {
        font-family: $base-font;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
      }
    }
  }

  .header-bottom {
    border-bottom: 1px solid #B0BEC5;

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 35px 0;
    }

    .header-bottom__logo {
      font-weight: 500;
      font-size: 36px;
      line-height: 44px;
      color: #424140;
    }

    .header-bottom__search {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 780px;
      background: #FFFFFF;
      border: 1px solid #B1B8BB;
      border-radius: 4px;

      select {
        max-width: 115px;
        width: 100%;
        height: 100%;
        padding: 10px 14px 10px 8px;
        border: none;
        border-right: 1px solid #B1B8BB;
        border-radius: 4px 0px 0px 4px;
        outline: unset;
      }

      input {
        width: 100%;
        height: 100%;
        padding: 10px 15px;
        border: none;
        outline: unset;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 97px;
        width: 100%;
        height: 100%;
        padding: 10px 14px;
        background: #B1B8BB;
        border: none;
        border-radius: 0px 4px 4px 0px;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
        outline: unset;

        svg {
          display: block;
          margin-right: 5px;
        }
      }
    }

    .header-bottom__info {
      display: flex;
      align-items: center;
      gap: 24px;
    }
  }

  .header-account {
  }

  .header-cart {
  }

  .header-favorites {
  }

  .header-cart,
  .header-favorites {
    position: relative;

    &::before {
      content: attr(data-amount);
      position: absolute;
      top: -10px;
      right: -10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      padding: 4px;
      border-radius: 50%;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: $white;
      background: #E44747;
    }
  }
}
</style>