<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <RouterLink to="/pld">ナイト</RouterLink>
        <RouterLink to="/war">戦士</RouterLink>
        <RouterLink to="/drk">暗黒騎士</RouterLink>
        <RouterLink to="/gnb">ガンブレイカー</RouterLink>
        <RouterLink to="/drg">竜騎士</RouterLink>
        <RouterLink to="/rpr">リーパー</RouterLink>
        <RouterLink to="/mnk">モンク</RouterLink>
        <RouterLink to="/sam">侍</RouterLink>
        <RouterLink to="/nin">忍者</RouterLink>
        <RouterLink to="/brd">吟遊詩人</RouterLink>
        <RouterLink to="/mcn">機工士</RouterLink>
        <RouterLink to="/dnc">踊り子</RouterLink>
        <br>
        <RouterLink to="/blm">黒魔導士</RouterLink>
        <RouterLink to="/smn">召喚士</RouterLink>
        <RouterLink to="/rdm">赤魔道士</RouterLink>
        <RouterLink to="/blu">青魔道士</RouterLink>
        <RouterLink to="/whm">白魔道士</RouterLink>
        <RouterLink to="/sch">学者</RouterLink>
        <RouterLink to="/ast">占星術師</RouterLink>
        <RouterLink to="/sge">賢者</RouterLink>
      </nav>
      <p>(C) SQUARE ENIX CO., LTD. All Rights Reserved.</p>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  /* font-size: 12px; */
  /* text-align: center; */
  margin-top: 2rem;
  margin-left: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.wrapper p {
text-align: right;
}
/* nav a:first-of-type {
  border: 0;
} */
</style>
