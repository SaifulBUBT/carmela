function CarFilter(){
    return (
        <div className="flex gap-1">
            <input type="checkbox" name="carCheckBox" id="" className="w-4" />
            <label className="font-medium" htmlFor="carCheckBox">Show Premium Only</label>
        </div>
    )
}

export default CarFilter;