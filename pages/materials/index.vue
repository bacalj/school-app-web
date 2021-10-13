<template>
  <div>
    <h1>Materials</h1>
    <ul>
      <li v-for="e in materials" :key="e._id">
        <nuxt-link :to="'/materials/' + e.slug.current">{{ e.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  data(){
    return {
      materials: []
    }
  },

  async fetch(){
		const query = groq`*[_type == "material" && !(_id in path('drafts.**')) ]{ _id, slug, title}`
		this.materials  = await this.$sanity.fetch(query)
	},
	fetchOnServer: true,
	fetchKey: 'materials-index-fetch'
}
</script>
