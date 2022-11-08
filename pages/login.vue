<template>
    <div>
        <a href="#" @click.prevent="login">Login</a> <br>

        <div v-if="this.$store.state.auth.user" > {{ this.$store.state.auth.user }}</div>
        <div v-else> Nema nista</div>

    </div>
  
</template>

<script>

export default {
    
    data (){
        return {

           button: true
        }
    },

    methods: {
        login () {
            this.$auth.loginWith('local', {
                data: {
                    email: 'uros@gmail.com',
                    password: 'password'
                }
            })
            this.$auth.setUser(user)
            console.log(this.$auth.user)
            
        },
        // async getUser() {
        //     await this.$auth.fetchUser().then((res) => {this.user = res.data})
        //     console.log(this.user)
        // }
        
    }
}
</script>

<style>

</style>