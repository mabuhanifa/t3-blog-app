import { SimplePostForm } from "@/components/forms/simple-post-form"

export const metadata = { title: "New Movies Post — Dashboard" }

export default function Page() {
  return (
    <div>
      <h3 className="font-bold text-lg mb-3">Movies Post</h3>
      <SimplePostForm category="Movies" />
    </div>
  )
}
