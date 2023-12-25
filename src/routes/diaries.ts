import express from 'express'
import { toNewDiaryEntry } from '../utils/utils'
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id))
  return (diary !== undefined ? res.send(diary) : res.sendStatus(404))
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

router.delete('/:id', (req, res) => {
  try {
    const itemId = parseInt(req.params.id)
    const diaryDeleted = diaryServices.deleteById(itemId)
    res.json(diaryDeleted)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

export default router
