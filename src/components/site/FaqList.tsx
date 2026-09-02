import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/data/faqs";

export function FaqList({
  items,
  limit,
}: {
  items: FaqItem[];
  limit?: number;
}) {
  const visibleItems = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <Accordion type="single" collapsible className="w-full">
      {visibleItems.map((item, index) => (
        <AccordionItem key={item.question} value={`faq-${index}`} className="border-black/10">
          <AccordionTrigger className="py-6 text-left text-base font-semibold leading-6 tracking-tight text-foreground hover:no-underline sm:text-lg">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="max-w-3xl pb-6 text-sm leading-7 text-muted-foreground sm:text-base">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
