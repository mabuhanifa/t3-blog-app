"use client";

import { useEffect, useRef, useState } from "react";

type Tag = {
  id: number;
  name: string;
  slug: string;
};

type Props = {
  allTags?: Tag[];
  selectedTagIds: number[];
  onTagChange: (tagId: number) => void;
};

export default function TagSelector({
  allTags = [],
  selectedTagIds,
  onTagChange,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedTags = allTags.filter((tag) => selectedTagIds.includes(tag.id));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <fieldset className="w-1/2">
      <legend className="block text-sm font-medium mb-2">Tags</legend>
      <div className="relative" ref={containerRef}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-wrap gap-2 p-2 rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 min-h-[42px] cursor-pointer"
        >
          {selectedTags.map((tag) => (
            <div
              key={tag.id}
              className="flex items-center gap-1 bg-emerald-500 text-white text-sm rounded-full px-2 py-1"
            >
              {tag.name}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent dropdown from opening
                  onTagChange(tag.id);
                }}
                className="text-white hover:text-stone-200 text-md"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
        {isOpen && (
          <div className="absolute z-10 top-full left-0 w-full mt-1 rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-lg">
            <div className="max-h-60 overflow-y-auto p-2">
              {allTags.map((tag) => (
                <div key={tag.id} className="flex items-center p-1">
                  <input
                    id={`tag-dropdown-${tag.id}`}
                    type="checkbox"
                    checked={selectedTagIds.includes(tag.id)}
                    onChange={() => onTagChange(tag.id)}
                    className="h-4 w-4 rounded border-stone-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <label
                    htmlFor={`tag-dropdown-${tag.id}`}
                    className="ml-2 block text-sm text-stone-900 dark:text-stone-100"
                  >
                    {tag.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </fieldset>
  );
}
