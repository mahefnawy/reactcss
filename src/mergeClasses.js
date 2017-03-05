import map from 'lodash/map'
import cloneDeep from 'lodash/cloneDeep'

export const mergeClasses = (classes, activeNames = []) => {
  const styles = (classes.default && cloneDeep(classes.default)) || {}
  activeNames.map((name) => {
    const toMerge = classes[name]
    if (toMerge) {
      map(toMerge, (value, key) => {
        if (!styles[key]) {
          styles[key] = {}
        }

        styles[key] = { ...styles[key], ...toMerge[key] }
      })
    }

    return name
  })
  return styles
}

export default mergeClasses
