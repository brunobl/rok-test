import React from 'react';
import translate from "../i18n/translate"
import MapPin from "../Helpers/MapPin"

const ListMap = ({locations, gps, cp, locale}) => {

    const getDistanceFromLatLonInKm = (lat1,lon1,lat2,lon2) => {
        var R = 6371; 
        var dLat = deg2rad(lat2-lat1);
        var dLon = deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d;
    }
      
    const deg2rad = (deg) => {
        return deg * (Math.PI/180)
    }

    const locationsByDistance = locations
                                    .map(loc => ({...loc, distance: getDistanceFromLatLonInKm(loc.lat, loc.lng, gps.lat, gps.lng)}))
                                    .sort((a,b) => a.distance-b.distance)

    return (
        <ul className="text-white w-full">
            {cp  ? (
                locations.filter(location => String(location.cp).startsWith(cp)).length > 0 ?
                    locations.filter(location => String(location.cp).startsWith(cp)).map((location=> 
                        <li className="border border-light m-2 bg-black-light">
                            <div className="flex p-4">
                                <div className="mx-4">
                                    <MapPin />
                                </div>
                                <div>               
                                    <p className="uppercase">{location.nom}</p>
                                    <p>{location.adresse} {location.cp}, {location.pays}</p>
                                    <p>{location.description}</p>
                                    <p>{location.distance && Math.round(location.distance*100)/100} km</p>
                                </div>
                            </div>
                        </li>
                    ))
                        :
                        <li className="border border-light m-2 bg-black-light">
                            <div className="flex p-4">
                                <p>{translate("aucune_adresse", locale)}</p>
                            </div>
                        </li>
                )
            :
            locationsByDistance.map((location=> 
            <li className="border border-light m-2 bg-black-light min-w-1/2">
                <div className="flex p-4">
                    <div className="mx-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="rgba(163,164,168,1)"/></svg>
                    </div>
                    <div>               
                        <p className="uppercase">{location.nom}</p>
                        <p>{location.adresse} {location.cp}, {location.pays}</p>
                        <p>{location.description}</p>
                        <p>{location.distance && Math.round(location.distance*100)/100} km</p>
                    </div>
                </div>
            </li>
            ))}
        </ul>
    );
};

export default ListMap;