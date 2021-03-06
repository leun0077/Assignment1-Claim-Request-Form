import { Option } from 'element-ui'

export default {
  data() {
    // Holds all the data of what is being writen
    return {
      ruleForm: {
        first: '',
        last: '',
        email: '',
        tick: '',
        title: '',
        desc: ''
      },
      // Rules set for the form along with error message
      rules: {
        first: [
          {
            required: true,
            message: 'Did you Forget your First name?',
            trigger: 'blur'
          },
          {
            message: 'Length should be 3 to 5',
            trigger: 'blur'
          }
        ],
        last: [
          {
            required: true,
            message: 'Did you forget your last name?',
            trigger: 'blur'
          },
          {
            message: 'Length should be 3 to 5',
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            message: 'Please enter your email!',
            trigger: 'blur'
          },
          {
            message: 'Length should be 3 to 5',
            trigger: 'blur'
          }
        ],
        tick: [
          {
            required: true,
            message: 'You must sign your life away please',
            trigger: 'blur'
          }
        ],
        title: [
          {
            required: true,
            message: 'Please have a title for you submit.',
            trigger: 'blur'
          },
          {
            trigger: 'blur'
          }
        ],
        desc: [
          {
            required: true,
            message: 'Just write something in there.',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  // if statement making sure form wont submit unless everything is inputted correctly
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('Review now!')
        }
        if (false) {
          console.log('error submit!!')
          return false
        } else if (valid) {
          // This is where user says yes or no
          this.$confirm('Are you sure you want to submit?', 'Confirm', {
            distinguishCancelAndClose: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
          })
            .then(() => {
              this.$message({
                type: 'info',
                message: 'Theres no going back. Its been saved!'
              })
            })
            .catch(action => {
              this.$message({
                type: 'info',
                message:
                  action === 'cancel'
                    ? 'Oh you wanted to change something I see...'
                    : 'Stay in the current route'
              })
            })
        }
      })
    }
  }
}
