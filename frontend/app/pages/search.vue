<script setup>
const config = useRuntimeConfig()

const search = ref('')

const { data } = await useFetch(
  `${config.public.apiBase}/api/posts`
)

const posts = computed(() => {
  return data.value?.data || []
})

const filteredPosts = computed(() => {
  return posts.value.filter(post =>
    post.title?.toLowerCase().includes(search.value.toLowerCase()) ||
    post.author?.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<template>
  <div class="p-10 max-w-4xl mx-auto">
    <NuxtLink
      to="/"
      class="underline block mb-5"
    >
      Back Home
    </NuxtLink>

    <h1 class="text-4xl font-bold mb-5">
      Search Posts
    </h1>

    <input
      v-model="search"
      placeholder="Search title or author..."
      class="border p-2 w-full mb-5"
    />

    <div
      v-for="post in filteredPosts"
      :key="post.id"
      class="border rounded p-5 mb-5 shadow"
    >
      <NuxtLink :to="`/posts/${post.slug}`">
        <h2 class="text-2xl font-bold">
          {{ post.title }}
        </h2>
      </NuxtLink>

      <p>
        {{ post.author }}
      </p>
    </div>
  </div>
</template>