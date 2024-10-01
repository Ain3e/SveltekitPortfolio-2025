<script>
    import "../app.css";
</script>



<style lang="postcss">
    :global(body) {
        @apply bg-Black;
    }
    :global(h4,h3,h2,h1,p) {
        @apply text-White;
        @apply font-suisseIntl;
        @apply font-smoothing-antialiased;
    }

    :global(h2){
        @apply leading-h2;
        /*@apply tracking-wider;*/
    }

    :global(h1){
        @apply leading-h1;
        /*@apply tracking-wider;*/
    }

</style>

<slot />