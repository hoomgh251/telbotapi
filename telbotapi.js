export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = "api.telegram.org";
    url.protocol = "https:";
    url.port = "";
    return fetch(new Request(url, request));
  }
}