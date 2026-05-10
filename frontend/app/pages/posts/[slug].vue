<script setup>
import { marked } from 'marked'

const route = useRoute()
const config = useRuntimeConfig()

const { data } = await useFetch(
  `${config.public.apiBase}/api/posts`
)

const post = computed(() => {
  return data.value?.data?.find(
    p => p.slug === route.params.slug
  )
})

const renderedContent = computed(() => {
  if (!post.value?.content) return ''

  return marked(post.value.content)
})
</script>

<template>
  <div
    v-if="post"
    class="min-h-screen bg-gray-100 p-10"
  >
    <div class="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow">

      <NuxtLink
        to="/"
        class="underline mb-5 block"
      >
        ← Back Home
      </NuxtLink>

      <h1 class="text-5xl font-bold mb-5">
        {{ post.title }}
      </h1>

      <p class="mb-2 text-gray-500">
        {{ post.author }}
      </p>

      <p class="mb-10">
        {{ post.category }}
      </p>

      <div
        class="prose max-w-none"
        v-html="renderedContent"
      />

    </div>
  </div>
</template>