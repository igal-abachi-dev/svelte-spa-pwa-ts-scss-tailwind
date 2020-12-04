<script>
    export let value;
    export let label = "";
</script>

<div class="flex items-center justify-center w-full mb-24">

    <label for="toogleA">
        <input bind:checked="{value}" id="toogleA" type="checkbox"/>{label}
    </label>
</div>
