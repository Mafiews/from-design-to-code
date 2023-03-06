import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search-movies"
export default class extends Controller {
  static targets = ["form", "input", "list"];

  connect() {
    // console.log(this.formTarget);
    // console.log(this.inputTarget);
  }

  update() {
    // console.log("TO DO!")
    // const url = this.formTarget.action
    // console.log(url);
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    fetch(url, { headers: {"Accept": "text/plain"} })
    .then(response => response.text())
    .then(data => {
      this.listTarget.outerHTML = data;
    })

  }

}
