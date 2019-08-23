<template>
    <div class="flex">
        <NavBar/>
        <div class="flex-1 flex flex-col bg-white overflow-hidden">
            <!-- layouts content -->
            <slot />
            <!-- footer -->
            <Footer />
        </div>
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
