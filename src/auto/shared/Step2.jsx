import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { getBrands } from '../../services/brands';
import { getVehicles } from '../../services/vehicles';

function Step2(){
    const [radio, setRadio] = useState("");

    const [brands, setBrands] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);

    const [vehicles, setVehicles] = useState(null);
    const [selectedVehicle, setSelectedVehicle] = useState(null);

    const vehicleType = 'carros';

      useEffect(() => {

        if(!brands){
            getBrands(vehicleType)
            .then(data => {
                let brands = data.map(x => ({value: x.id, label: x.name}));
                setBrands(brands);
            });
        }
        
      });

      const vehicleBrandChanged = (e) => {
        
        getVehicles(vehicleType, e.value).then(data => {
            let vehicles = data.map(x => ({value: x.id, label: x.name}));
            setVehicles(vehicles);
        });

        setSelectedBrand(e);
      };

      const vehicleChanged = (e) => {

        setSelectedVehicle(e);
      };

    return(
        <form>
            <label htmlFor="radioYes">
                Sim
                <input type="radio" value="yes" checked={radio === 'yes'} onChange={(e) => setRadio(e.target.value)}/>
            </label>
            <label htmlFor="radioYes">
                Não
                <input type="radio" value="no" checked={radio === 'no'} onChange={(e) => setRadio(e.target.value)}/>
            </label>

            <Select
                value={selectedBrand}
                onChange={vehicleBrandChanged}
                options={brands}
            />

            <Select
                value={selectedVehicle}
                onChange={vehicleChanged}
                options={vehicles}
                isDisabled={!vehicles}
            />

        </form>
    );
}

export default Step2;