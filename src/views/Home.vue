<template>
  <div class="home">
    <BlogPost />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
export default {
  name: "Home",
  components: { BlogPost },
  data() {
    return {
      WelcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all thrings programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPosts: [
        {
          title: "This a a Filler Title!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This a a Filler Title!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
};
</script>
