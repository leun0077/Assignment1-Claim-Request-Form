export default {
  name: 'PlayGround',
  data() {
    return {
      // Data that holds everyone info
      form: {
        first: '',
        last: '',
        email: '',
        title: '',
        message: '',
        // For people to toggle the box for either yes or no
        tick: false
      },
      rules: {
        first: [
          {
            required: true,
            message: 'Did you forget your first name?'
          }
        ],
        last: [
          {
            required: true,
            message: 'Did you forget your last name?'
          }
        ],
        email: [
          {
            required: true,
            message: 'You forgot to add your E-Mail'
          }
        ],
        title: [
          {
            required: true,
            message: 'You need a title'
          }
        ],
        message: [
          {
            required: true,
            message: 'Please tell me your last words'
          }
        ],
        tick: [
          {
            required: true,
            message: 'Please sign your life away'
          }
        ]
      },
      // To show the popup box
      dialogVisible: false
    }
  }
}
