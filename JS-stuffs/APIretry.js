async function fetchWithRetry(url, options = {}, retries = 3) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error("API Error");
    return await res.json();
  } catch (err) {
    if (retries > 0) {
      return fetchWithRetry(url, options, retries - 1);
    } else {
      throw err;
    }
  }
}
