"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useCVInfo } from "../store/CVStore"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function ExperiencesDetailsForm()
{
  const { company, location, position, startDate, description, endDate, id } = useCVInfo(state => state.experience)
  const createForm = useCVInfo(state => state.createForm)
  const experienceInfo = useCVInfo(state => state.experienceInfo)
  const setCreateForm = useCVInfo(state => state.setCreateForm)
  const setExperience = useCVInfo(state => state.setExperience)
  const setExperienceInfo = useCVInfo(state => state.setExperienceInfo)
  const addExperience = useCVInfo(state => state.addExperience)

  const addInfo = () =>
  {
    addExperience({ company, location, position, startDate, description, endDate })
    setCreateForm(false)
  }

  const deleteItem = (id: string) =>
  {
    const newInfo = experienceInfo.filter(experience => experience.id !== id)
    setExperienceInfo(newInfo)
    setCreateForm(false)
  }

  const openForm = (id: string) =>
  {
    setCreateForm(true)
    const newInfo = experienceInfo.find((experience) => experience.id === id)
    setExperience({ ...newInfo })
  }

  return (
    <div>
      <div>
        {
          experienceInfo.map((experience) => (
            <Button onClick={() => openForm(experience.id)}>
              {experience.company}
            </Button>
          ))
        }
      </div>
      <Button onClick={() => setCreateForm(true)}>+ Experiences</Button>
      {createForm && (
        <>
          <div>
            <Label htmlFor="company">Company</Label>
            <Input type="text" id="company" value={company} onChange={(e) => setExperience({ company: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="position">Position</Label>
            <Input type="text" id="position" value={position} onChange={(e) => setExperience({ position: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="startDate">Start Date</Label>
            <Input type="text" id="startDate" value={startDate} onChange={(e) => setExperience({ startDate: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="endDate">End Date</Label>
            <Input type="text" id="endDate" value={endDate} onChange={(e) => setExperience({ endDate: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input type="text" id="location" value={location} onChange={(e) => setExperience({ location: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea placeholder="description" id="description" defaultValue={description} onChange={(e) => setExperience({ description: e.target.value })} />
          </div>
          <Button onClick={() => setCreateForm(false)}>Cancel</Button>
          <Button onClick={addInfo}>Save</Button>
          <Button onClick={() => deleteItem(id)}>Delete</Button>
        </>
      )}
    </div>
  )
}