<template>
  <div class="movie-card">
    <div class="movie-card__poster">
      <img :src="`http://www.kinopoisk.ru/images/film_big/${1003587}.jpg`" alt="" />
    </div>
    <div class="movie-card__content">
      <h3 class="movie-card__title">Гамильтон</h3>
      <p class="movie-card__details">
        <span> 2015, Мюзикл</span>
      </p>
      <p class="movie-card__details">
        <span>Режиссёр: Томас Каил</span>
      </p>
      <p class="movie-card__details">
        Актёры:
        <span class="movie-card__actor-list"> Лин-Мануэль Миранда, </span>
        <span class="movie-card__actor-list"> Лесли Одом мл. </span>
      </p>
      <p class="movie-card__description">
        Жил-был пёс. Верно служил, но выгнали его по старости. И решил он повеситься, да повстречал
        в лесу такого же старого волка
      </p>
      <span class="movie-card__duration">
        142 мин / 02:22:00
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
  <!-- <div class="movie-card">
    <div class="movie-card__poster">
      <img :src="`http://www.kinopoisk.ru/images/film_big/${movie.id_kinopoisk}.jpg`" alt="" />
    </div>
    <div class="movie-card__content">
      <router-link to="/"><h3 class="movie-card__title">{{ movie.title }}</h3></div><router-link>
      <p class="movie-card__details">
        <span>{{ movie.year }}, {{ movie.genres[0] }}</span>
      </p>
      <p class="movie-card__details">
        <span>Режиссёр: {{ movie.directors[0] }}</span>
      </p>
      <p class="movie-card__details">
        Актёры:
        <span class="movie-card__actor-list" v-for="(actor, idx) in actorListString" :key="idx">{{ actor }}</span>
      </p>
      <p class="movie-card__description" v-if="movie.description">{{ movie.description }}</p>
    </div>
  </div> -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.movie-card {
  position: relative;
  display: flex;
  background-color: #4d4747;
  margin-bottom: 24px;
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
  &__title {
    font-weight: 700;
    font-size: 36px;
    color: #ffffff;
    margin-bottom: 12px;
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
