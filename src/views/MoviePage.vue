<template>
  <section class="movie-page">
    <div class="movie-page__navigation navigation">
      <a class="navigation__link" href="#">
        <span class="icon icon_arrow"
          ><svg
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.67 1.86998L9.9 0.0999756L0 9.99998L9.9 19.9L11.67 18.13L3.54 9.99998L11.67 1.86998Z"
              fill="#FF5252"
              fill-opacity="0.98"
            />
          </svg>
        </span>
        <span class="navigation__link-text">Назад к списку</span></a
      >
    </div>
    <MovieCard />
  </section>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';
export default { components: { MovieCard } };
</script>

<style lang="scss" scoped>
.movie-page {
  &__navigation {
    padding-bottom: 20px;
    margin-bottom: 40px;
    border-bottom: 1px solid #c4c4c4;
  }
}

.navigation {
  &__link {
    font-size: 20px;
    text-decoration: none;
    color: rgba(255, 82, 82, 0.98);
  }
  &__link-text {
    text-decoration: underline;
  }
}

.icon_arrow {
  vertical-align: middle;
  margin-right: 20px;
}
</style>
