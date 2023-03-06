<template>
    <div class="footer">
       
        <h4 class="h4">
            Copyright &#169 proyecto.vue. Peñascal F5.
        </h4>
        <ul class="lista">
            <li class="lista1">Información legal </li>
            
            <li class="lista2">Politica de privacidad</li>
        </ul>
       

    </div>
</template>

<script>
export default{
setup() {

}
}
</script>

<style scoped>
 .footer {
    background-color: #00688b;
    padding: 1rem;
  border: 0.2rem solid white;
 }
 .h4 {
    text-align: center;
   
    
}
.lista {
    display: flex;
  justify-content: center; 
 list-style: none;
}
.lista1 {
      padding-right: 1rem;
      border-right: solid 1px #161b1d;
      
}
.lista2{
   padding-left: 1rem;
   
} 
</style>
