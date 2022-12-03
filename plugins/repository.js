import Repository from '~/api/repositories'

export default (ctx, inject) => {
  inject('repositories', Repository(ctx.$axios))
}
