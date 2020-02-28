<template>
  <div>
      <ProfileHeader :profile="profile"/>
      <ProfileAbout :profile="profile"/>
      <ProfileCreds :experience="profile.experience"
      :education="profile.education" />
      <ProfileGithub :username="profile.username"/>
  </div>
</template>

<script>
import ProfileAbout from './profile/ProfileAbout';
import ProfileHeader from './profile/ProfileHeader';
import ProfileCreds from './profile/ProfileCreds';
import ProfileGithub from './profile/ProfileGithub';
export default {
    components:{
        ProfileAbout,
        ProfileHeader,
        ProfileCreds,
        ProfileGithub
    },
    computed:{
        profile(){
            return this.$store.getters.profile
        }
    }
}
</script>

<style>

</style>