<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sameBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>Views More Recent Blog</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sameBlogCards" :key="index" />
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>Register now so you don't miss any posts</h2>
        <router-link class="router-button" :to="{ name: 'Register' }">Register Now <Arrow class="arrow arrow-light" /> </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue'
import BlogCard from '@/components/BlogCard.vue'
import Arrow from '../assets/Icons/arrow-right-light.svg'

export default {
  name: 'HomeView',
  components: {
    BlogPost,
    BlogCard,
    Arrow
  },
  data(){
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost: "Hello World!!",
        welcomeScreen: true,
        photo: "coding"
      },
      sameBlogPost: [
        {
          title:"This is filter title one",
          blogHTML: "this is first blog post",
          blogCoverPhoto: "beautiful-stories"
        },
        {
          title:"This is filter title two",
          blogHTML: "this is second blog post",
          blogCoverPhoto: "designed-for-everyone"
        }
      ],
    };
  },
  computed:{
    sameBlogCards(){
      return this.$store.state.sameBlogCards
    },
    user() {
      return this.$store.state.user;
    },
  },
}
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;

  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>