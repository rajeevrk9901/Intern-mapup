import React from "react";

const RegionInfo = ({ currency, speedUnit, distanceUnit, volumeUnit, timezone }) => {
    return (
        <div>
            <p>Currency: {currency}</p>
            <p>Speed Unit: {speedUnit}</p>
            <p>Distance Unit: {distanceUnit}</p>
            <p>Volume Unit: {volumeUnit}</p>
            <p>Timezone(s): {timezone.join(", ")}</p>
        </div>
    );
};

export default RegionInfo;
