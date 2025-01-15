import SearchBar from "./SearchBar";
import CarFilter from "./CarFilter";

function SearchAndFilter() {
    return (
      <div className="flex items-center gap-4 mb-5">
        <SearchBar />
        <CarFilter />
      </div>
    )
  }
  
  export default SearchAndFilter;
  