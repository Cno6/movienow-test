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
      <MovieCard />
    </div>
  </section>
</template>

<script>
import TheLoader from '@/components/UI/TheLoader.vue';
import MovieCard from '@/components/MovieCard.vue';
export default { components: { TheLoader, MovieCard } };
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
</style>
