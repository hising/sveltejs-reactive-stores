<script>
    import {AcmeService} from "./services/AcmeService";
    const service = new AcmeService();

    service.doAsyncStuff('https://api.ipify.org/?format=json');

</script>

<style>
    h1 {
        color: purple;
    }
</style>

<h1>Hello {name}!</h1>