<template>
    <div class="hello">
        \{{msg}}
    </div>
</template>

<script lang="ts">
export default {
    name: "HelloWord",
    data(){
        return {
            msg: "hello world"
        }
    }
}
</script>

<style>
.hello{
    color: blue;
}
</style>
