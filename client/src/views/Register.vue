<template>
   <!-- Register -->
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">注册</h1>
          <p class="lead text-center">创建新的账户</p>
          <form @submit.prevent="submit" autocomplete="off" method="post">
            <TextField 
              type="text"
              placeholder="用户名"
              name="name" 
              v-model="newUser.name"
              :error="errors.name"
              />
               <TextField 
              type="email"
              placeholder="邮箱"
              name="email" 
              v-model="newUser.email"
              :error="errors.email"
              />
               <TextField 
              type="password"
              placeholder="密码"
              name="password" 
              v-model="newUser.password"
              :error="errors.password"
              />
               <TextField 
              type="password"
              placeholder="确认密码"
              name="password2" 
              v-model="newUser.password2"
              :error="errors.password2"
              />
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextField from '../components/TextField';
export default {
  name: 'Register',
  data() {
    return {
      newUser: {
        name: '',
        email: '',
        password: '',
        password2: ''
      },
      errors: {}
    };
  },
  components: {
    TextField
  },
  methods:{
      submit(){
          this.$axios.post('/api/users/register',this.newUser)
          .then(res=>{
              this.$store.dispatch("setUser",res.data)
              console.log(res.data)
              this.$router.push('/login')
          })
          .catch(error=>{
              this.errors=error.response.data
              console.log(this.errors)
          })
      }
  }
};
</script>

<style scoped>
.invalid{
    font-size: 12px;
    color:red;
}
</style>

