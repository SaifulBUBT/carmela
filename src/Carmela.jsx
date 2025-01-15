import Header from "./Header";
import SearchAndFilter from "./SearchAndFilter";
import CarList from "./CarList";


function Carmela() {
    return (
      <div className="container mx-auto p-4">
        <Header />
        <SearchAndFilter />
        <CarList />
      </div>
    )
  }
  
  export default Carmela;
  