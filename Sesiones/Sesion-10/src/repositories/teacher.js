import teachers from '../data'

const applyFilter = (name, filter) => {
  return name.toLowerCase().includes(filter.toLowerCase())
}

export default class TeacherRepository {
  fetch () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(teachers)
      }, 1000)
    })
  }

  filter ({ text }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(teachers.filter(t => applyFilter(t.name, text)))
      }, 1000)
    })
  }
}
