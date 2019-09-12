export class AcmeService {

    acmeStore;
    http;

    constructor(acmeStore, httpClient) {
        this.acmeStore = acmeStore;
        this.http = httpClient;
    }

    async doAsyncStuff(url) {
        let response = await this.http.get(url);
        this.acmeStore.update(response);
    }
}