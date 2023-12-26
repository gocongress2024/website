import { Tabs } from "@kobalte/core"
import type { Component } from "solid-js"
import EventTabs, { type EventTab } from "./eventTabs"

interface Props {
  events: EventTab[]
}

const HomePageTabs: Component<Props> = (props) => (
  <Tabs.Root>
    <Tabs.List class="flex gap-2 border-b md:gap-[14px]">
      <Tabs.Trigger
        class="tablinks rounded-t-[25px] bg-agagreen p-4 font-jura text-[16px] font-semibold ui-selected:bg-agayellow md:h-[80px] md:w-[250px] md:text-[36px]"
        value="events"
      >
        Events
      </Tabs.Trigger>
      <Tabs.Trigger
        class="tablinks rounded-t-[25px] bg-agagreen p-4 font-jura text-[16px] font-semibold ui-selected:bg-agayellow md:h-[80px] md:w-[250px] md:text-[36px]"
        value="community"
      >
        Community
      </Tabs.Trigger>
      <Tabs.Trigger
        class="tablinks rounded-t-[25px] bg-agagreen p-4 font-jura text-[16px] font-semibold ui-selected:bg-agayellow md:h-[80px] md:w-[250px] md:text-[36px]"
        value="excursions"
      >
        Excursions
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="events">
      <EventTabs events={props.events} />
    </Tabs.Content>
  </Tabs.Root>
)

export default HomePageTabs
