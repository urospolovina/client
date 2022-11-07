<template>
    <div>
        <a href="#" @click.prevent="login">Login</a> <br>

        <div v-if="$auth.user" > {{ $auth.user }}</div>
        <div v-else> Nema nista</div>

    </div>
  
</template>

<script>

export default {
    
    data (){
        return {
           user: ''
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
            
        },
        async getUser() {
            await this.$auth.fetchUser().then((res) => {this.user = res.data})
            console.log(this.user)
        }
        
    }
}
</script>

<style>

</style>