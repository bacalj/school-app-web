<template>
  <div>
    <div class="prose">
      <h1>{{ material.title }}</h1>
      <p>{{ material.description }}</p>
    </div>

    <LinkSubmit :materialId="material._id" class="my-12 w-1/3"/>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  data(){
    return {
      material: {}
    }
  },

  async fetch(){
    const query = groq`*[_type == 'material' && slug.current == "${this.$route.params.slug}"][0]{
      title,
      slug,
      _id,
      description
    }`
    this.material = await this.$sanity.fetch(query)
  },
  fetchOnServer: true,
	fetchKey: 'single-material-fetch'
}
</script>
