<template>
   <div class="dashboard">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
            <h1 class="display-4">Dashboard</h1>
            <p v-if="user!==null" class="lead text-muted">
              Welcome 
              <router-link v-if="profile==null" to="/profiles">{{user.name}}</router-link>
              <router-link v-else :to="`/profile/${profile.handle}`">{{user.name}}</router-link>
              </p>
            <div v-if="profile!==null">
              <!-- 编辑个人信息  添加个人经历 添加教育经历 -->
              <ProfileActived/>
                <!-- 展示个人经历 -->
                <Experience @deleteExperience="deleteExperience" :experience="profile.experience"/>
                <!-- 展示教育经历 -->
                <Education @deleteEducation="deleteEducation" :education="profile.education"/>
              <!-- 删除账户按钮 -->
              <div style="margin-bottom: 60px">
                <button class="btn btn-danger" @click="deleteClick">删除当前账户</button>
              </div>
            </div>
            <div v-else>
              <p>没有任何相关的个人信息,请添加您的个人信息</p>
              <router-link to="create-profile" class="btn btn-lg btn-info">添加个人信息</router-link>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileActived from '../components/ProfileActived'
import Experience from './Experience'
import Education from './Education'
export default {
    components:{
        ProfileActived,
        Experience,
        Education
    },
    data(){
        return{
        }
    },
    computed:{
        user(){
            return this.$store.getters.user
        },
        profile(){
            return this.$store.getters.profile
        }
    },
    created(){
        this.getpProfileData()
    },
    beforeRouterEnter(to,from,next){
      next(vm=>{
        vm.getpProfileData()
      })
    },
    methods:{
        getpProfileData(){
            this.$axios.get('/api/profile')
            .then(res=>{
                console.log(res.data)
                this.$store.dispatch("setProfile",res.data)
            })
            .catch(err=>{
                console.log(err.response)
                this.$store.dispatch("setProfile",null)

            })
        },
        deleteClick(){
          this.$axios.delete('api/profile')
          .then(res=>{
              this.$store.dispatch('clearUser')
              localStorage.removeItem('ele_login')
              this.$router.push('/login')
          })
          .catch(err=>{
            console.log(err)
          })
        },
        deleteExperience(id){
            this.$axios.delete(`api/profile/experience/${id}`)
            .then(res=>{
              this.$store.dispatch("setProfile",res.data)
              console.log(res.data)
            })
        },
        deleteEducation(id){
          this.$axios.delete(`api/profile/education/${id}`)
            .then(res=>{
              this.$store.dispatch("setProfile",res.data)
              console.log(id)
            })
        }
    }

}
</script>

<style>

</style>