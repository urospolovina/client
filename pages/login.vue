<template>
    <div>
        <a href="#" @click.prevent="login">Login</a> <br>

        <div v-if="$auth.user" > {{ $auth.user }}</div>
        <div v-else> Nema nista</div>

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
            console.log(this.$auth.user)
        }
        
    }
}
</script>

<style>

</style>