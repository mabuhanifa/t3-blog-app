import { db } from "../lib/db";
import { categories, posts, postsToTags, tags, users } from "../lib/db/schema";

const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text

async function main() {
  console.log("Seeding database...");

  // Clean up existing data
  console.log("Clearing old data...");
  await db.delete(postsToTags);
  await db.delete(posts);
  await db.delete(tags);
  await db.delete(categories);
  await db.delete(users);

  // Seed users
  const seededUsers = await db
    .insert(users)
    .values([
      {
        id: "user_2a9r8s7t6f5e4d3c2b1a0z9y",
        name: "John Doe",
        email: "john.doe@example.com",
        image: "https://i.pravatar.cc/150?u=john.doe@example.com",
      },
      {
        id: "user_1b2c3d4e5f6g7h8i9j0k",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        image: "https://i.pravatar.cc/150?u=jane.smith@example.com",
      },
    ])
    .returning();

  console.log(`Seeded ${seededUsers.length} users.`);

  // Seed categories
  const seededCategories = await db
    .insert(categories)
    .values([
      { name: "Writing", slug: "writing" },
      { name: "Books", slug: "books" },
      { name: "Technology", slug: "technology" },
      { name: "Travel", slug: "travel" },
    ])
    .returning();

  console.log(`Seeded ${seededCategories.length} categories.`);

  // Seed posts
  const writingCategory = seededCategories.find((c) => c.name === "Writing")!;
  const booksCategory = seededCategories.find((c) => c.name === "Books")!;
  const techCategory = seededCategories.find((c) => c.name === "Technology")!;

  const user1 = seededUsers[0];
  const user2 = seededUsers[1];

  const postsToSeed = [
    {
      title: "The Art of Storytelling",
      slug: slugify("The Art of Storytelling"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop",
      content:
        "Storytelling is the most powerful way to put ideas into the world today. Stories are what connect us, what make us human. Great stories can move us, inspire us, and even change our lives. In this post, we explore the key elements of compelling storytelling and how you can use them to craft your own narratives.",
      description:
        "A deep dive into the techniques of compelling storytelling.",
      readTime: "8 min read",
      authorId: user1.id,
      categoryId: writingCategory.id,
    },
    {
      title: "My Favorite Books of 2023",
      slug: slugify("My Favorite Books of 2023"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=2071&auto=format&fit=crop",
      content:
        "This year has been an incredible journey through the pages of many books. From gripping thrillers to heartwarming tales, I've discovered some true gems. Here's a list of my absolute favorites from 2023, the ones that kept me up at night and left a lasting impression. I hope you find your next great read among them.",
      description: "A curated list of must-read books from the past year.",
      readTime: "12 min read",
      authorId: user2.id,
      categoryId: booksCategory.id,
    },
    {
      title: "The Future of AI",
      slug: slugify("The Future of AI"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop",
      content:
        "Artificial Intelligence is evolving at an unprecedented pace. What was once science fiction is now becoming a part of our daily lives. In this article, we'll look at the current state of AI, explore the most exciting trends, and speculate on what the future holds for this transformative technology. The possibilities are both thrilling and a little daunting.",
      description: "What's next for AI? A look into the future.",
      readTime: "10 min read",
      authorId: user1.id,
      categoryId: techCategory.id,
    },
  ];

  const seededPosts = await db.insert(posts).values(postsToSeed).returning();

  console.log(`Seeded ${seededPosts.length} posts.`);

  // Seed tags
  const seededTags = await db
    .insert(tags)
    .values([
      { name: "Productivity", slug: "productivity" },
      { name: "Inspiration", slug: "inspiration" },
      { name: "Tech", slug: "tech" },
      { name: "Reading", slug: "reading" },
      { name: "AI", slug: "ai" },
    ])
    .returning();

  console.log(`Seeded ${seededTags.length} tags.`);

  // Link posts and tags
  const tagInspiration = seededTags.find((t) => t.name === "Inspiration")!;
  const tagProductivity = seededTags.find((t) => t.name === "Productivity")!;
  const tagReading = seededTags.find((t) => t.name === "Reading")!;
  const tagTech = seededTags.find((t) => t.name === "Tech")!;
  const tagAI = seededTags.find((t) => t.name === "AI")!;

  await db.insert(postsToTags).values([
    // Post 1 tags
    { postId: seededPosts[0].id, tagId: tagInspiration.id },
    { postId: seededPosts[0].id, tagId: tagProductivity.id },
    // Post 2 tags
    { postId: seededPosts[1].id, tagId: tagReading.id },
    // Post 3 tags
    { postId: seededPosts[2].id, tagId: tagTech.id },
    { postId: seededPosts[2].id, tagId: tagAI.id },
  ]);

  console.log("Linked posts and tags.");

  console.log("Database seeding complete.");
}

main().catch((err) => {
  console.error("Error during seeding:", err);
  process.exit(1);
});
