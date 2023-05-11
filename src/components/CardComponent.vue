<template>
  <a :href="'cards/' + card.id" class="card" :style="'background:linear-gradient(#01092E4D, #01092EFF), center center url(\'src/assets/images/0.jpg\')'">
    <div class="card-misc">
      <div class="card-power">{{ card.power }}</div>
      <div class="card-class-type">
        <ToolTipComponent>
          <template v-slot:content>{{ card.typeName }}</template>
          <template v-slot:icon>
            <TypeIcon color="FFF"/>
          </template>
        </ToolTipComponent>
        <ToolTipComponent>
          <template v-slot:content>{{ card.className }}</template>
          <template v-slot:icon>
            <ClassIcon color="FFF" />
          </template>
        </ToolTipComponent>
      </div>
    </div>
    <div class="card-info">
      <div class="card-names">
        <h2 class="card-name">{{ card.name }}</h2>
        <p class="card-surname">{{ card.surname }}</p>
      </div>
      <div class="card-abilities">
        <svg 
          v-for="(active, index) in card.active"
          :key="index" 
          width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.0775 13.0909H5.75934L11.8048 1V7.90909H16.123L10.0775 20V13.0909Z" fill="#1400FF"/>
        </svg>
        <svg 
          width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.0775 13.0909H5.75934L11.8048 1V7.90909H16.123L10.0775 20V13.0909Z" fill="#FF0043"/>
        </svg>              
      </div>
    </div>
  </a>
</template>

<script>
  import TypeIcon from '../components/icons/TypeIcon.vue';
  import ClassIcon from '../components/icons/ClassIcon.vue';
  import ToolTipComponent from '../components/ToolTipComponent.vue';
  export default {
    components: {
    TypeIcon,
    ClassIcon,
    ToolTipComponent,
  },
    props: {
      card: {
        type: Object,
        id: {
          type: Number,
        },
        power: {
          type: Number,
        },
        class: {
          type: String,
        },
        name: {
          type: String,
        },
        surname: {
          type: String,
        },
        active: {
          type: Number,
        },
        passive: {
          type: Number,
        }
      },
    },
    updated() {
      console.log(this.card);
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
      align-items: flex-end;
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