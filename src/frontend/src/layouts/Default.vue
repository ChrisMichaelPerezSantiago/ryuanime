<template>
    <div class="flex md:flex-row-reverse flex-wrap">
        <NavBar/>
        <!-- layouts content -->
        <slot />
        <!-- footer -->
        <Footer />
    </div>
</template>

<script>
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default {
    name: "DefaultLayout",
    components: {
        NavBar,
        Footer
    }
}
</script>
