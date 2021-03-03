<template>
    <div id="content" class="bg-blue-500 text-white p-4 mb-4">
        <p><slot name="test-box">default</slot></p>
    </div>
</template>

<script>
export default {
    mounted() {
        let content = document.getElementById('content');
        console.log(content.innerText);
    }
}
</script>
