<script setup>
const config = useRuntimeConfig()

const selectedCategory = ref('')

const { data } = await useFetch(
  `${config.public.apiBase}/api/posts`
)

const posts = computed(() => {
  if (!data.value?.data) return []

  return data.value.data.filter(post => {
    if (!selectedCategory.value) return true

    return post.category === selectedCategory.value
  })
})
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-10">
    <div class="max-w-5xl mx-auto">

      <div class="flex justify-between items-center mb-8">
        <h1 class="text-5xl font-bold">
          My Blog
        </h1>

        <NuxtLink
          to="/search"
          class="bg-black text-white px-4 py-2 rounded"
        >
          Search
        </NuxtLink>
      </div>

      <select
        v-model="selectedCategory"
        class="border p-3 rounded mb-8"
      >
        <option value="">All Categories</option>
        <option>Tech</option>
        <option>Gaming</option>
        <option>Lifestyle</option>
        <option>News</option>
      </select>

      <div class="grid md:grid-cols-2 gap-6">

        <div
          v-for="post in posts"
          :key="post.id"
          class="bg-white rounded-xl shadow p-6"
        >
          <NuxtLink :to="`/posts/${post.slug}`">

            <h2 class="text-2xl font-bold mb-3">
              {{ post.title }}
            </h2>

          </NuxtLink>

          <p class="text-gray-500 mb-2">
            {{ post.author }}
          </p>

          <p class="text-sm mb-4">
            {{ post.category }}
          </p>

          <p class="text-gray-700">
            {{ post.content?.substring(0, 120) }}...
          </p>

        </div>

      </div>
    </div>
  </div>
</template>