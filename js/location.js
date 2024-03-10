let location = {
  data: [
    {
    prodName : "Bali",
    category : "famous",
    price : "Rs40,000",
    image : "/main-popular/bali.png"
    },
    
    {
      prodName : "Bangkok",
      category : "famous",
      price : "Rs60,000",
      image : "/main-popular/Bangkok.jpg"
    },

    {
      prodName : "Barcelona",
      category : "famous",
      price : "Rs50,000",
      image : "/main-popular/barcelona.jpg"
    },

    {
      prodName : "Cambodia",
      category : "famous",
      price : "Rs120,000",
      image : "/main-popular/cambodia.avif"
    },

    {
      prodName : "Dubai",
      category : "famous",
      price : "Rs60,000",
      image : "/main-popular/dubai.jpg"
    },

    {
      prodName : "Greece",
      category : "famous",
      price : "Rs60,000",
      image : "/main-popular/greece.jpg"
    },

    {
      prodName : "Japan",
      category : "famous",
      price : "Rs60,000",
      image : "/main-popular/japan.jpg"
    },

    {
      prodName : "Los Angeles",
      category : "famous",
      price : "Rs60,000",
      image : "/main-popular/LA.jpg"
    },

    {
      prodName : "Maldives",
      category : "famous",
      price : "Rs130,000",
      image : "/main-popular/Bangkok.jpg"
    },

    {
      prodName : "Paris",
      category : "famous",
      price : "Rs70,000",
      image : "/main-popular/paris.jpg"
    },

    {
      prodName : "Switzerland",
      category : "famous",
      price : "Rs60,000",
      image : "/main-popular/switzer.jpg"
    },
  ],
};

for(let i of location.data) {
  //card create
  let card = document.createElement("div");
  //category
  card.classList.add("card", "i.category");
  //image dib
  let imgContainer = document.createElement("div");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", "i.image");
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  document.getElementById
}