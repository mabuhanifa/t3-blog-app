"use client";

import { createPost } from "@/app/(site)/dashboard/actions";
import { FormEvent, useState } from "react";
import CreateTag from "./create-tag";
import TagSelector from "./tag-selector";

type Tag = { id: number; name: string; slug: string };

type Props = {
  category: "Writing" | "Books" | "Photography" | "Travel" | "Movies";
  defaultValues?: Partial<Record<string, string>>;
  allTags: Tag[];
};

export function SimplePostForm({
  category,
  defaultValues = {},
  allTags: initialAllTags,
}: Props) {
  const [allTags, setAllTags] = useState<Tag[]>(initialAllTags);
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState<string | undefined>();
  const [selectedTagIds, setSelectedTagIds] = useState<number[]>(
    defaultValues.tags?.split(",").map(Number).filter(Boolean) ?? []
  );

  const handleTagCreated = (newTag: Tag) => {
    setAllTags((prev) => [...prev, newTag]);
    setSelectedTagIds((prev) => [...prev, newTag.id]);
  };

  const handleTagChange = (tagId: number) => {
    setSelectedTagIds((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setMessage(undefined);

    const formData = new FormData(event.currentTarget);
    selectedTagIds.forEach((id) => {
      formData.append("tags", id.toString());
    });

    const res = await createPost(formData);

    setIsPending(false);
    setMessage(res.message);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
          required
          rows={3}
          defaultValue={defaultValues.description}
          className="mt-1 w-full rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>
      <div className="flex gap-5">
        <TagSelector
          allTags={allTags}
          selectedTagIds={selectedTagIds}
          onTagChange={handleTagChange}
        />
        <CreateTag onTagCreated={handleTagCreated} />
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
            defaultValue={
              "https://i.ibb.co.com/rK3kXt30/414642293-6660425590733599-3434683064128507056-n1.jpg"
            }
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
            required
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
        {message && (
          <p className="text-xs text-stone-500" aria-live="polite">
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
