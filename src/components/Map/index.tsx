import React from 'react'

import { MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import { CreateMaker } from './Maker/CreateMaker'
import { ViewMakers } from './Maker/ViewMakers'
import { LatLngTupleType, MapProps } from './types'
import { StatusRequest } from '../StatusRequest'

export const Map = ({
  width,
  height,
  center,
  zoom,
  setPosition,
  listItens,
  error,
  loading
}: MapProps) => {
  if (error || loading) {
    return <StatusRequest loading={loading} error={error} />
  }

  return (
    <MapContainer
      zoom={zoom}
      minZoom={2}
      maxZoom={10}
      center={center}
      style={{ width: width, height: height, zIndex: 3 }}
      maxBoundsViscosity={1.0}
      id="mapid"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data © OpenStreetMap contributors"
      />
      <WMSTileLayer
        url="http://sistemas.gt4w.com.br/geoserver/processo_seletivo/wms"
        layers="processo_seletivo:ufs_brasil"
        format="image/png"
        transparent={true}
        attribution="WMS para buscar as geometrias dos UFs"
      />

      {listItens ? (
        <ViewMakers listItens={listItens} />
      ) : (
        <CreateMaker
          location={center}
          setLocation={(value: LatLngTupleType) => {
            setPosition(value)
          }}
        />
      )}
    </MapContainer>
  )
}

Map.defaultProps = {
  width: '100%',
  height: '100%',
  zoom: 4,
  center: [-14.239209931938646, -50.261992558398134] as LatLngTupleType,
  setPosition: null,
  listItens: null
}
