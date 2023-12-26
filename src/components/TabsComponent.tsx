import { Tabs } from "@kobalte/core"
import { type Component, type JSX } from "solid-js"

interface Tab {
  title: string
  content: JSX.Element
}

interface Props {
  tabs: Tab[]
}

const TabsComponent: Component = () => (
  <Tabs.Root>
    <Tabs.List class="flex gap-[14px] border-b">
      <Tabs.Trigger
        class="ui-selected:bg-agayellow h-[80px] w-[250px] rounded-t-[25px] bg-agagreen font-jura text-[40px] font-semibold"
        value="events"
      >
        Events
      </Tabs.Trigger>
      <Tabs.Trigger
        class="ui-selected:bg-agayellow h-[80px] w-[250px] rounded-t-[25px] bg-agagreen font-jura text-[40px] font-semibold"
        value="community"
      >
        Community
      </Tabs.Trigger>
      <Tabs.Trigger
        class="ui-selected:bg-agayellow h-[80px] w-[250px] rounded-t-[25px] bg-agagreen font-jura text-[40px] font-semibold"
        value="excursions"
      >
        Excursions
      </Tabs.Trigger>
    </Tabs.List>
  </Tabs.Root>
)
