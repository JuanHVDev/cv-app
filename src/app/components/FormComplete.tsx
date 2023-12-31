import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import PersonalDetailsForm from "./PersonalDetailsForm";
import EducationDetailsForm from "./EducationDetailsForm";
import ExperiencesDetailsForm from "./ExperiencesDetailsForm";
import Buttons from "./Buttons";
export default function FormComplete()
{

  return (
    <div>
      <Buttons />
      <Accordion type="single" collapsible className="text-2xl flex flex-col gap-5 p-4 w-96">
        <AccordionItem value="item-1">
          <AccordionTrigger>Personal Details</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <PersonalDetailsForm />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Education Info</AccordionTrigger>
          <AccordionContent>
            <EducationDetailsForm />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Experiences</AccordionTrigger>
          <AccordionContent>
            <ExperiencesDetailsForm />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
