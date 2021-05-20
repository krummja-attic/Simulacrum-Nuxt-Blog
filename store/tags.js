export const state = () => ({
  activeTags: [],
  inactiveTags: []
})

export const mutations = {
  add (state, tag) {
    state.inactiveTags = state.inactiveTags.filter(item => item != tag);
    state.activeTags.push(tag);
  },
  remove (state, tag) {
    state.inactiveTags.push(tag);
    state.activeTags = state.activeTags.filter(item => item != tag);
  }
}
