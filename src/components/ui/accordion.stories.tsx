import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";

const meta = {
  title: "UI/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "single",
    collapsible: true,
    className: "w-[400px]",
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components'
          aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  args: {
    type: "multiple",
    className: "w-[400px]",
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>First section</AccordionTrigger>
        <AccordionContent>
          This is the first section content. Multiple sections can be open at
          the same time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second section</AccordionTrigger>
        <AccordionContent>
          This is the second section content. Try opening multiple sections.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third section</AccordionTrigger>
        <AccordionContent>
          This is the third section content. All sections can be open
          simultaneously.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const DefaultOpen: Story = {
  args: {
    type: "single",
    defaultValue: "item-2",
    className: "w-[400px]",
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>First section</AccordionTrigger>
        <AccordionContent>This is the first section content.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second section (default open)</AccordionTrigger>
        <AccordionContent>
          This section is open by default because we set defaultValue="item-2".
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third section</AccordionTrigger>
        <AccordionContent>This is the third section content.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const CustomStyling: Story = {
  args: {
    type: "single",
    collapsible: true,
    className: "w-[400px]",
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem
        value="item-1"
        className="border-b-0 rounded-md border border-gray-200 px-4 mb-2"
      >
        <AccordionTrigger className="py-3 text-base font-semibold">
          Custom styled accordion
        </AccordionTrigger>
        <AccordionContent className="text-gray-600">
          This accordion has custom styling with rounded corners, padding, and
          spacing.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="border-b-0 rounded-md border border-gray-200 px-4 mb-2"
      >
        <AccordionTrigger className="py-3 text-base font-semibold">
          Second custom item
        </AccordionTrigger>
        <AccordionContent className="text-gray-600">
          Each accordion item can be styled independently.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="border-b-0 rounded-md border border-gray-200 px-4"
      >
        <AccordionTrigger className="py-3 text-base font-semibold">
          Third custom item
        </AccordionTrigger>
        <AccordionContent className="text-gray-600">
          You can customize the appearance to match your design system.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
