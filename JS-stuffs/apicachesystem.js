class ApiCache {
  constructor() {
    this.cache = new Map();
  }

  async fetch(url) {
    if (this.cache.has(url)) {
      return this.cache.get(url);
    }

    const response = await fetch(url);
    const data = await response.json();

    this.cache.set(url, data);

    return data;
  }
}
