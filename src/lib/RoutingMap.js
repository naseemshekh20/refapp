import HomeScreen from '@/screens/HomeScreen'
import commonConstants from '@/constants/default'

const screenGeometry = {
  x: 0,
  y: 0,
  w: commonConstants.screen.width,
  h: commonConstants.screen.height
}

export const routings = [
  {
    url: 'home',
    menuItem: -1,
    settings: {
      type: HomeScreen,
      ref: 'HomeScreen',
      ...screenGeometry
    }
  }
]
