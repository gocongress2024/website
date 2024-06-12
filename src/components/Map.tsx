import { Control, Map, Marker, icon, tileLayer } from "leaflet"
import "leaflet/dist/leaflet.css"
import { createUniqueId, onMount, type Component } from "solid-js"
import { createCustomIcon } from "./customIcon"

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

const locationIcon = (
  <svg
    fill="currentColor"
    stroke-width="0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    height="1em"
    width="1em"
    style="overflow: visible; color: currentcolor;"
  >
    <path d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
  </svg>
)

import { FaSolidLocationDot } from "solid-icons/fa"
import markerIcon from "../../node_modules/leaflet/dist/images/marker-icon.png"
Marker.prototype.setIcon(
  icon({ iconUrl: markerIcon.src, iconSize: [25, 41], iconAnchor: [12, 41] }),
)

const MapComponent: Component<Props> = (props) => {
  const id = createUniqueId()
  const { icon: redIcon, setIconElement: setRedIconElement } = createCustomIcon(
    () => <FaSolidLocationDot class="h-8 w-8 fill-red-600" />,
  )
  const { icon: blueIcon, setIconElement: setBlueIconElement } =
    createCustomIcon(() => <FaSolidLocationDot class="h-8 w-8 fill-blue-600" />)

  onMount(() => {
    const map = new Map(id).setView(
      [props.places[0].lat, props.places[0].lng],
      15,
    )
    tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map)
    new Control.Scale().addTo(map)

    props.places.forEach((place, i) => {
      if (i == 0) {
        const m = new Marker([place.lat, place.lng], {
          icon: redIcon,
        }).addTo(map)
        setRedIconElement(m.getElement())
        m.bindPopup(place.name)
        m.openPopup()
      } else {
        const m = new Marker([place.lat, place.lng], {
          icon: blueIcon,
        }).addTo(map)
        setBlueIconElement(m.getElement())
        m.bindPopup(place.name)
      }
    })
  })

  return <div class={props.class} id={id} />
}

export default MapComponent
