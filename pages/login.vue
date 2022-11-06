<template>
    <div>
        <a href="#" @click.prevent="login">Login</a> <br>

    </div>
  
</template>

<script>

export default {
    
    data (){
        return {
           
        }
    },

    methods: {
        login () {
            this.$auth.loginWith('laravelSanctum', {
                data: {
                    email: 'uros@gmail.com',
                    password: 'password'
                }
            })
            console.log($auth.user)
        }
        
    }
}
</script>

<style>

</style>