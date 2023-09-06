import localforage from "localforage";

class Storage {
  private id: string;
  private storage: LocalForage;

  constructor() {
    this.storage = localforage.createInstance({
      name: this.id,
    });
  }

  public getItem<T>(key: string): Promise<T | null> {
    return this.storage.getItem<T>(key);
  }

  public setItem(key: string, value: any) {
    return this.storage.setItem(key, value);
  }

  public removeItem(key: string) {
    return this.storage.removeItem(key);
  }

  public clear() {
    return this.storage.clear();
  }

  public destroy(): void {
    localforage.dropInstance({
      name: this.id,
    });
  }
}

export default Storage;
