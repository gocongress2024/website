import { Map, Marker, icon, tileLayer } from "leaflet"
import "leaflet/dist/leaflet.css"
import { createUniqueId, onMount, type Component } from "solid-js"

interface Place {
  lat: number
  lng: number
  address: string
  name: string
}

interface Props {
  places: Place[]
  class: string
}

import markerIcon from "../../node_modules/leaflet/dist/images/marker-icon.png"
Marker.prototype.setIcon(
  icon({ iconUrl: markerIcon.src, iconSize: [25, 41], iconAnchor: [12, 41] }),
)

const MapComponent: Component<Props> = (props) => {
  const id = createUniqueId()

  onMount(() => {
    const map = new Map(id).setView(
      [props.places[0].lat, props.places[0].lng],
      13,
    )
    tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map)

    props.places.forEach((place, i) => {
      const m = new Marker([place.lat, place.lng]).addTo(map)
      m.bindPopup(place.name)
      if (i == 0) {
        m.openPopup()
      }
    })
  })

  return <div class={props.class} id={id} />
}

export default MapComponent
