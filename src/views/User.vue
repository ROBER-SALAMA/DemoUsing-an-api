<template>
    <div>
        <UserModal/>
        <UserTable/>
        <ComponentsDashboard/>
    </div>
</template>

<script lang="ts" setup>
    import UserTable from '../components/user/User.table.vue';
    import UserModal from '../components/user/User.modal.vue';
    import ComponentsDashboard from '../components/dashboard/Components.dashboard.vue';
</script>

<style lang="scss" scoped>


</style>