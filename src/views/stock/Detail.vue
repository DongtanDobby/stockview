<template>
    <h5>{{ stockDetail.basDt }}</h5>
    <h4>{{ stockDetail.clpr }} ({{ stockDetail.vs }}, {{ stockDetail.fltRt}}%) </h4>
</template>

<script>
export default ({
    // add props for dynamic routing
    props: ['stockDetail']
})
</script>
