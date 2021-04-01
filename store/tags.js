export const state = () => ({
  activeTags: []
})

export const mutations = {
  add (state, tag) {
    state.activeTags.push(tag);
  },
  remove (state, tag) {
    state.activeTags = state.activeTags.filter(item => item != tag);
  }
}
