import { WritingForm } from "@/components/forms/writing-form"

export const metadata = {
  title: "New Writing Post — Dashboard",
}

export default function Page() {
  return (
    <div>
      <h3 className="font-bold text-lg mb-3">Writing Post</h3>
      <WritingForm />
    </div>
  )
}
