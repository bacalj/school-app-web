<template>
  <div>
    <div class="prose">
      <h1>{{ endeavor.title }}</h1>
      <p>{{ endeavor.description }}</p>
    </div>

    <div class="link-submit">
      submit link here
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  data(){
    return {
      endeavor: {}
    }
  },

  async fetch(){
    const query = groq`*[_type == 'endeavor' && slug.current == "${this.$route.params.slug}"][0]{
      title,
      slug,
      _id,
      description
    }`
    this.endeavor = await this.$sanity.fetch(query)
  },
  fetchOnServer: true,
	fetchKey: 'single-endeavor-fetch'
}
</script>