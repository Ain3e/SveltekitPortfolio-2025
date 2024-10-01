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
    }

    :global(h2){
        @apply leading-h2;
    }

</style>

<slot />