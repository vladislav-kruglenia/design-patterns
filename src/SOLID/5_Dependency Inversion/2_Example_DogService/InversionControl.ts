// Dependency inversion principle


class Fetch {
    request(url) {
        // return fetch(url).then(r => r.json())
        return 'data from fetch'
    }
}

class LocalStorage {
    get(key): string {
        return `data from local storage key: ${key}`;
    }
}

export interface IClient {
    clientGet: (key?: string) => string
}


class FetchClient implements IClient{
    fetch: Fetch;

    constructor() {
        this.fetch = new Fetch()
    }

    clientGet() {
        return this.fetch.request('vk.com')
    }
}

class LocalStorageClient implements IClient{
    localStorage: LocalStorage;

    constructor() {
        this.localStorage = new LocalStorage()
    }

    clientGet(key) {
        return this.localStorage.get(key)
    }
}


class Database {
    constructor(private client: IClient) {
    }

    getData(key) {
        return this.client.clientGet(key)
    }
}




const db = new Database(new LocalStorageClient());

module.exports = () => console.log(db.getData('rand'));