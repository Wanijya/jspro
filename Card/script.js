var products = [
  {
    name: "Nike Shoes",
    headLine: "For Women",
    price: "8,000",
    image:
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chair",
    headLine: "Black Chair",
    price: "15,000",
    image:
      "https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chair",
    headLine: "Office Chair",
    price: "13,000",
    image:
      "https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

var popular = [
  {
    name: "Camera",
    headLine: "For Photographic",
    price: "50,000",
    image:
      "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Car",
    headLine: "Car Toy",
    price: "10,000",
    image:
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chair",
    headLine: "Wood Chair",
    price: "8,000",
    image:
      "https://plus.unsplash.com/premium_photo-1682582241577-8f289ee34ca8?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

var cart = [];

function addProducts() {
  var clutter = "";
  products.forEach(function (product, index) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] rounded-xl overflow-hidden">
        <img class="w-full h-full object-cover" src="${product.image}" />
    </div>
    <div class="data w-full px-2 py-5">
      <h1 class="font-semibold text-xl leading-none tracking-tight">
        ${product.name}
      </h1>
      <div class="flex justify-between w-full items-center mt-2">
        <div class="w-1/2">
          <h3 class="font-semibold opacity-20">${product.headLine}</h3>
          <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
        </div>
        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
          <i data-index="${index}" class="add ri-add-line"></i>
        </button>
      </div>
    </div>
  </div>`;
  });
  document.querySelector(".products").innerHTML = clutter;
}

function addPopularProducts() {
  var clutter = "";
  popular.forEach(function (product) {
    clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div
          class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
          <img class="w-full h-full object-cover" src="${product.image}" alt="" />
        </div>
        <div class="data py-2 w-full">
          <h1 class="leading-none font-semibold">${product.name}</h1>
          <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
            ${product.headLine}
          </h4>
          <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
        </div>
      </div>`;
  });
  document.querySelector(".populars").innerHTML = clutter;
}

function addToCart() {
  document
    .querySelector(".products")
    .addEventListener("click", function (details) {
      if (details.target.classList.contains("add")) {
        cart.push(products[details.target.dataset.index]);
      }
    });
}

function showCart() {
  document.querySelector(".carticon").addEventListener("click", function () {
    document.querySelector(".cartexpnd").style.display = "block";

    var clutter = "";
    cart.forEach(function (prod, index) {
      clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden ">
                    <img class="w-full h-full object-cover" src="${prod.image}" />
                </div>
                <div>
                    <h3 class="font-semibold">${prod.name}</h3>
                    <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
                </div>
            </div>`;
    });
    document.querySelector(".cartexpnd").innerHTML = clutter;
  });
}

showCart();
addToCart();
addPopularProducts();
addProducts();
