<script>
  import { RouterLink, RouterView } from 'vue-router';

  export default {
    data() {
      return {
        urlLocation: null,
        showMenu: false,
      }
    },
    watch: {
      $route(to, from) {
        this.urlLocation = to.path.split('/')[1];
        this.showMenu = false;
      },
    }
  }
</script>

<template>
  <nav>
    <img class="logo" src="./assets/logo.svg" alt="Runic Arena Logo">
    <img class="logo-min" src="./assets/logo-min.svg" alt="Runic Arena Logo Minifié">
    <img class="burger" src="./assets/icons/menu.svg" alt="Menu" @click="showMenu = true">
    <ul :class="showMenu && 'show-menu'">
      <li @click="showMenu = false">
        <img src="./assets/icons/cross.svg" alt="Croix">
      </li>
      <li :class="urlLocation === 'cards' && 'active'">
        <RouterLink to="/cards">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
            <path d="M9.42439 1C9.16439 1 8.90439 1.06 8.65439 1.15L1.29439 4.2C0.805151 4.40035 0.4155 4.78678 0.211101 5.27433C0.00670195 5.76189 0.00428748 6.31066 0.204388 6.8L5.16439 18.75C5.3109 19.1125 5.56042 19.424 5.88211 19.6462C6.20379 19.8683 6.58354 19.9914 6.97439 20C7.23439 20 7.50439 19.97 7.76439 19.85L15.1344 16.8C15.4901 16.649 15.7951 16.3992 16.0131 16.0802C16.2311 15.7611 16.353 15.3863 16.3644 15C16.3744 14.75 16.3244 14.46 16.2344 14.2L11.2344 2.25C11.093 1.88402 10.8448 1.56906 10.522 1.34612C10.1992 1.12317 9.8167 1.00257 9.42439 1ZM12.9044 1L16.3544 9.35V3C16.3544 2.46957 16.1437 1.96086 15.7686 1.58579C15.3935 1.21071 14.8848 1 14.3544 1M18.3644 2.54V11.57L20.7944 5.71C20.894 5.46777 20.9448 5.20825 20.9439 4.94633C20.9431 4.68441 20.8905 4.42524 20.7892 4.18369C20.6879 3.94214 20.54 3.72295 20.3538 3.53871C20.1677 3.35446 19.947 3.20877 19.7044 3.11M9.42439 2.97L14.4044 14.99L7.01439 18.05L2.03439 6.04" fill="white"/>
          </svg>
          Cartes
        </RouterLink>
      </li>
      <li :class="urlLocation === 'abilities' && 'active'">
        <RouterLink to="/abilities">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
            <path d="M9.63637 13.0909H5.31818L11.3636 1V7.90909H15.6818L9.63637 20V13.0909Z" fill="white"/>
          </svg>
          Capacités
        </RouterLink>
      </li>
      <li :class="urlLocation === 'skills' && 'active'">
        <RouterLink to="/skills">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 1C9.25244 1 8.0171 1.24572 6.86451 1.72314C5.71191 2.20056 4.66464 2.90033 3.78249 3.78249C2.00089 5.56408 1 7.98044 1 10.5C1 13.0196 2.00089 15.4359 3.78249 17.2175C4.66464 18.0997 5.71191 18.7994 6.86451 19.2769C8.0171 19.7543 9.25244 20 10.5 20C13.0196 20 15.4359 18.9991 17.2175 17.2175C18.9991 15.4359 20 13.0196 20 10.5C20 9.398 19.8005 8.3055 19.4205 7.2795L17.9005 8.7995C18.0335 9.36 18.1 9.93 18.1 10.5C18.1 12.5156 17.2993 14.4487 15.874 15.874C14.4487 17.2993 12.5156 18.1 10.5 18.1C8.48435 18.1 6.55126 17.2993 5.12599 15.874C3.70071 14.4487 2.9 12.5156 2.9 10.5C2.9 8.48435 3.70071 6.55126 5.12599 5.12599C6.55126 3.70071 8.48435 2.9 10.5 2.9C11.07 2.9 11.64 2.9665 12.2005 3.0995L13.73 1.57C12.6945 1.1995 11.602 1 10.5 1ZM17.15 1L13.35 4.8V6.225L10.9275 8.6475C10.785 8.6 10.6425 8.6 10.5 8.6C9.99609 8.6 9.51282 8.80018 9.1565 9.1565C8.80018 9.51282 8.6 9.99609 8.6 10.5C8.6 11.0039 8.80018 11.4872 9.1565 11.8435C9.51282 12.1998 9.99609 12.4 10.5 12.4C11.0039 12.4 11.4872 12.1998 11.8435 11.8435C12.1998 11.4872 12.4 11.0039 12.4 10.5C12.4 10.3575 12.4 10.215 12.3525 10.0725L14.775 7.65H16.2L20 3.85H17.15V1ZM10.5 4.8C8.98827 4.8 7.53845 5.40053 6.46949 6.46949C5.40053 7.53845 4.8 8.98827 4.8 10.5C4.8 12.0117 5.40053 13.4616 6.46949 14.5305C7.53845 15.5995 8.98827 16.2 10.5 16.2C12.0117 16.2 13.4616 15.5995 14.5305 14.5305C15.5995 13.4616 16.2 12.0117 16.2 10.5H14.3C14.3 11.5078 13.8996 12.4744 13.187 13.187C12.4744 13.8996 11.5078 14.3 10.5 14.3C9.49218 14.3 8.52563 13.8996 7.81299 13.187C7.10036 12.4744 6.7 11.5078 6.7 10.5C6.7 9.49218 7.10036 8.52563 7.81299 7.81299C8.52563 7.10036 9.49218 6.7 10.5 6.7V4.8Z" fill="white"/>
          </svg>
          Compétences
        </RouterLink>
      </li>
      <li :class="urlLocation === 'classes' && 'active'">
        <RouterLink to="/classes">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 1C11.7598 1 12.968 1.50044 13.8588 2.39124C14.7496 3.28204 15.25 4.49022 15.25 5.75C15.25 7.00978 14.7496 8.21796 13.8588 9.10876C12.968 9.99956 11.7598 10.5 10.5 10.5C9.24022 10.5 8.03204 9.99956 7.14124 9.10876C6.25044 8.21796 5.75 7.00978 5.75 5.75C5.75 4.49022 6.25044 3.28204 7.14124 2.39124C8.03204 1.50044 9.24022 1 10.5 1ZM10.5 12.875C15.7487 12.875 20 15.0006 20 17.625V20H1V17.625C1 15.0006 5.25125 12.875 10.5 12.875Z" fill="white"/>
          </svg>
          Classes
        </RouterLink>
      </li>
      <li :class="urlLocation === 'types' && 'active'">
        <RouterLink to="/types">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 1C12.3789 1 14.2156 1.55717 15.7779 2.60104C17.3402 3.64491 18.5578 5.12861 19.2769 6.86451C19.9959 8.6004 20.184 10.5105 19.8175 12.3534C19.4509 14.1962 18.5461 15.8889 17.2175 17.2175C15.8889 18.5461 14.1962 19.4509 12.3534 19.8175C10.5105 20.184 8.6004 19.9959 6.86451 19.2769C5.12861 18.5578 3.64491 17.3402 2.60104 15.7779C1.55717 14.2156 1 12.3789 1 10.5C1 7.98044 2.00089 5.56408 3.78248 3.78248C5.56408 2.00089 7.98044 1 10.5 1Z" fill="white"/>
          </svg>
          Types
        </RouterLink>
      </li>
    </ul>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
  nav {
    background-color: var(--black);
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      width: 100%;
      height: auto;
      margin-bottom: 128px;
      display: none;
    }

    .logo-min {
      width: 30px;
      height: auto;
    }

    .burger {
      width: 30px;
      height: auto;
    }
    
    ul {
      position: fixed;
      background-color: var(--black);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: 0.3s;
      transform: translateX(100%);
      z-index: 99;

      list-style-type: none;
      margin: 0;
      padding: 0;

      &.show-menu {
        transform: translateX(0%);
      }

      li {
        padding: 12px 16px;
        border-radius: 15px;
        position: relative;

        &:first-of-type {
          position: absolute;
          top: 0;
          right: 0;
          padding: 16px;
        }

        &.active {
          background-color: #F4F4F4;

          svg path {
            fill: var(--blue);
          }

          a {
            color: var(--black);
          }
        }

        a {
          text-decoration: none;
          color: white;
          font-size: 16px;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 16px;
        }
      }
    }
  }

  main {
    padding: 32px;
    width: 100%;
  }

  @media screen and (min-width: 675px) {
    nav {
      display: block;
      padding: 64px 32px;
      
      .logo {
        display: block;
        height: 76px;
        width: auto;
      }
      .logo-min {
        display: none;
      }
      .burger {
        display: none;
      }

      ul {
        position: static;
        display: block;
        background-color: transparent;
        transform: translateX(0);
        
        li:first-of-type {
          display: none;
        }

        li {
          width: 100%;
        }
      }
    }

    main {
      padding: 64px;
    }
  }
</style>
