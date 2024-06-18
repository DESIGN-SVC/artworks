import 'dotenv/config'
import { dataSource } from '@shared/typeorm'
import { app } from './app'

const PORT = process.env.PORT

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err)
  })

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
