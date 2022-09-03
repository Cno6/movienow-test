<template>
  <section class="movies-page">
    <h2 class="movies-page__title">Фильмы</h2>
    <div class="movies-page__sort sort">
      <input
        class="sort__checkbox"
        type="checkbox"
        name="sort"
        id="sortByTitle"
        value="title"
        v-model="currentSort"
      />
      <label class="sort__label" for="sortByTitle">Отсортировать по названию</label>
      <input
        class="sort__checkbox"
        type="checkbox"
        name="sort"
        id="sortByYear"
        value="year"
        v-model="currentSort"
      />
      <label class="sort__label" for="sortByYear">Отсортировать по году</label>
    </div>
    <TheLoader v-if="$store.state.isLoading" />
    <div class="movies-page__movies-list">
      <MovieCard
        v-for="movie in sortedList"
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
  data() {
    return {
      currentSort: [],
    };
  },
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
    sortedList() {
      if (!this.currentSort.length) return this.movieList;
      return [...this.movieList].sort((movie1, movie2) => {
        return movie1[this.currentSort] > movie2[this.currentSort] ? 1 : -1;
      });
    },
  },
  watch: {
    currentSort(newValue) {
      if (newValue.length > 1) {
        this.currentSort.shift();
      }
    },
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
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    &:not(:last-child) {
      margin-right: 32px;
    }
    &::before {
      content: '';
      display: inline-block;
      width: 15px;
      height: 15px;
      border: 1px solid #c4c4c4;
      margin-right: 8px;
    }
  }
  &__checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
    &:checked + .sort__label::before {
      border: 1px solid rgba(255, 82, 82, 0.98);
      background: rgba(255, 82, 82, 0.98) url('@/assets/Mark.svg') no-repeat center;
    }
  }
}

.selected {
  transform: translateY(-8px);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.35);
}
</style>
