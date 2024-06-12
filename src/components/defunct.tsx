import { For, createSignal, type Component, type JSX } from "solid-js"

interface Tab {
  title: string
  content: JSX.Element
}

interface Props {
  tabs: Tab[]
}

const Tabs: Component<Props> = (props) => {
  const [activeTab, setActiveTab] = createSignal(0)

  return (
    <>
      <div class="flex gap-[14px] border-b">
        <For each={props.tabs}>
          {(tab, index) => (
            <button
              class={`h-[80px] w-[250px] rounded-t-[20px] font-jura text-[40px] font-semibold
${activeTab == index ? "bg-agayellow" : "bg-agagreen"}`}
            >
              {tab.title}
            </button>
          )}
        </For>
      </div>
      <div class="ubg-white rounded-b-25px border border-agayellow pl-[20px] pt-[20px]">
        {props.tabs[activeTab()].content}
      </div>
    </>
  )
}

export default Tabs
