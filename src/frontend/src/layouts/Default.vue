<template>
    <div class="flex flex-wrap">
        <NavBar/>
        <div class="w-full md:w-5/6">
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
