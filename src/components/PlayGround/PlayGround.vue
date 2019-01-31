<template>
  <div class="hello">
    <!-- Element UI -->
    <el-input placeholder="Please input" v-model="nameInput"></el-input>
    <!-- Watch -->
    <input type="text" name="firstName" v-model="nameInput">
    <!-- Computed -->
    <div>{{message}} => Reversed: {{ reversedMessage}}</div>
    <!-- V-Model -->
    <label for="firstName">First Name</label>
    <input type="text" name="firstName" v-model="nameInput">
    <!-- V-html -->
    <div v-html="anchorTag"></div>
    <!-- v-once -->
    <div v-once>The first message will never change: {{ message }}</div>
    <div>The first message will never change: {{ message }}</div>
    <!-- V-on -->
    <button v-on:click="handleClick()">Click This</button>
    <!-- V-Bind Shorthand -->
    <div v-bind:class="backgroundClassName">Some Class with background</div>
  </div>
</template>
<script src = "./PlayGround.js"></script>
<style src = "./PlayGround.css" scoped></style>
