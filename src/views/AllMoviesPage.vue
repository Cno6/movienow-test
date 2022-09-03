<template>
  <section class="movies-page">
    <h2 class="movies-page__title">Фильмы</h2>
    <div class="movies-page__sort sort">
      <label class="sort__label" for="sortByName">
        <input
          class="sort__checkbox"
          type="radio"
          name="sort"
          id="sortByName"
          value="sortByName"
        />Отсортировать по названию</label
      >
      <label class="sort__label" for="sortByYear">
        <input
          class="sort__checkbox"
          type="radio"
          name="sort"
          id="sortByYear"
          value="sortByYear"
        />Отсортировать по году</label
      >
    </div>
    <TheLoader v-if="$store.state.isLoading" />
    <div class="movies-page__movies-list">
      <MovieCard
        v-for="movie in movieList"
        :key="movie.id"
        :movieData="movie"
        @mouseenter="addHoverEffect"
        @mouseleave="removeHoverEffect"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TheLoader from '@/components/UI/TheLoader.vue';
import MovieCard from '@/components/MovieCard.vue';
export default {
  components: { TheLoader, MovieCard },
  methods: {
    ...mapActions(['fetchMovies']),
    addHoverEffect(e) {
      e.target.classList.add('selected');
    },
    removeHoverEffect(e) {
      e.target.classList.remove('selected');
    },
  },
  computed: {
    ...mapGetters(['movieList']),
  },
  mounted() {
    this.fetchMovies();
  },
};
</script>

<style lang="scss" scoped>
.movies-page {
  &__title {
    font-weight: 500;
    font-size: 32px;
    color: #ffffff;
    margin-bottom: 16px;
  }
  &__sort {
    padding-bottom: 16px;
    margin-bottom: 40px;
    border-bottom: 1px solid #c4c4c4;
  }
}

.sort {
  font-weight: 400;
  font-size: 16px;
  color: #c4c4c4;
  &__label {
    &:not(:last-child) {
      margin-right: 32px;
    }
  }
  &__checkbox {
    margin-right: 8px;
  }
}

.selected {
  transform: translateY(-8px);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.35);
}
</style>
