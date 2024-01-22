import { Tabs } from "@kobalte/core"
import type { GetImageResult } from "astro"
import { For, type Component } from "solid-js"

export interface EventTab {
  title: string
  description: string
  image: GetImageResult
}

type SlotKey = `slot${string}`
interface Props {
  events: EventTab[]
  [key: SlotKey]: any
}

const EventTabs: Component<Props> = (props) => (
  <Tabs.Root class="rounded-b-[25px] border-[5px] border-agayellow bg-white">
    <Tabs.List class="flex flex-wrap">
      <For each={props.events}>
        {(event) => (
          <Tabs.Trigger
            value={event.title.toLowerCase()}
            class="px-3 font-jura text-[16px] font-bold text-agablue ui-selected:text-black md:text-[32px]"
          >
            {event.title}
          </Tabs.Trigger>
        )}
      </For>
    </Tabs.List>
    <For each={props.events}>
      {(event) => (
        <Tabs.Content value={event.title.toLowerCase()}>
          <img class="mx-auto pt-24" src={event.image.src} />
          <div class="mx-auto max-w-2xl pb-16 pt-8 font-sans text-[20px]">
            {event.description}
          </div>
        </Tabs.Content>
      )}
    </For>
  </Tabs.Root>
)

export default EventTabs
