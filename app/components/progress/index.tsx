import { Projects } from "@/app/lib/definitions";
import WorkTable from "./WorkTable";

const projectData: Projects[] = [
  {
    project_name: 'Bath House',
    project_description: 'Perk test done, waiting on spetic plans and permit.',
  },
  {
    project_name: 'Main Cabin Foundation',
    project_description: 'Foundation problem documented with video and pics, working on plans to reset back corner.',
  },
  {
    project_name: 'Bunk House',
    project_description: 'Floor disassembled and nails removed, need to salvage or burn remaining boards.',
  },
  {
    project_name: 'Garage Roof',
    project_description: 'Russ repairing door and roof.',
  },
  {
    project_name: 'Mobile Home',
    project_description: 'Seam between porch and kitchen leaking, needs repair.',
  },
  {
    project_name: 'Mobil Home Roof',
    project_description: 'Leaking above wood stove.',
  },
  {
    project_name: 'Boys Cabin',
    project_description: 'Stairs need rebuilding.',
  },
  {
    project_name: 'Brush',
    project_description: 'Collecting and burning all low brush is ongoing.',
  },
]

export default function WorkProgress() {
  return (
    <div className="container mx-auto p-6 flex flex-col items-center text-center">
      <h1 className="text-5xl text-center mb-6">Identified Project&apos;s Status</h1>
      <WorkTable projects={projectData ?? [] } />
    </div>
  )
}