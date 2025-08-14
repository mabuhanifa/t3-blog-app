"use client"

import dynamic from "next/dynamic"
import { useActionState, useEffect, useState } from "react"
import { createPost } from "@/app/(site)/dashboard/actions"

// Dynamically import SimpleMDE (no SSR)
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false })
// Editor styles
import "easymde/dist/easymde.min.css"

type State = { success: boolean; message?: string }

async function submit(_: State, formData: FormData): Promise<State> {
  const res = await createPost(formData)
  return { success: res.success, message: res.message }
}

export function WritingForm() {
  const [state, formAction, isPending] = useActionState(submit, { success: false })
  const [content, setContent] = useState<string>("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="category" value="Writing" />
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Title
        </label>
        <input
          id="title"
          name="title"
          required
          className="mt-1 w-full rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium">
          Cover Image URL
        </label>
        <input
          id="image"
          name="image"
          type="url"
          placeholder="https://..."
          className="mt-1 w-full rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="author" className="block text-sm font-medium">
            Author Name
          </label>
          <input
            id="author"
            name="author"
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
            placeholder="https://..."
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
            className="mt-1 w-full rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Content</label>
        {/* Submit Markdown content with the form */}
        <input type="hidden" name="content" value={content} />
        <div className="rounded border border-stone-300 dark:border-stone-700 overflow-hidden bg-white dark:bg-stone-900">
          {mounted ? (
            <SimpleMDE
              value={content}
              onChange={setContent}
              options={{
                spellChecker: false,
                status: false,
                placeholder: "Write your post in Markdown...",
                toolbar: [
                  "bold",
                  "italic",
                  "heading",
                  "|",
                  "quote",
                  "code",
                  "link",
                  "image",
                  "|",
                  "unordered-list",
                  "ordered-list",
                  "|",
                  "preview",
                  "side-by-side",
                  "fullscreen",
                  "|",
                  "guide",
                ],
                minHeight: "200px",
              }}
            />
          ) : (
            <div className="p-3 text-sm text-stone-500">Loading editor…</div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          disabled={isPending}
          className="rounded px-3 py-2 bg-stone-900 text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {isPending ? "Saving..." : "Publish"}
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
