<template>
  <a :href="'cards/' + this.id" class="card" :style="'background:linear-gradient(#01092E4D, #01092EFF), center center url(\'src/assets/images/'+ this.id +'.jpg\')'">
    <div class="card-misc">
      <div class="card-power">{{this.power}}</div>
      <div class="card-class-type">
        <img :src="`src/assets/icons/types/${this.type}.svg`" alt="Chaos">
        <img :src="`src/assets/icons/classes/${this.class}.svg`" alt="Warrior">
      </div>
    </div>
    <div class="card-info">
      <div class="card-names">
        <h2 class="card-name">{{this.name}}</h2>
        <p class="card-surname">{{this.surname}}</p>
      </div>
      <div class="card-abilities">
        <svg 
          v-for="(active, index) in this.active"
          :key="index" 
          width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.0775 13.0909H5.75934L11.8048 1V7.90909H16.123L10.0775 20V13.0909Z" fill="#1400FF"/>
        </svg>
        <svg 
          v-for="(passive, index) in this.passive"
          :key="index" 
          width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.0775 13.0909H5.75934L11.8048 1V7.90909H16.123L10.0775 20V13.0909Z" fill="#FF0043"/>
        </svg>              
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    props: {
      id: {
        type: Number,
        default: 0,
      },
      power: {
        type: Number,
        default: 0,
      },
      type: {
        type: String,
        default: 'chaos',
      },
      class: {
        type: String,
        default: 'warrior',
      },
      name: {
        type: String,
        default: 'Name',
      },
      surname: {
        type: String,
        default: 'Surname',
      },
      active: {
        type: Number,
        default: 2,
      },
      passive: {
        type: Number,
        default: 1,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    width: 165px;
    height: 250px;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    border-radius: 15px;
    transition: 0.3s;
    text-decoration: none;

    &:hover {
      transform: scale(.97);
      box-shadow: inset 0px 0px 30px #1400FF;
    }

    &-misc {
      display: flex;
      justify-content: space-between;
    }

    &-power {
      font-size: 24px;
      font-weight: bold;
      color: #EEE;
    }

    &-class-type {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    &-info {
      align-self: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }

    &-names {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }

    &-name {
      font-size: 16px;
      font-weight: bold;
      color: #EEE;
    }

    &-surname {
      font-size: 12px;
      font-weight: bold;
      color: #808080;
    }

  }
  
  @media screen and (min-width: 675px) {
    .card {
      width: 250px;
      height: 350px;
    }
  }
</style>