<template>
  <div class="movie-card">
    <div class="movie-card__poster">
      <img
        :src="`http://www.kinopoisk.ru/images/film_big/${movieData.id_kinopoisk}.jpg`"
        :alt="`Постер фильма ${movieData.title}`"
      />
    </div>
    <div class="movie-card__content">
      <router-link
        class="movie-card__link"
        :to="{ name: 'movie', params: { movieId: movieData.id } }"
      >
        <h3 class="movie-card__title">{{ movieData.title }}</h3>
      </router-link>
      <p class="movie-card__details">
        <span v-if="movieData.year">{{ movieData.year }}, </span>
        <span v-if="movieData.genres">{{ movieData.genres[0] }}</span>
      </p>
      <p class="movie-card__details">
        <span v-if="movieData.directors">Режиссёр: {{ movieData.directors[0] }}</span>
      </p>
      <p class="movie-card__details" v-if="actorList">
        Актёры:
        <span v-for="(actor, idx) in actorList" :key="idx" class="movie-card__actor-list">{{
          actor
        }}</span>
      </p>
      <p class="movie-card__description" v-if="movieData.description">
        {{ movieData.description }}
      </p>
      <span v-if="movieData.collapse.duration" class="movie-card__duration">
        {{ movieData.collapse.duration[0] + ':00' }}
        <span class="icon icon_duration"
          ><svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 0V2H12V0H4V2H2V0H0V18H2V16H4V18H12V16H14V18H16V0H14ZM4 14H2V12H4V14ZM4 10H2V8H4V10ZM4 6H2V4H4V6ZM10 16H6V2H10V16ZM14 14H12V12H14V14ZM14 10H12V8H14V10ZM14 6H12V4H14V6Z"
              fill="#FA2828"
              fill-opacity="0.98"
            />
          </svg>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movieData: {
      type: Object,
      require: true,
    },
  },
  computed: {
    actorList() {
      return this.movieData.actors?.join(', ');
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-card {
  position: relative;
  display: flex;
  background-color: #4d4747;
  margin-bottom: 24px;
  transition: all 0.5s ease-in-out;
  &__poster {
    min-width: 168px;
    min-height: 168px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c4c4c4;
    & img {
      width: 112px;
      height: auto;
    }
  }
  &__content {
    padding: 32px 32px 32px 24px;
  }
  &__link {
    text-decoration: none;
    &:hover {
      text-decoration: underline white;
    }
  }
  &__title {
    font-weight: 700;
    font-size: 36px;
    color: #ffffff;
    margin-bottom: 12px;
    text-decoration: none;
  }
  &__details {
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    color: #988f8f;
    &:not(:last-of-type) {
      margin-bottom: 8px;
    }
  }
  &__actor-list {
    font-size: 12px;
    text-transform: none;
    font-weight: 400;
    line-height: 16px;
    color: #e5e5e5;
  }
  &__description {
    line-height: 20px;
    color: #ffffff;
    margin-top: 16px;
  }
  &__duration {
    position: absolute;
    right: 0;
    top: 32px;
    background-color: #c4c4c4;
    padding: 6px 28px 6px 18px;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    & .icon_duration {
      margin-left: 12px;
    }
    &::after {
      content: '';
      position: absolute;
      z-index: 0;
      top: 0;
      left: -5px;
      width: 10%;
      height: 100%;
      background-color: #c4c4c4;
      transform: skewX(-7deg);
    }
  }
}
</style>
