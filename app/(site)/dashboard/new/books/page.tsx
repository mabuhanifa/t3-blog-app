import { SimplePostForm } from "@/components/forms/simple-post-form"

export const metadata = { title: "New Books Post — Dashboard" }

export default function Page() {
  return (
    <div>
      <h3 className="font-bold text-lg mb-3">Books Post</h3>
      <SimplePostForm category="Books" />
    </div>
  )
}
