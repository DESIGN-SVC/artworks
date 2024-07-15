import { type StorageEngine, diskStorage } from 'multer'
import path from 'node:path'
import crypto from 'node:crypto'

type UploadConfig = {
  directory: string
  storage: StorageEngine
}

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads')

export default {
  directory: uploadFolder,
  storage: diskStorage({
    destination: uploadFolder,
    filename(req, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex')

      const fileName = `${fileHash}_${file.originalname}`

      callback(null, fileName.replace(/\s/g, ''))
    },
  }),
} as UploadConfig
