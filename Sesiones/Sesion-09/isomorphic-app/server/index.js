import Express from 'express'
import handleRender from './middlewares/handleRender'

const app = Express()
const port = 3000

app.use('/dist', Express.static('dist'))
app.use(handleRender)

app.listen(port)
