<template>
    <div>
        <a href="#" @click.prevent="login">Login</a> <br>
        <span>{{ $auth.user }}</span>
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
        }
    }
}
</script>

<style>

</style>