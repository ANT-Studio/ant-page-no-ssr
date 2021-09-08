<template>
  <div class="contact">
    <div class="contact-wrapper">
      <div class="contact-titles">
        <h2>{{ __("contact.title") }}</h2>
        <p>{{ __("contact.subtitle") }}</p>
      </div>
      <form action="">
        <div class="contact-content">
          <div class="contact-data">
            <div class="contact-form-entry">
              <label for="name">{{ __("contact.label.name") }}</label>
              <input
                type="text"
                id="name"
                :placeholder="__('contact.placeholder.name')"
              />
            </div>
            <div class="contact-form-entry">
              <label for="email">{{ __("contact.label.email") }}</label>
              <input
                type="text"
                id="email"
                :placeholder="__('contact.placeholder.email')"
              />
            </div>
          </div>
          <div class="contact-message">
            <p>{{ __("contact.label.message") }}</p>
            <textarea
              id="message"
              :placeholder="__('contact.placeholder.message')"
            />
          </div>
        </div>
        <div class="contact-buttons">
          <input type="button" value="Send the message" />
        </div>
      </form>
    </div>
    <div class="decoration">
      <div />
      <div />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { __ } from "../../assets/utils";
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins";
@import "../../assets/styles/variables";
@import "../../assets/styles/themes";
.contact {
  position: relative;
  overflow: hidden;
  @include themed() {
    background: t("secondary-bg");
  }

  .contact-wrapper {
    @include sectionContainer();
    padding: 0 0 4em 0;
    .contact-titles {
      @include sectionTitle();
    }

    .contact-content {
      margin-top: 7em;
      display: flex;
      justify-content: space-between;

      .contact-data {
        width: 30%;
        display: flex;
        flex-direction: column;
        gap: 4em;
        .contact-form-entry {
          display: flex;
          flex-direction: column;
          gap: 1.5em;
          label {
            font-size: 1.5em;
            font-weight: bold;
          }

          input {
            width: calc(100% - 60px);
            font-size: 1.5em;
            padding: 15px 30px;
            @include themed() {
              background: t("bg");
              color: t("text");
            }
            outline: none;
            border: none;
            font-weight: bold;

            &::placeholder {
              @include themed() {
                color: t("secondary-gray");
              }
            }
          }
        }
      }

      .contact-message {
        width: 60%;
        display: flex;
        flex-direction: column;
        p {
          font-size: 1.5em;
          font-weight: bold;
          margin-bottom: 1em;
        }
        textarea {
          height: 100%;
          padding: 15px;
          resize: none;
          @include themed() {
            background: t("bg");
            color: t("text");
          }
          outline: none;
          border: none;
          font-size: 1.5em;
          font-weight: bold;
          &::placeholder {
            @include themed() {
              color: t("secondary-gray");
            }
          }
        }
      }
    }
  }

  .contact-buttons {
    margin-top: 4em;
    padding: 20px;
    align-content: center;
    display: flex;
    flex-direction: row-reverse;
    input {
      @include themed() {
        background: t("text");
        color: t("bg");
        box-shadow: 10px 10px 0px $secondary-shadow;
      }
      transition: all 0.1s ease-in-out;
      cursor: pointer;
      font-size: 2em;
      font-weight: bold;
      border: none;
      outline: none;
      padding: 7px 40px;

      &:hover {
        box-shadow: 5px 5px 0px $secondary-shadow;
        filter: invert(0.05);
      }
    }
  }
  .decoration {
    div {
      @include decoration() {
        &:first-child {
          top: 0;
          right: 30%;
          margin-top: -7em;
          transform: rotate(90deg);
        }

        &:last-child {
          bottom: 0;
          left: 8%;
          margin-bottom: -7em;
          transform: rotate(90deg);
        }
      }
    }
  }
}
</style>
