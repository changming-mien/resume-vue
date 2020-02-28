<template>
  <div class="form-group">
      <textarea 
      class="form-control form-control-lg"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      @input="$emit('input',$event.target.value)"
      ></textarea>
      <div v-if="error" class="invalid-feedback">
       {{error}}
     </div>
      <small v-if="info" className="form-text text-muted">{{info}}</small>
  </div>
</template>

<script>
export default {
    props:{
        value:String,
        placeholder:String,
        name:String,
        error:String,
        info:String
    }
}
</script>

<style>

</style>