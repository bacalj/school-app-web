export default ({ app }, inject) => {
  inject('materialsQ',
    `*[_type == "material" && !(_id in path('drafts.**')) ]{ _id, slug, title}`
  )
}
