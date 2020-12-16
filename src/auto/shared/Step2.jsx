import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { getBrands } from '../../services/brands';
import { getVehicles } from '../../services/vehicles';
import useAsync  from "../../hooks/useAsync";
import REQUEST_STATUS from '../../consts/requestStatus';

function Step2(){
    const [radio, setRadio] = useState("");

    const [selectedBrand, setSelectedBrand] = useState(null);

    const [vehicles, setVehicles] = useState(null);
    const [selectedVehicle, setSelectedVehicle] = useState(null);

    const { status, error, data: brands, runPromise } = useAsync({
        status: REQUEST_STATUS.IDLE,
      });

    const vehicleType = 'carros';
//let brands = data.map(x => ({value: x.id, label: x.name}));
      useEffect(() => {

        if(brands) return;

        return runPromise(getBrands(vehicleType));
        
      }, [brands, runPromise]);

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
                options={status == REQUEST_STATUS.RESOLVED ? brands.map(x => ({value: x.id, label: x.name})) : []}
                isDisabled={status != REQUEST_STATUS.RESOLVED}
            />

            {/*<Select
                value={selectedVehicle}
                onChange={vehicleChanged}
                options={vehicles}
                isDisabled={!vehicles}
            /> */}

        </form>
    );
}

export default Step2;