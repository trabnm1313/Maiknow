<template>
  <div id="app">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=K2D">
    <router-view :key="$route.fullPath" /><!-- เปลี่ยนไปตาม router ที่ตั้งไว้ -->
  </div>
</template>
