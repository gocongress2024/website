import { Accordion } from "@kobalte/core"
import { For, type Component } from "solid-js"

interface FAQ {
  question: string
  answer: string
}

interface Props {
  faqs: FAQ[]
}

const FAQs: Component<Props> = (props) => (
  <Accordion.Root multiple>
    <For each={props.faqs}>
      {(faq, i) => (
        <Accordion.Item value={`faq-${i}`}>
          <Accordion.Header class="mt-[20px] w-full rounded-[25px] bg-agayellow px-[40px] py-[25px] text-left font-jura text-[40px] font-semibold text-white">
            <Accordion.Trigger class="h-full w-full">
              {faq.question}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content class="m-auto w-11/12 bg-gray-100 p-4">
            {faq.answer}
          </Accordion.Content>
        </Accordion.Item>
      )}
    </For>
  </Accordion.Root>
)

export default FAQs
