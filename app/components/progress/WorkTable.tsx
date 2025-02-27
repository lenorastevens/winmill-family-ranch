import { Projects } from "@/app/lib/definitions";

export default function WorkTable({ projects }: { projects: Projects[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border-2 border-accent1">
      <table className="table-auto border-collapse rounded-lg bg-gradient-to-r from-foreground via-accent2 to-foreground text-accent1 text-2xl font-bigShot">
        <thead>
          <tr className="rounded-t-lg">
            <th className="p-3 border-b-2 border-r-2 border-accent1">Project Name</th>
            <th className="p-3 border-b-2 border-l-2 border-accent1">Description</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(projects) && projects.length > 0 ? (
            projects.map ((project, index) => ( 
            <tr key={index}>
                <td className="p-3 border-b-2 border-r-2 border-accent1">{project.project_name}</td>
                <td className="p-3 border-b-2 border-l-2 border-accent1">{project.project_description}</td>
            </tr>
            ))
          ) : (
            <p>No Projects available.</p>
          )}
        </tbody>
    </table>
      
    </div>
  )
}