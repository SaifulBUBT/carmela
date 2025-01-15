import PropTypes from "prop-types";

function CarDetails({car}){
    return (
        <div className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold mb-2">{car.title}</h2>
            <p><span className="font-medium">Brand:</span> {car.brand}</p>
            <p><span className="font-medium">Year:</span> {car.year}</p>
            <p><span className="font-medium">Price:</span> ${car.price}</p>
            <p><span className="font-medium">Premium:</span>{car.isPremium ? 'Yes' : 'No'}</p>
        </div>
    )
}

CarDetails.propTypes = {
    car: PropTypes.object.isRequired
}

export default CarDetails;