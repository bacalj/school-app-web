export default ({ app }, inject) => {
  inject('endeavorsQ',
    `*[_type == "endeavor" && !(_id in path('drafts.**')) ]{ _id, slug, title}`
  )
}