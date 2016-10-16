import teachers from '../data'

export default class TeacherRepository {
  fetch () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(teachers)
      }, 1000)
    })
  }
}
