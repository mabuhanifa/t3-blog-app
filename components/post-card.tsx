import { cn } from "@/lib/utils";

type Tag = {
  id: number;
  name: string;
  slug: string;
};

type PostCardProps = {
  label?: string;
  image?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  avatar?: string;
  dateISO?: string;
  dateText?: string;
  readTime?: string;
  labelClassName?: string;
  tags?: Tag[];
};

export function PostCard({
  label = "Post",
  image = "https://picsum.photos/800/600?random=123",
  imageAlt = "Post image",
  title = "Untitled",
  description = "Description goes here.",
  avatar = "https://picsum.photos/40?random=999",
  dateISO = "2024-04-01",
  dateText = "Apr 1, 2024",
  readTime = "5 min read",
  labelClassName,
  tags,
}: PostCardProps) {
  return (
    <article className="group rounded border border-stone-200 dark:border-stone-800 overflow-hidden hover:shadow-md transition">
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={imageAlt}
          className="w-full h-44 md:h-52 object-cover rounded-t group-hover:scale-105 transition"
        />
        <div className="absolute top-2 left-2 flex flex-wrap gap-2">
          <span
            className={cn(
              "inline-flex items-center rounded bg-black/5 text-white text-xs px-2 py-0.5 backdrop-blur-3xl",
              labelClassName
            )}
          >
            {label}
          </span>
          {tags?.slice(0, 2).map((tag) => (
            <span
              key={tag.id}
              className="inline-flex items-center rounded bg-black/5 text-white text-xs px-2 py-0.5 backdrop-blur-3xl"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-stone-600 dark:text-stone-400 mb-3">{description}</p>
        <div className="text-stone-500 text-xs flex items-center gap-3">
          <img
            src={avatar || "/placeholder.svg"}
            alt="Author avatar"
            className="w-6 h-6 rounded-full object-cover"
          />
          <time dateTime={dateISO}>{dateText}</time>
          <span aria-hidden="true">•</span>
          <span>{readTime}</span>
        </div>
      </div>
    </article>
  );
}
