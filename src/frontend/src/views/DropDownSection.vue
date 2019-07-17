<template>
  <select class="list-reset border border-purple-200 rounded w-20 font-sans" v-model="to">
    <option v-for="(option , index) in options"
      :value="option"
      :key="index"
      >
      {{ option.section }}
    </option>
  </select>
</template>


<script>
  export default {
    components: {
      Multiselect
    },
    data(){
      return{
        to: [],
        options: [
          { section: "Latest"   ,  to: "/" },
          { section: "Search"   ,  to: "/SearchAnime" },
          { section: "Alphabet" ,  to: "/AnimesByLetter" },
          { section: "Genders"  ,  to: "/AnimesByGender" },
          { section: "Movies"   ,  to: "/Movies" },
          { section: "Ovas"     ,  to: "/Ovas"}
        ]
      }
    },
    watch:{
      "to": function(value){
        let go = value;
        this.$router.push(go.to);
      }
    }
  };
</script>