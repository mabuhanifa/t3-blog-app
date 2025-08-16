"use client";

import { useState } from "react";

type Tag = {
  id: number;
  name: string;
  slug: string;
};

type Props = {
  onTagCreated: (newTag: Tag) => void;
};

export default function CreateTag({ onTagCreated }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTagName, setNewTagName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!newTagName.trim()) return;

    const response = await fetch("/api/tags", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newTagName }),
    });

    if (response.ok) {
      const newTag = await response.json();
      onTagCreated(newTag);
      setNewTagName("");
      setIsModalOpen(false);
    } else {
      const { message } = await response.json();
      setError(message || "Failed to create tag");
    }
  };

  return (
    <div className="self-end">
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="rounded px-3 py-2 bg-stone-200 dark:bg-stone-800 text-sm hover:bg-stone-300 dark:hover:bg-stone-700"
      >
        + Create Tag
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-stone-900 p-4 rounded-lg shadow-lg w-full max-w-sm">
            <h3 className="text-lg font-medium mb-2">Create New Tag</h3>
            <div>
              <input
                type="text"
                value={newTagName}
                onChange={(e) => setNewTagName(e.target.value)}
                placeholder="Tag name"
                className="w-full rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setError(null);
                  }}
                  className="px-3 py-1 rounded text-sm"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-3 py-1 rounded text-sm bg-emerald-500 text-white"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
