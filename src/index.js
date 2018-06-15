import 'url-polyfill';

class URLParams3000 {
  query() {
    this.url = new URL(window.location);
    this.currentParams = new URLSearchParams(url.search);
    this.params = {};

    for (const param of this.currentParams.entries()) {
      this.params[param[0]] = param[1];
    }

    return this.params;
  }
}

export default URLParams3000;