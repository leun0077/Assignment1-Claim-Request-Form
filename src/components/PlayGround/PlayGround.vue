<template>
  <div>
    <!-- The entire form that warps to the end -->
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <!-- Users first name -->
      <el-form-item label="First Name" prop="first">
        <el-input placeholder="Burtle" v-model="form.firstName" clearable></el-input>
      </el-form-item>
      <!-- Form users last name -->
      <el-form-item label="Last Name" prop="last">
        <el-input placeholder="Rolls" v-model="form.lastName" clearable></el-input>
      </el-form-item>
      <!-- Area for people to input their email -->
      <el-form-item label="E-mail" prop="email">
        <el-input placeholder="Burtle@hotmail.com" v-model="form.email" clearable></el-input>
      </el-form-item>
      <!-- A check box for people to agree or disagree -->
      <el-form-item prop="tick">
        <el-checkbox label="Do you agree to sign your life away? " v-model="form.tick"></el-checkbox>
      </el-form-item>
      <!-- Title of the message -->
      <el-form-item label="Claim Title" prop="title">
        <el-input placeholder="This is a test message" v-model="form.subject" clearable></el-input>
      </el-form-item>
      <!-- Area for people to leave a message -->
      <el-form-item label="Claim Content" prop="message">
        <el-input
          placeholder="Type whatever message you want in here"
          type="textarea"
          v-model="form.content"
        ></el-input>
      </el-form-item>
      <!-- This is the submit button -->
      <el-form-item>
        <el-button type="primary" @click="dialogVisible = true">Submit</el-button>
      </el-form-item>

      <!-- The yes or no for the form -->
      <el-dialog title="Confirmation" :visible.sync="dialogVisible" width="30%">
        <span>Are you sure you want to submit?</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">No</el-button>
          <el-button type="primary" @click="dialogVisible = false">Yes</el-button>
        </span>
      </el-dialog>
    </el-form>
  </div>
</template>
<script src = "./PlayGround.js"></script>
<style src = "./PlayGround.css" scoped></style>
