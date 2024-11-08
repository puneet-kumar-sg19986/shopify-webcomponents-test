import "vite/modulepreload-polyfill";

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
.product-card {
	width: 220px;
	background: #edebeb;
	padding: 25px 5px;
	border-radius: 4px;
}

.product__link {
	text-decoration: none;
	color: #2a2a2a;
}

.product-title {
	margin: 0;
	text-decoration: none;
	color: #2a2a2a;
	font-size: 18px;
}

.product-info {
	display: flex;
	flex-direction: column;
}

.product-vendor {
	text-transform: uppercase;
	font-size: 12px;
	letter-spacing: 2px;
}

.product__regular__price {
	font-weight: 600;
	font-size: 18px;
}

.product-img {
	display: flex;
	justify-content: center;
}

.product-img img {
	width: 150px;
}

.product-info {
	padding: 10px;
}
  </style>
    <div class="product-card">
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
`;
  }
}

// Register the custom element
customElements.define("product-card", ProductCard);
