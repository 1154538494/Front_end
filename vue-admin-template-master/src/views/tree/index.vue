<template>
  <div class="app-container">
    <el-input 
    v-model="textarea"
    :rows="5"
    type="textarea"
    placeholder="请文明发言"
    />
    <el-button type="primary" @click="onSubmit">发布</el-button>
  </div>
</template>

<script>
export default {

  data() {
    return {
      textarea:''
    }
  },
  watch: {
    
  },
  methods: {
    onSubmit(){
      alert( "您的评论发布成功" );
    }
    
  }
}
</script>

