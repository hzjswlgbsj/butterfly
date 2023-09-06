import Storage from "../storage/Storage";
const TOKEN = "token";
const ACCOUNT_ID = "accountId";
const NAME = "name";
const BIND_INFO = "bindInfo";

class Auth {
  private token?: string;
  private accountId?: string;
  private name?: string;
  private pStorage?: Storage;

  public get storage() {
    if (!this.pStorage) {
      this.pStorage = new Storage();
    }
    return this.pStorage;
  }

  public getToken() {
    return this.token;
  }

  public getAccountId() {
    return this.accountId;
  }

  public getName() {
    return this.name;
  }

  public async setToken(token: string) {
    await this.storage.setItem(TOKEN, token);
    this.token = token;
  }

  public async setName(name: string) {
    await this.storage.setItem(NAME, name);
    this.name = name;
  }

  public async setAccountId(accountId: string) {
    await this.storage.setItem(ACCOUNT_ID, accountId);
    this.accountId = accountId;
  }

  public async initByStorage() {
    this.token = (await this.storage.getItem(TOKEN)) || undefined;
    this.name = (await this.storage.getItem(NAME)) || undefined;
    this.accountId = (await this.storage.getItem(ACCOUNT_ID)) || undefined;
  }

  public async clear() {
    await this.storage.removeItem(TOKEN);
    await this.storage.removeItem(NAME);
    await this.storage.removeItem(ACCOUNT_ID);
    await this.storage.removeItem(BIND_INFO);
    this.accountId = undefined;
    this.name = undefined;
    this.token = undefined;
  }
}

export default Auth;
