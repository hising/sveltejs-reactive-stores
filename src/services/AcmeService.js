import {AcmeStore} from "../stores/AcmeStore";

export class AcmeService {

    acmeStore;
    http;

    constructor(httpClient) {
        this.acmeStore = new AcmeStore();
        this.http = httpClient;
    }

    async doAsyncStuff(url) {
        let response = await this.http.get(url);
        this.acmeStore.update(response);
    }
}