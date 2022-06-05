<template>
  <div id="main-wrapper">
    <div class="container">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss">
html {
  height: 100%;
  background-image: url("/img/background2.jpg");
  background-size: cover;
}

#main-wrapper {
  padding-top: 6rem;
  //$test: #123;
  //background-color: $test;
}
</style>
