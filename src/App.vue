<template>
  <div id="app" class="container">
    <header>
        <ul>
            <li>
                <a class="brand" routerLink="/">Movies</a>
            </li>            
            <li>
                <a href="/#/dashboard">Dashboard</a>
            </li>            
            <li>
                <a href="/#/movies">Movies</a>
            </li>            
        </ul>
    </header>
    <router-view/>
</div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss" scoped>
header{        
    background-color: lighten(#000, 25%);    
    left: 0;
    right: 0;    
    top: 0;
    position: fixed;
    border-bottom: thin solid #FFF;
    ul {
        list-style-type: none;
        margin: 0;
        overflow: hidden;
        .brand{
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
.container{
    padding-top: 65px;
}
</style>
