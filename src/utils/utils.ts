import { newDiaryEntry, Visibility, Weather } from '../types'

//  Parseo o validacion de comment
const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}
//  Parseo o validacion de date
const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}
//  Parseo o validacion de weather
const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromRequest
}
//  Parseo o validacion de visibility
const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromRequest
}

//  Validacion de string
const isString = (string: string): boolean => {
  return typeof string === 'string'
}
//  Validacion de date
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}
//  Validacion de weather, tomas el enum y verifica que el weather enviado por el usaurio este en la lista del enum (con el includes)
const isWeather = (weather: any): boolean => {
  return Object.values(Weather).includes(weather)
}
//  Validacion de visibility, tomas el enum y verifica que el visibility enviado por el usaurio este en la lista del enum (con el includes)
const isVisibility = (visibility: any): boolean => {
  return Object.values(Visibility).includes(visibility)
}

export const toNewDiaryEntry = (object: any): newDiaryEntry => {
  const newEntry: newDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}
