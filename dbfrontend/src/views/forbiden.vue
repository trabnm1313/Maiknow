<template>
    <div id="login" class="hero is-fullheight" :style="{ backgroundImage: 'url(' + require('@/assets/bg.png') + ')' }">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-10 is-offset-1">
                    <div class="box">
                        <div class="columns is-centered is-vcentered is-mobil">
                             <div class="column is-three-fifths">
                                    <div class="title" id="welcome-text">Welcome to <br> Prosthetic & Orthotic Manage System</div>
                                    <img id="img-column" :src="require('../assets/new.png')">
                            </div>
                            <div class="column">
                                <form>
                                    <div class="title" id="user-text">USER LOGIN</div>
                                    <div class="field my-6">
                                        <div class="control">
                                            <input class="input is-medium {'is-danger' : error}" type="text" name="username" v-model="input.username" placeholder="Username" />
                                        </div>
                                    </div>
                                    <div class="field my-4">
                                        <div class="control">
                                            <input class="input is-medium {'is-danger' : error}" type="password" name="password" v-model="input.password" placeholder="Password" />
                                            <p class="help is-danger" v-if="error">{{errorMsg}}</p>
                                        </div>
                                    </div>
                                    <div class="field my-5 has-text-right" id="forgot">
                                        <div class="control">
                                            <a href="#">Forgot your password?</a>
                                        </div>
                                    </div>
                                    
                                    <button type="button" class="button has-text-white is-rounded is-centered is-medium" @click="login()">LOGIN</button>
                                </form>
                            </div>
                        </div>        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>