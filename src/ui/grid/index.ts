import { Grid, GridItem } from './components'

export * from './types'

const grid = Object.assign(Grid, {
  Item: GridItem,
})

export { grid as Grid }
