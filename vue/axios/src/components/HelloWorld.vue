<template>
<div>
    
    <h2>{{categories}}</h2>
    <br><hr>
    <h3>_________________</h3>
</div>
    
    
</template>
<script>
import axios  from 'axios';
export default {
    data() {
        return {
            categories: '',
        }
    },
    created() {
        axios({
            url: 'http://123.207.32.32:8000/api/v1/category'
        }).then(res => {
            console.log('res');
            this.categories = res;
        })
    }
}
</script>
<style scoped>

</style>