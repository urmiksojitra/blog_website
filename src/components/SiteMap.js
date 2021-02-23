import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

function googleMap() {
    return (<GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 21.170240, lng: 72.831062 }} >
        <Marker position={{ lat: 21.218217923179953, lng: 72.89496619390577 }} />
    </GoogleMap>
    )



}
export default function SiteMap() {
    const WrappedMap = withScriptjs(withGoogleMap(googleMap))
    return (
        <div style={{ height: "100vw" }}>
            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAlA9q-gmxCNBL57H1gseun9gIgzAEVChI`}
                loadingElement={<div style={{ height: "100%" }}></div>}
                containerElement={<div style={{ height: "100%" }}></div>}
                mapElement={<div style={{ height: "400px" }}></div>}

            />
        </div>)
}