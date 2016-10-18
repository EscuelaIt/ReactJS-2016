export const logger = store => next => action => {
  console.log('prev state', store.getState())
  console.log('action', action)
  const result = next(action)
  console.log('next state', store.getState())
  return result
}
