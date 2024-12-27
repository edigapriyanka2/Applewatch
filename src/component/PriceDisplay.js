const PriceDisplay = ({ basePrice, casePrice, bandPrice }) => {
  const totalPrice = basePrice + casePrice + bandPrice;

  return (
    <div className="text-center my-4">
      <h2 className="text-2xl font-bold">Total: ${totalPrice}</h2>
    </div>
  );
};