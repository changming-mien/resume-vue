<template>
   <!-- Register -->
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">登录</h1>
          <p class="lead text-center">登录你的账户</p>
          <form @submit.prevent="submit" autocomplete="off" method="post">
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
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextField from '../components/TextField';
import jwt_decode from 'jwt-decode'
export default {
  name: 'login',
  data() {
    return {
      newUser: {
        email: '',
        password: ''
      },
      errors: {}
    };
  },
  components: {
    TextField
  },
  methods:{
      submit(){
          this.$axios.post('/api/users/login',this.newUser)
          .then(res=>{
              console.log(res.data)
              const {token}=res.data
              localStorage.setItem('ele_login',token)
              const decode=jwt_decode(token)
              this.$store.dispatch("setIsAuthenticated",!this.isEmpty(decode))
              this.$store.dispatch("setUser",decode)
              this.$router.push('/dashboard')
          })
          .catch(error=>{
              this.errors=error.response.data
              console.log(this.errors)
          })
      },
      isEmpty(value) {
        return (
            value === undefined ||
            value === null ||
            (typeof value === 'object' && Object.keys(value).length === 0) ||
            (typeof value === 'string' && value.trim().length === 0)
        );
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

