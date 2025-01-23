import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");

        if (!response.ok) {
          throw new Error("Failed to fetch data from the API");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addToCart = async (product) => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: product.id }),
      });

      if (!response.ok) {
        throw new Error("Failed to add product to cart");
      }

      setCart((prevCart) => [...prevCart, product]);
    } catch (err) {
      alert(err.message);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/cart/${productId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to remove product from cart");
      }

      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    } catch (err) {
      alert(err.message);
    }
  };

  const toggleCartVisibility = () => {
    setCartVisible((prevState) => !prevState);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Product List</h1>
        <button className="cart-button" onClick={toggleCartVisibility}>
          Cart ({cart.length})
        </button>
      </header>

      {/* Product List */}
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)} className="button">
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      {/* Cart Interface */}
      {cartVisible && (
        <div className="cart-modal">
          <h2>Your Cart</h2>
          <ul className="cart-list">
            {cart.length > 0 ? (
              cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <h2>{item.title}</h2>
                  <p>Price: ${item.price}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="button remove-button"
                  >
                    Remove
                  </button>
                </li>
              ))
            ) : (
              <p>Your cart is empty!</p>
            )}
          </ul>
          <button onClick={toggleCartVisibility} className="button close-cart">
            Close Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default App;