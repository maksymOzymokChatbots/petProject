/**
 * Storage keys to define what we have
 */
enum StorageKey {
  token = 'token'
}

/**
 * Storage
 */
class Storage {
  /**
   * Set value by key
   */
  public set<T>(name: StorageKey, value: T) {
    return localStorage.setItem(name, value.toString());
  }

  /**
   * Get value by name
   */
  public get(name: StorageKey) {
    return localStorage.getItem(name);
  }
}

export { Storage, StorageKey };
