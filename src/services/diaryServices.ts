import { DiaryEntry, NonSensitiveInfoDiaryEntry, newDiaryEntry } from '../types'
import diaryData from './diaries.json'
import fs from 'fs'

// asercion de tipo: Le indicas a a  ts que diaries es un array de diaryData que es de typo DiaryEntry (interface)
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry !== undefined) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}
export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}
export const addDiary = (newDiaryEntry: newDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  fs.writeFileSync('./src/services/diaries.json', JSON.stringify(diaries))
  return newDiary
}
export const deleteById = (id: number): DiaryEntry[] => {
  const newData = diaries.filter((d) => d.id !== id)
  fs.writeFileSync('./src/services/diaries.json', JSON.stringify(newData))
  return newData
}

export const addEntry = (): undefined => undefined
