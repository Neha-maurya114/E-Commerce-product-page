const products = [
  //  Electronics
  {
    name: "Wireless Headphones",
    category: "Electronics",
    price: 1999,
    rating: 4.5,
    reviews: 120,
    sizes: [],
    image: "https://images.pexels.com/photos/3756770/pexels-photo-3756770.jpeg",
    about: "High-quality Bluetooth headphones with deep bass and 10-hour battery life."
  },
  {
    name: "Blender Mixer",
    category: "Electronics",
    price: 1499,
    rating: 4.3,
    reviews: 85,
    sizes: [],
    image: "https://plus.unsplash.com/premium_photo-1718043036199-d98bef36af46?auto=format&fit=crop&q=60&w=600",
    about: "Powerful 500W mixer grinder for smoothies, shakes, and chutneys."
  },
  {
    name: "Milton Electro Electric Kettle",
    category: "Electronics",
    price: 699,
    rating: 4.1,
    reviews: 102,
    sizes: [],
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/electric-kettle/b/e/e/rapid-electric-kettle-1-8l-1500w-stainless-steel-hot-water-original-imahfzyhwb9kmxsf.jpeg?q=70",
    about: "1.5L stainless steel electric kettle — boil water quickly and safely."
  },
  {
    name: "Keyboard and Mouse Combo",
    category: "Electronics",
    price: 1269,
    rating: 4.4,
    reviews: 65,
    sizes: [],
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/computer-acc-combo/a/u/8/km117-km117-keyboard-mouse-combo-1-marutinandan-enterprise-original-imagu3h7bcft4443.jpeg?q=70",
    about: "Wireless keyboard and mouse combo with smooth performance and ergonomic design."
  },
  {
    name: "Oppo USB Type-C Cable",
    category: "Electronics",
    price: 401,
    rating: 4.2,
    reviews: 40,
    sizes: [],
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/data-cable/usb-type-c-cable/t/k/s/dl129-oppo-original-imahecgatavugrxh.jpeg?q=70",
    about: "Durable fast-charging Type-C cable compatible with all Android devices."
  },
  {
    name: "Samsung Galaxy A06 5G",
    category: "Electronics",
    price: 8698,
    rating: 4.6,
    reviews: 95,
    sizes: [],
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/b/y/galaxy-a06-5g-sm-a066blgdins-samsung-original-imahbzhsxmquerdg.jpeg?q=70",
    about: "Affordable 5G smartphone with 128GB storage and 50MP dual camera."
  },

  // 👗 Fashion
  {
    name: "Cotton T-Shirt",
    category: "Fashion",
    price: 499,
    rating: 4.2,
    reviews: 88,
    sizes: ["S", "M", "L", "XL"],
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/k/c/l/s-luckybear-watto-original-imahf6ypurcfpkay.jpeg?q=70",
    about: "Soft, breathable cotton T-shirt perfect for everyday wear."
  },
  {
    name: "Shirt",
    category: "Fashion",
    price: 599,
    rating: 4.1,
    reviews: 75,
    sizes: ["M", "L", "XL"],
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/r/q/b/3xl-2-pocket-grey-shirt-metronaut-plus-original-imah3du5gjccqn9y.jpeg?q=70",
    about: "Stylish formal shirt with a comfortable fit — perfect for office wear."
  },
  {
    name: "Kurta Sets",
    category: "Fashion",
    price: 392,
    rating: 4.3,
    reviews: 59,
    sizes: ["S", "M", "L", "XL"],
    image: "https://cdn.pixabay.com/photo/2022/12/04/07/03/woman-7633843_1280.jpg",
    about: "Elegant ethnic kurta set made with soft cotton fabric for festive occasions."
  },
  {
    name: "Jeans",
    category: "Fashion",
    price: 799,
    rating: 4.5,
    reviews: 110,
    sizes: ["28", "30", "32", "34"],
    image: "https://images.pexels.com/photos/2343661/pexels-photo-2343661.jpeg",
    about: "Slim-fit blue denim jeans made with stretchable fabric for comfort."
  },
  {
    name: "NIKE Running Shoes",
    category: "Fashion",
    price: 1817,
    rating: 4.6,
    reviews: 99,
    sizes: ["6", "7", "8", "9", "10"],
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/s/2/h/-original-imahgbrrggfkyvgf.jpeg?q=70",
    about: "Lightweight running shoes with excellent grip and breathability."
  },

  // 💄 Beauty and Grooming
  {
    name: "Lakme Face Cream",
    category: "Beauty and Grooming",
    price: 299,
    rating: 4.3,
    reviews: 85,
    sizes: [],
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/moisturizer-cream/p/y/u/-original-imaheghrtpjufyg9.jpeg?q=70",
    about: "Daily use face cream that nourishes your skin and gives a radiant glow."
  },
  {
    name: "Maybelline Lipstick Set",
    category: "Beauty and Grooming",
    price: 599,
    rating: 4.5,
    reviews: 140,
    sizes: [],
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/u/s/l/-original-imahh2wgqzhud9mg.jpeg?q=70",
    about: "Long-lasting matte lipstick set with vibrant shades for every mood."
  },
  {
    name: "Philips Hair Dryer",
    category: "Beauty and Grooming",
    price: 999,
    rating: 4.4,
    reviews: 102,
    sizes: [],
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/hair-dryer/s/d/s/-original-imah5rhrbcg3rx7g.jpeg?q=70",
    about: "1200W hair dryer with ThermoProtect technology for gentle drying."
  },
  {
    name: "Luxury Perfume",
    category: "Beauty and Grooming",
    price: 999,
    rating: 4.7,
    reviews: 220,
    sizes: [],
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/v/g/8/100-ahlam-edp-handpicked-luxury-long-lasting-fragrance-spicy-original-imahg2hfamwuwvhh.jpeg?q=70",
    about: "Long-lasting luxury perfume with a balanced floral and woody fragrance — perfect for any occasion."
  },
];

// DOM Elements
const grid = document.querySelector(".product-grid");
const filterButtons = document.querySelectorAll(".filters button");
const sortSelect = document.getElementById("sort");
const searchInput = document.getElementById("search");
const cartCount = document.getElementById("cart-count");

// Cart array
let cart = [];

// Function to display products
function displayProducts(list) {
  grid.innerHTML = "";
  list.forEach((p, index) => {
    const stars = "⭐".repeat(Math.floor(p.rating));
    const halfStar = p.rating % 1 >= 0.5 ? "✨" : "";
    const sizeOptions = p.sizes.length
      ? `<select class="size-select">
          <option value="">Select Size</option>
          ${p.sizes.map(size => `<option value="${size}">${size}</option>`).join("")}
        </select>`
      : "";

    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <div class="rating">${stars}${halfStar} (${p.rating}/5)</div>
        <p>${p.reviews} Reviews</p>
        <p><strong>₹${p.price}</strong></p>
        <p class="about">${p.about}</p>
        ${sizeOptions}
        <button class="add-cart" data-index="${index}">Add to Cart 🛒</button>
      </div>
    `;
  });

  // Add event listeners for cart buttons
  document.querySelectorAll(".add-cart").forEach(btn => {
    btn.addEventListener("click", e => {
      const i = e.target.dataset.index;
      addToCart(products[i]);
    });
  });
}

// Add product to cart
function addToCart(product) {
  cart.push(product);
  cartCount.textContent = cart.length;
  alert(`${product.name} added to cart!`);
}

// Filters, Sorting, Search
displayProducts(products);

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = btn.dataset.category;
    const filtered = cat === "All" ? products : products.filter(p => p.category === cat);
    displayProducts(filtered);
  });
});

sortSelect.addEventListener("change", () => {
  let sorted = [...products];
  if (sortSelect.value === "price-low") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "price-high") {
    sorted.sort((a, b) => b.price - a.price);
  }
  displayProducts(sorted);
});

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
  displayProducts(filtered);
});
