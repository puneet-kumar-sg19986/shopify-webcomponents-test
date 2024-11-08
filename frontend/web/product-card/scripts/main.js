class ProductCard extends HTMLElement {
  constructor() {
    super();
    // Attach Shadow DOM
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const productData = {
      image: this.getAttribute("data-image"),
      name: this.getAttribute("data-name"),
      price: this.getAttribute("data-price"),
      url: this.getAttribute("data-url"),
      product_vendor: this.getAttribute("data-vendor"),
    };

    this.render(productData);
  }

  render(data) {
    this.shadowRoot.innerHTML = `
<style>

</style>
          <div class="product-card ">
              <a class="product__link" href=${data.url}>
                  <div class="product-img">
                      <img src="${data.image}" />
                  </div>
                  <div class="product-info">
                      <h4 class="product-title">${data.name}</h4>
                      <span class="product-vendor">${data.product_vendor}</span>
                      <span class="product__regular__price">${data.price}</span>
                  </div>
              </a>
          </div>
          </div>
          `;
  }
}

// Register the custom element
customElements.define("product-card", ProductCard);
