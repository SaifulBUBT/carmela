import CarDetails from "./CarDetails";


const carList = [   
    { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
    { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
    { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
    { id: 4, title: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, isPremium: false },
    { id: 5, title: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, isPremium: true },
]

function CarList(){
    return (
        <ul className="flex flex-wrap gap-2 md:gap-4">
            {
                carList.map((car) =>(
                    <li key={car.id} className="w-[48.5%]  md:w-[32.33%]">
                        <CarDetails car={car} />
                    </li>
                ))
            }
            
        </ul>
    )
}

export default CarList;