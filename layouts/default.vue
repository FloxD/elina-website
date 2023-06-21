<template>
  <div id="main-wrapper">
    <Head>
      <Title>Links to Elina's Socials</Title>
      <Meta name="title" content="Links to Elina's Socials"/>
      <Meta name="description" content="This is a collection of links to Elina's social media accounts."/>
      <Meta property="og:site_name" content="Elina's Socials"/>
      <Meta property="og:title" content="Elina's Socials"/>
      <Meta property="og:image" content="https://elina.chat/img/avatar4.jpg"/>
      <Meta property="og:description" content="Here you can find links to all of Elina's social media accounts"/>
      <Meta property="og:type" content="website"/>
      <Meta property="og:url" content="https://elina.chat" />
      <Meta property="twitter:card" content="summary_large_image" />
      <Meta property="twitter:title" content="Elina's Socials" />
      <Meta property="twitter:description" content="Here you can find links to all of Elina's social media accounts"/>
      <Meta property="twitter:url" content="https://elina.chat" />
      <Meta property="twitter:image" content="https://elina.chat/img/avatar4.jpg"/>
    </Head>
    <div class="container">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss">
html {
  height: 100%;
  background-image: url("/img/background4.jpg");
  background-size: cover;
}

#main-wrapper {
  padding-top: 10vh;
}
</style>
