<template>
  <div class="form-group">
      <input 
      class="form-control form-control-lg"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      @input="$emit('input',$event.target.value)"
      >
      <div v-if="error" class="feedback">
       {{error}}
     </div>
      <small v-if="info" className="form-text text-muted">{{info}}</small>
  </div>
</template>

<script>
export default {
    props: {
      type: {
        type: String,
        default: 'text'
      },
      placeholder: String,
      value: String,
      name: String,
      error: String,
      info: String,
      disabled: Boolean
  }
}
</script>

<style scoped>
.feedback{
  font-size: 12px;
  color:red;
}
</style>