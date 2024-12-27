const SizeToggle = ({ sizes, selectedSize, onSelectSize }) => {
  return (
    <div className="flex justify-center space-x-4 my-4">
      {sizes.map((size) => (
        <button
          key={size}
          className={`px-4 py-2 rounded ${selectedSize === size ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => onSelectSize(size)}
        >
          {size}mm
        </button>
      ))}
    </div>
  );
};
