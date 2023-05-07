<template>
  <div class="input">
    <div class="input-label">{{this.label}}</div>
    <label
      class="input-field"
      :class="this.type === 'file' && 'file'"
      :for="this.name"
    >
      <div v-if="this.type === 'file'" class="image-container">
        <img v-if="imgUploaded" class="input-img" src="../assets/images/0.jpg">
      </div>
      <input
        :type="this.type"
        :name="this.name"
        :id="this.name"
        :placeholder="this.placeholder"
        :value="this.value"
        :accept="this.type === 'file' && 'image/*'"
        :class="this.type === 'file' && 'button'"
        :min="this.type === 'number' && '1'"
        :max="this.type === 'number' && '100'"
        @change="onUpload"
      >
      <component class="input-icon" v-if="this.icon" :is="this.icon" />
    </label>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
      },
      label: {
        type: String,
      },
      placeholder: {
        type: String,
      },
      icon: {
        type: String,
      },
      type: {
        type: String,
        default: 'text',
      },
      value: {
        type: String,
      }
    },
    data() {
      return {
        imgUploaded: false
      }
    },
    methods: {
      onUpload() {
        let { target }= event;
        if (target.type !== 'file'){
          return;
        } else {
          this.imgUploaded = true;
          if (target.files && target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
              document.querySelector('.input-img').src = e.target.result;
            }
            reader.readAsDataURL(target.files[0])
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .input {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &-label {
      font-weight: 800;
    }

    input {
      font-family: 'Raleway', sans-serif;
      width: 100%;
      background-color: transparent;
      border: none;

      &:focus{
        outline: none;
      }
    }

    &-field {
      width: 500px;
      
      &:not(.file) {
        height: 46px;
        padding: 16px;
        border-radius: 10px;
        background-color: white;
        border: 1px solid #0000001A;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &.file {
        display: flex;
        align-items: center;
        gap: 32px;

        input {
          display: flex;
          width: min-content;
        }

        input::file-selector-button {
          font-family: 'Raleway', sans-serif;
          background-color: var(--blue);
          padding: 16px;
          margin-right: 32px;
          border: none;
          border-radius: 10px;
          color: white;
          text-decoration: none;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          gap: 16px;
          transition: 0.3s;

          &:hover {
            background-color: darken(#1400FF, 15%);
          }
        }
      }
    }

    &-icon {
      width: 24px;
      height: 24px;
    }

    .image-container {
      width: 64px;
      height: 64px;
      border-radius: 1000px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      background-color: #1400FF;

      img {
        transform: scale(1.4);
      }
    }
  }
</style>