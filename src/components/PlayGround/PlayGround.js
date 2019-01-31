export default {
  name: 'PlayGround',
  data() {
    return {
      backgroundClassName: 'red-background',
      counter: 0,
      message: 'static message',
      anchorTag: '<a href="http://google.ca">{{ message }}</a>',
      nameInput: 'No Named'
    }
  },
  watch: {
    nameInput(newValue, oldValue) {
      /* eslint-disable no-console */
      console.log('old value', oldValue)
      console.log('new value', newValue)
    }
  },
  computed: {
    reversedMessage() {
      return this.message
        .split('')
        .reverse()
        .join('')
    }
  },
  methods: {
    handleClick() {
      this.counter++
      // String interpolation
      this.message = `you are clicking this ${this.counter}Times!`
      // tenary operator
      // new way with ?
      this.counter % 2 === 0
        ? (this.backgroundClassName = 'green-background')
        : (this.backgroundClassName = 'red-background')
      // Normal way of coding
      // if (this.counter % 2 === 0) {
      //   this.backgroundClassName = 'green-background'
      // } else {
      //   this.backgroundClassName = 'red-background'
      // }
      this.message = this.nameInput
    }
  }
}
