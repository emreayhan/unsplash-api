import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e819ef7fcf6cb41d316c51976557f1e0e4a8fc6c819aafa35894cb14930def77"
  }
});
