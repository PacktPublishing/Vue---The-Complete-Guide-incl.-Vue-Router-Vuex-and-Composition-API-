<template>
    <li
            class="list-group-item"
            style="cursor: pointer"
            @click="serverSelected">
        Server #{{ server.id }}
    </li>
</template>

<script>
    import { serverBus } from '../../main';

    export default {
        props: ['server'],
        methods: {
            serverSelected() {
                serverBus.$emit('serverSelected', this.server);
            }
        }
    }
</script>

<style>

</style>
