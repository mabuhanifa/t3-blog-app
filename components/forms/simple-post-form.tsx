"use client"

import { useActionState } from "react"
import { createPost } from "@/app/(site)/dashboard/actions"

type Props = {
  category: "Writing" | "Books" | "Photography" | "Travel" | "Movies"
  defaultValues?: Partial<Record<string, string>>
}

type State = {
  success: boolean
  message?: string
}

async function submit(_: State, formData: FormData): Promise<State> {
  const res = await createPost(formData)
  return { success: res.success, message: res.message }
}

export function SimplePostForm({ category, defaultValues = {} }: Props) {
  const [state, formAction, isPending] = useActionState(submit, { success: false })

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="category" value={category} />
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Title
        </label>
        <input
          id="title"
          name="title"
          required
          defaultValue={defaultValues.title}
          className="mt-1 w-full rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description / Excerpt
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          defaultValue={defaultValues.description}
          className="mt-1 w-full rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="image" className="block text-sm font-medium">
            Cover Image URL
          </label>
          <input
            id="image"
            name="image"
            type="url"
            defaultValue={defaultValues.image}
            placeholder="https://..."
            className="mt-1 w-full rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label htmlFor="avatar" className="block text-sm font-medium">
            Author Avatar URL
          </label>
          <input
            id="avatar"
            name="avatar"
            type="url"
            defaultValue={defaultValues.avatar}
            placeholder="https://..."
            className="mt-1 w-full rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="author" className="block text-sm font-medium">
            Author Name
          </label>
          <input
            id="author"
            name="author"
            defaultValue={defaultValues.author}
            className="mt-1 w-full rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            defaultValue={defaultValues.date}
            className="mt-1 w-full rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label htmlFor="readTime" className="block text-sm font-medium">
            Read Time (e.g., "5 min read")
          </label>
          <input
            id="readTime"
            name="readTime"
            defaultValue={defaultValues.readTime}
            className="mt-1 w-full rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          disabled={isPending}
          className="rounded px-3 py-2 bg-stone-900 text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {isPending ? "Saving..." : "Save Post"}
        </button>
        {state.message && (
          <p className="text-xs text-stone-500" aria-live="polite">
            {state.message}
          </p>
        )}
      </div>
    </form>
  )
}
