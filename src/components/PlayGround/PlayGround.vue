<template>
  <div>
    <!-- The entire form that warps to the end -->
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <!-- Users first name -->
      <el-form-item label="First Name" prop="first">
        <el-input v-model="ruleForm.first" placeholder="Burtle"></el-input>
      </el-form-item>
      <!-- Form users last name -->
      <el-form-item label="Last Name" prop="last">
        <el-input v-model="ruleForm.last" placeholder="Rolls"></el-input>
      </el-form-item>
      <!-- Area for people to input their email -->
      <el-form-item label="E-Mail" prop="email">
        <el-input v-model="ruleForm.email" placeholder="Burtle@hotmail.com"></el-input>
      </el-form-item>
      <!-- A check box for people to agree or disagree -->
      <el-form-item prop="tick">
        <el-checkbox v-model="ruleForm.tick" label="Do you agree to sign your life away?"></el-checkbox>
      </el-form-item>
      <!-- Title of the message -->
      <el-form-item label="Claim Title" prop="title">
        <el-input v-model="ruleForm.title" placeholder="Input your claim title here"></el-input>
      </el-form-item>
      <!-- Area for people to leave a message -->
      <el-form-item label="Claim Content" prop="desc">
        <el-input
          type="textarea"
          v-model="ruleForm.desc"
          placeholder="Write Whatever you want here"
        ></el-input>
      </el-form-item>
      <!-- This is the submit button -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script src = "./PlayGround.js"></script>
<style src = "./PlayGround.css" scoped></style>
