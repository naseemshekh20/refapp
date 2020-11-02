import { Lightning } from '@lightningjs/sdk'

export default class BaseScreen extends Lightning.Component {
  update(params) {}

  animate() {}

  show() {
    this.visible = true
  }

  hide() {
    this.visible = false
  }
}
