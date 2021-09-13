<template>
  <div>
    <ul>
      <li v-for="e in endeavors" :key="e._id">
        <nuxt-link :to="'/endeavors/' + e.slug.current">{{ e.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  data(){
    return {
      endeavors: [
        { _id: 'dummy', title: 'Dummy', slug: { current: 'dummy'}}
      ]
    }
  },

  async fetch(){
		const query = groq`*[_type == "endeavor" && !(_id in path('drafts.**')) ]{ _id, slug, title}`
		this.endeavors  = await this.$sanity.fetch(query)
    console.log(this.endeavors)
	},
	fetchOnServer: true,
	fetchKey: 'endeavors-index-fetch'
}
</script>