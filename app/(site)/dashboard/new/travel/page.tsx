import { SimplePostForm } from "@/components/forms/simple-post-form"

export const metadata = { title: "New Travel Post — Dashboard" }

export default function Page() {
  return (
    <div>
      <h3 className="font-bold text-lg mb-3">Travel Post</h3>
      <SimplePostForm category="Travel" />
    </div>
  )
}
