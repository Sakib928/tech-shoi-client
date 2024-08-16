const SortingMethods = () => {
  return (
    <div className="ml-4 md:flex gap-2">
      <select className="border border-gray-300 rounded-lg p-2">
        <option value="" disabled selected>
          Select Price Range
        </option>
        <option value="0-1000">0-1000</option>
        <option value="1000-2000">1000-2000</option>
        <option value="3000-4000">3000-4000</option>
      </select>
      <select className="border border-gray-300 rounded-md p-2">
        <option value="" disabled selected>
          Sort by
        </option>
        <option value="date: newest first">date: newest first</option>
        <option value="price: low to high">price: low to high</option>
        <option value="price: high to low">price: high to low</option>
      </select>
    </div>
  );
};

export default SortingMethods;
