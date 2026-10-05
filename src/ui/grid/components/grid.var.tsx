import { cva } from 'class-variance-authority'

export const gridWrapper = cva('grid', {
  variants: {
    templateColumns: {
      none: '',
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8',
      9: 'grid-cols-9',
      10: 'grid-cols-10',
      11: 'grid-cols-11',
      12: 'grid-cols-12',
    },
    templateRows: {
      none: '',
      1: 'grid-rows-1',
      2: 'grid-rows-2',
      3: 'grid-rows-3',
      4: 'grid-rows-4',
      5: 'grid-rows-5',
      6: 'grid-rows-6',
      7: 'grid-rows-7',
      8: 'grid-rows-8',
      9: 'grid-rows-9',
      10: 'grid-rows-10',
      11: 'grid-rows-11',
      12: 'grid-rows-12',
    },
    autoColumns: {
      true: 'auto-cols-max grid-flow-col',
      false: '',
    },
    autoRows: {
      true: 'grid-flow-row auto-rows-max',
      false: '',
    },
  },
})
