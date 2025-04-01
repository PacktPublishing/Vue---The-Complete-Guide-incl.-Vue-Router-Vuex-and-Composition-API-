<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link
                    tag="li"
                    to="/user/1"
                    class="list-group-item"
                    style="cursor: pointer">User 1</router-link>
            <router-link
                    tag="li"
                    to="/user/2"
                    class="list-group-item"
                    style="cursor: pointer">User 2</router-link>
            <router-link
                    tag="li"
                    to="/user/3"
                    class="list-group-item"
                    style="cursor: pointer">User 3</router-link>
        </ul>
    </div>
</template>