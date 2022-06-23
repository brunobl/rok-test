import React from "react"

//import L from 'leaflet';
import * as L from 'leaflet';

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";




const Location = ({ locations, gps, locale }) => {

    const iconMap = typeof window !== 'undefined' ? new L.Icon({
        iconUrl: require("./localisation-noir.svg"),
        iconRetinaUrl: require("./localisation-noir.svg"),
        iconAnchor: [10, 40],
        popupAnchor: [10, -44],
        iconSize: [25, 55],
        shadowSize: [68, 95],
        shadowAnchor: [20, 92]
    }) : null;

    const getZoomLevel = () => {
        if (gps.lat != null && gps.lng != null) {
            return 6;
        }
        switch (locale) {
            case 'fr':
                return 5;
            default:
                return 4;
        }
    }

    const getSingleLocation = () => {
        if (gps.lat != null && gps.lng != null) {
            return [gps.lat, gps.lng]
        }
        switch (locale) {
            case 'fr':
                return [46.22, 2.2]
            default:
                return [48.5, 2.2]
        }
    }

    /* Non utilisé pour le moment
    
    const getMapCenter = (locations) => {
        if (gps.lat != null && gps.lng != null) {
            return [[gps.lat, gps.lng]]
        }
        let latLngBounds = [];
        for (let i = 0; i < locations.length; i++) {
            let { lat, lng } = locations[i];
            let coords = [];
            coords.push(lat.slice(0, -1), lng.slice(0, -1));
            latLngBounds.push(coords);
        }
        return latLngBounds.length > 1 ? latLngBounds : null;
    }
    */

    /*                 <Marker key={i} position={position} icon={iconMap}> */

    const listMarkers = (locations) => {
        return locations.map((node, i) => {
            let { lat, lng, nom, adresse, pays, jours, description, heures } = node;
            let position = [lat, lng];
            return (
                <Marker key={i} position={position}>
                    <Popup>
                        {!!nom &&
                            <b>{nom}</b>
                        }
                        {!!adresse &&
                            <>{adresse}, {pays && pays}<br /></>
                        }
                        {!!jours &&
                            <>{jours}<br /></>
                        }
                        {!!heures &&
                            <>{heures}<br /></>
                        }
                        {!!description &&
                            <>{description}<br /></>
                        }
                    </Popup>
                </Marker>
            )
        })
    };


   return (
        
        typeof window !== 'undefined' ?
            <div className="h-full w-fill md:pt-12">
                <MapContainer center={getSingleLocation()} zoom={getZoomLevel()} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {listMarkers(locations)}
                </MapContainer>
        </div>
        :
        null
    )


}

export default Location;