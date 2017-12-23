<template>
  <div id="app" class="container">
    <header>
        <ul>
            <li>
                 <router-link to="/">Movies</router-link>
            </li>            
            <li>
                 <router-link to="/dashboard">Dashboard</router-link>                
            </li>            
            <li>
                <router-link to="/movies">Movies</router-link>                
            </li>            
        </ul>
    </header>
    <transition name="fade">
        <router-view/>
    </transition>
    <footer>
      <img src="./assets/logo.png" />
    </footer>
</div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss" scoped>
header {
  background-color: lighten(#000, 25%);
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
  border-bottom: thin solid #fff;
  z-index: 99;
  ul {
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    .brand {
      font-size: 25px;
    }
    li {
      float: left;
      height: 60px;
      line-height: 60px;
      a {
        display: block;
        text-align: center;
        margin: 0 15px;
      }
      &:hover {
        background-color: #999999;
      }
    }
  }
}
.container {
  padding-top: 65px;
  footer {
    position: fixed;
    bottom: 0;
    background-color: rgba(0, 0, 0, .6);
    width: 100%;
    margin: 0 !important;
    padding-top: 10px;
    border-top: thin solid rgba(255, 255, 255, 0.5);
    text-align: center;
    img {
      width: 36px;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
