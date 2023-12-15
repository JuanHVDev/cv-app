"use client"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { usePersonalInfo } from "../store/CVStore";
import { Button } from "@/components/ui/button";
export default function Form()
{
  const { fullname, email, address, phoneNumber } = usePersonalInfo(state => state.personalInfo)
  const setPersonalInfo = usePersonalInfo(state => state.setPersonalInfo)
  const clearInfo = usePersonalInfo(state => state.clearInfo)
  return (
    <div>
      <Button className='p-4' onClick={() => clearInfo()}>
        Clear all information
      </Button>
      <Accordion type="single" collapsible className="text-2xl flex flex-col gap-5 p-4 w-96">
        <AccordionItem value="item-1">
          <AccordionTrigger>Personal Details</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="fullName" className="text-xl">Full Name:</Label>
              <Input id="fullName" type="text" placeholder="Juan Herrera Vázquez" value={fullname} onChange={(e) => setPersonalInfo({ fullname: e.target.value })} required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-xl">Email:</Label>
              <Input id="email" type="email" placeholder="juan@gmail.com" value={email} onChange={(e) => setPersonalInfo({ email: e.target.value })} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone" className="text-xl">Phone:</Label>
              <Input id="phone" type="tel" placeholder="5524831597" value={phoneNumber} onChange={(e) => setPersonalInfo({ phoneNumber: e.target.value })} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="address" className="text-xl">Address:</Label>
              <Input id="address" type="text" placeholder="Ciudad de México, Mx" value={address} onChange={(e) => setPersonalInfo({ address: e.target.value })} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
