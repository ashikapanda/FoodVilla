const OverlayComp = ({ cart }) => {
  console.log("hghhgh");
  return (
    <div>
      <p>Items already in cart </p>
      <p>
        Your cart contains items from other restaurant. Would you like to reset
        your cart for adding items from this restaurant?
      </p>
      <div>
        <button>No</button>
        <button>Yes, Start fresh</button>
      </div>
    </div>
  );
};

export default OverlayComp;
