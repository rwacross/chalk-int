import isPlainObject from 'lodash.isplainobject'
import isArray from 'lodash.isarray'

// Checks if data is an array of entries of nonzero length, containing objects, of which one is a classes array

export default function isPerson(data) {
  return (
    isArray(data) &&
      data.length > 0 &&
    isPlainObject(data[0]) &&
    isArray(data[0].classes)
  )
}
