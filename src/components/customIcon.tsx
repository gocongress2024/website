import L, { DivIcon } from "leaflet"
import { JSX, createRoot, onCleanup, type Component } from "solid-js"

export function createCustomIcon(IconComponent: Component): {
  icon: DivIcon
  setIconElement: (el: HTMLElement | undefined) => void
} {
  let iconContainer: HTMLElement | undefined | null = null

  const icon = L.divIcon({
    className: "custom-icon",
    iconSize: L.point(30, 30),
    iconAnchor: [16, 33],
    html: '<div id="icon-root"></div>',
  })

  const setIconElement = (el: HTMLElement | undefined) => {
    iconContainer = el
    if (iconContainer) {
      const root = iconContainer.querySelector("#icon-root")
      if (root) {
        createRoot(() => {
          const renderedIcon: JSX.Element = <IconComponent />
          root.appendChild(renderedIcon as unknown as Node)
        })
      }
    }
  }

  onCleanup(() => {
    if (iconContainer) {
      iconContainer.innerHTML = ""
    }
  })

  return { icon, setIconElement }
}
