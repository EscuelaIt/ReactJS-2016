import { Searcher, Teacher } from '../containers'

const routes = [{
  path: '/(:filter)',
  component: Searcher
}, {
  path: '/teacher/(:id)',
  component: Teacher
}]

export default routes
