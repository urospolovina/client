<template>
    <div>
        <a href="#" @click.prevent="login">Login</a> <br>

    </div>
  
</template>

<script>

export default {
    middleware: 'auth',
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
            console.log('nesto')
        }
        
    }
}
</script>

<style>

</style>