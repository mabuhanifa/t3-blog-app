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
      { name: "Movies", slug: "movies" },
      { name: "Travel", slug: "travel" },
      { name: "Photography", slug: "photography" },
    ])
    .returning();

  console.log(`Seeded ${seededCategories.length} categories.`);

  // Seed posts
  const writingCategory = seededCategories.find((c) => c.name === "Writing")!;
  const booksCategory = seededCategories.find((c) => c.name === "Books")!;
  const techCategory = seededCategories.find((c) => c.name === "Technology")!;
  const travelCategory = seededCategories.find((c) => c.name === "Travel")!;
  const moviesCategory = seededCategories.find((c) => c.name === "Movies")!;
  const photographyCategory = seededCategories.find(
    (c) => c.name === "Photography"
  )!;

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
    {
      title: "Exploring the Alps",
      slug: slugify("Exploring the Alps"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
      content:
        "A journey through the breathtaking landscapes of the Swiss Alps. From hiking trails to serene lakes, this is a travel diary of an unforgettable adventure.",
      description:
        "A travel diary of an unforgettable adventure in the Swiss Alps.",
      readTime: "15 min read",
      authorId: user2.id,
      categoryId: travelCategory.id,
    },
    {
      title: "Getting Started with Next.js 14",
      slug: slugify("Getting Started with Next.js 14"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
      content:
        "Next.js 14 brings a host of new features and improvements. This guide will walk you through setting up a new project and exploring the key features of this powerful React framework.",
      description:
        "A beginner's guide to setting up a project with Next.js 14.",
      readTime: "11 min read",
      authorId: user1.id,
      categoryId: techCategory.id,
    },
    {
      title: "The Power of Habit",
      slug: slugify("The Power of Habit"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1533709752211-118fcaf03312?q=80&w=2070&auto=format&fit=crop",
      content:
        "How do habits work and how can we change them? This post delves into the science behind habit formation and offers practical advice for building good habits and breaking bad ones.",
      description: "Understanding the science of habit formation.",
      readTime: "9 min read",
      authorId: user2.id,
      categoryId: writingCategory.id,
    },
    {
      title: "A Guide to Mindful Reading",
      slug: slugify("A Guide to Mindful Reading"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop",
      content:
        "In a world of distractions, mindful reading can be a sanctuary. Learn how to slow down, engage deeply with texts, and get more out of your reading time.",
      description: "Techniques for deeper engagement with books.",
      readTime: "7 min read",
      authorId: user1.id,
      categoryId: booksCategory.id,
    },
    {
      title: "The Rise of Serverless",
      slug: slugify("The Rise of Serverless"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1573495627361-ab2b808a68a8?q=80&w=2071&auto=format&fit=crop",
      content:
        "Serverless computing is changing the way we build and deploy applications. Explore the benefits, challenges, and popular platforms in the serverless ecosystem.",
      description: "An overview of serverless architecture and its impact.",
      readTime: "13 min read",
      authorId: user2.id,
      categoryId: techCategory.id,
    },
    {
      title: "Finding Your Voice as a Writer",
      slug: slugify("Finding Your Voice as a Writer"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
      content:
        "Every writer has a unique voice. This post explores how to find and develop your own distinct style, making your writing more authentic and engaging.",
      description: "Tips for developing a unique writing style.",
      readTime: "6 min read",
      authorId: user1.id,
      categoryId: writingCategory.id,
    },
    {
      title: "Kyoto: A Journey Through Time",
      slug: slugify("Kyoto: A Journey Through Time"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070&auto=format&fit=crop",
      content:
        "From ancient temples to serene bamboo forests, Kyoto is a city that captivates the soul. Join us on a visual and narrative journey through Japan's former imperial capital.",
      description: "Discovering the ancient beauty of Kyoto.",
      readTime: "14 min read",
      authorId: user2.id,
      categoryId: travelCategory.id,
    },
    {
      title: "Classic Novels Everyone Should Read",
      slug: slugify("Classic Novels Everyone Should Read"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2070&auto=format&fit=crop",
      content:
        "Some books stand the test of time for a reason. Here is a curated list of classic novels that continue to resonate with readers across generations.",
      description: "A list of timeless literary masterpieces.",
      readTime: "10 min read",
      authorId: user1.id,
      categoryId: booksCategory.id,
    },
    {
      title: "Drizzle ORM: A Modern TypeScript ORM",
      slug: slugify("Drizzle ORM: A Modern TypeScript ORM"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=2070&auto=format&fit=crop",
      content:
        "Tired of bulky, slow ORMs? Drizzle ORM offers a lightweight, fast, and type-safe alternative for your TypeScript projects. Let's dive into its features and see how it compares.",
      description: "An introduction to the Drizzle ORM for TypeScript.",
      readTime: "9 min read",
      authorId: user2.id,
      categoryId: techCategory.id,
    },
    {
      title: "The Art of the Short Story",
      slug: slugify("The Art of the Short Story"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1516410529446-addc68786428?q=80&w=2070&auto=format&fit=crop",
      content:
        "Crafting a compelling short story is a unique skill. This post breaks down the essential elements, from character and plot to pacing and theme.",
      description: "A guide to writing impactful short stories.",
      readTime: "8 min read",
      authorId: user1.id,
      categoryId: writingCategory.id,
    },
    {
      title: "Digital Nomadism: The Ultimate Freedom?",
      slug: slugify("Digital Nomadism: The Ultimate Freedom?"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop",
      content:
        "Working from anywhere in the world sounds like a dream. But what is the reality of the digital nomad lifestyle? We explore the pros, cons, and practicalities.",
      description: "Exploring the realities of the digital nomad lifestyle.",
      readTime: "12 min read",
      authorId: user2.id,
      categoryId: travelCategory.id,
    },
    {
      title: "React Server Components Explained",
      slug: slugify("React Server Components Explained"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1632187974184-337a3d053246?q=80&w=2070&auto=format&fit=crop",
      content:
        "React Server Components are a new paradigm in web development. This article explains what they are, how they work, and how they can improve your application's performance.",
      description: "A deep dive into React's new server-side paradigm.",
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
      { name: "Web Development", slug: "web-development" },
      { name: "Next.js", slug: "next-js" },
      { name: "React", slug: "react" },
      { name: "Serverless", slug: "serverless" },
      { name: "Drizzle ORM", slug: "drizzle-orm" },
      { name: "Travel", slug: "travel" },
      { name: "Lifestyle", slug: "lifestyle" },
      { name: "Japan", slug: "japan" },
      { name: "Self-Improvement", slug: "self-improvement" },
      { name: "Literature", slug: "literature" },
    ])
    .returning();

  console.log(`Seeded ${seededTags.length} tags.`);

  // Link posts and tags
  const tagInspiration = seededTags.find((t) => t.name === "Inspiration")!;
  const tagProductivity = seededTags.find((t) => t.name === "Productivity")!;
  const tagReading = seededTags.find((t) => t.name === "Reading")!;
  const tagTech = seededTags.find((t) => t.name === "Tech")!;
  const tagAI = seededTags.find((t) => t.name === "AI")!;
  const tagWebDev = seededTags.find((t) => t.name === "Web Development")!;
  const tagNextJs = seededTags.find((t) => t.name === "Next.js")!;
  const tagReact = seededTags.find((t) => t.name === "React")!;
  const tagServerless = seededTags.find((t) => t.name === "Serverless")!;
  const tagDrizzle = seededTags.find((t) => t.name === "Drizzle ORM")!;
  const tagTravel = seededTags.find((t) => t.name === "Travel")!;
  const tagLifestyle = seededTags.find((t) => t.name === "Lifestyle")!;
  const tagJapan = seededTags.find((t) => t.name === "Japan")!;
  const tagSelfImprovement = seededTags.find(
    (t) => t.name === "Self-Improvement"
  )!;
  const tagLiterature = seededTags.find((t) => t.name === "Literature")!;

  await db.insert(postsToTags).values([
    // Post 1 tags (The Art of Storytelling)
    { postId: seededPosts[0].id, tagId: tagInspiration.id },
    { postId: seededPosts[0].id, tagId: tagProductivity.id },
    // Post 2 tags (My Favorite Books of 2023)
    { postId: seededPosts[1].id, tagId: tagReading.id },
    { postId: seededPosts[1].id, tagId: tagLiterature.id },
    // Post 3 tags (The Future of AI)
    { postId: seededPosts[2].id, tagId: tagTech.id },
    { postId: seededPosts[2].id, tagId: tagAI.id },
    // Post 4 tags (Exploring the Alps)
    { postId: seededPosts[3].id, tagId: tagTravel.id },
    { postId: seededPosts[3].id, tagId: tagLifestyle.id },
    // Post 5 tags (Getting Started with Next.js 14)
    { postId: seededPosts[4].id, tagId: tagTech.id },
    { postId: seededPosts[4].id, tagId: tagWebDev.id },
    { postId: seededPosts[4].id, tagId: tagNextJs.id },
    { postId: seededPosts[4].id, tagId: tagReact.id },
    // Post 6 tags (The Power of Habit)
    { postId: seededPosts[5].id, tagId: tagProductivity.id },
    { postId: seededPosts[5].id, tagId: tagSelfImprovement.id },
    // Post 7 tags (A Guide to Mindful Reading)
    { postId: seededPosts[6].id, tagId: tagReading.id },
    { postId: seededPosts[6].id, tagId: tagSelfImprovement.id },
    // Post 8 tags (The Rise of Serverless)
    { postId: seededPosts[7].id, tagId: tagTech.id },
    { postId: seededPosts[7].id, tagId: tagServerless.id },
    { postId: seededPosts[7].id, tagId: tagWebDev.id },
    // Post 9 tags (Finding Your Voice as a Writer)
    { postId: seededPosts[8].id, tagId: tagInspiration.id },
    // Post 10 tags (Kyoto: A Journey Through Time)
    { postId: seededPosts[9].id, tagId: tagTravel.id },
    { postId: seededPosts[9].id, tagId: tagJapan.id },
    // Post 11 tags (Classic Novels Everyone Should Read)
    { postId: seededPosts[10].id, tagId: tagReading.id },
    { postId: seededPosts[10].id, tagId: tagLiterature.id },
    // Post 12 tags (Drizzle ORM: A Modern TypeScript ORM)
    { postId: seededPosts[11].id, tagId: tagTech.id },
    { postId: seededPosts[11].id, tagId: tagWebDev.id },
    { postId: seededPosts[11].id, tagId: tagDrizzle.id },
    // Post 13 tags (The Art of the Short Story)
    { postId: seededPosts[12].id, tagId: tagInspiration.id },
    // Post 14 tags (Digital Nomadism: The Ultimate Freedom?)
    { postId: seededPosts[13].id, tagId: tagTravel.id },
    { postId: seededPosts[13].id, tagId: tagLifestyle.id },
    // Post 15 tags (React Server Components Explained)
    { postId: seededPosts[14].id, tagId: tagTech.id },
    { postId: seededPosts[14].id, tagId: tagReact.id },
    { postId: seededPosts[14].id, tagId: tagWebDev.id },
  ]);

  console.log("Linked posts and tags.");

  console.log("Database seeding complete.");
}

main().catch((err) => {
  console.error("Error during seeding:", err);
  process.exit(1);
});
