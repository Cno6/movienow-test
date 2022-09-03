<template>
  <section class="movie-page">
    <div class="movie-page__navigation navigation">
      <router-link class="navigation__link" to="/">
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
        <span class="navigation__link-text">Назад к списку</span></router-link
      >
    </div>
    <TheLoader v-if="$store.state.isLoading" />
    <template v-else>
      <h4 v-if="error" class="movie-page__error">
        К сожалению, по вашему запросу ничего не найдено...
      </h4>
      <MovieCard :movieData="movieData" v-else />
    </template>
  </section>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';
import TheLoader from '@/components/UI/TheLoader.vue';
import { getMovieFromAPI } from '../api';
import { mapGetters, mapMutations } from 'vuex';
export default {
  components: { MovieCard, TheLoader },
  data() {
    return {
      movieData: {},
      error: false,
    };
  },
  methods: {
    ...mapMutations(['toggleLoad']),
    async getMovie(movieId) {
      this.toggleLoad(true);
      await getMovieFromAPI(movieId).then((response) => {
        const movieData = response.data;
        this.toggleLoad(false);
        if (movieData) {
          this.movieData = movieData;
        } else {
          this.error = true;
        }
      });
    },
  },
  computed: {
    ...mapGetters(['movieById']),
  },
  beforeMount() {
    const movieId = this.$route.params.movieId;
    const movie = this.movieById(movieId);

    if (movie) {
      this.movieData = movie;
    } else {
      this.getMovie(movieId);
    }
  },
};
</script>

<style lang="scss" scoped>
.movie-page {
  &__navigation {
    padding-bottom: 20px;
    margin-bottom: 40px;
    border-bottom: 1px solid #c4c4c4;
  }
  &__error {
    font-weight: 500;
    font-size: 32px;
    color: #ffffff;
  }
}

.navigation {
  &__link {
    font-size: 20px;
    text-decoration: none;
    color: rgba(255, 82, 82, 0.98);
    transition: color 0.5s ease;
    &:hover {
      color: rgba(250, 40, 40, 0.98);
      & path {
        transition: fill 0.5s ease;
        fill: rgba(250, 40, 40, 0.98);
      }
    }
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
