<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/shopping">shopping</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-size: 14px;
}
</style>
