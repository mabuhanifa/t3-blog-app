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
    {
      title: "Inception: A Dream Within a Dream",
      slug: slugify("Inception: A Dream Within a Dream"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=2073&auto=format&fit=crop",
      content:
        "Exploring the complex layers and philosophical questions posed by Christopher Nolan's masterpiece. Is Cobb still dreaming?",
      description: "A deep dive into the ending and themes of Inception.",
      readTime: "12 min read",
      authorId: user1.id,
      categoryId: moviesCategory.id,
    },
    {
      title: "The Art of Cinematography in 'Blade Runner 2049'",
      slug: slugify("The Art of Cinematography in 'Blade Runner 2049'"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2070&auto=format&fit=crop",
      content:
        "Roger Deakins' work on 'Blade Runner 2049' is a masterclass in visual storytelling. We break down some of the most iconic shots and what makes them so powerful.",
      description: "Analyzing the visual language of a modern sci-fi classic.",
      readTime: "10 min read",
      authorId: user2.id,
      categoryId: moviesCategory.id,
    },
    {
      title: "Studio Ghibli: More Than Just Animation",
      slug: slugify("Studio Ghibli: More Than Just Animation"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop",
      content:
        "From 'Spirited Away' to 'My Neighbor Totoro', Studio Ghibli films have captured the hearts of millions. We explore the recurring themes of environmentalism, childhood, and pacifism.",
      description:
        "The enduring themes and artistry of Hayao Miyazaki's films.",
      readTime: "9 min read",
      authorId: user1.id,
      categoryId: moviesCategory.id,
    },
    {
      title: "Street Photography: Capturing the Unseen Moment",
      slug: slugify("Street Photography: Capturing the Unseen Moment"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1517736914442-85e63859b6a8?q=80&w=2070&auto=format&fit=crop",
      content:
        "The street is a theater of the unpredictable. This guide explores the techniques and mindset needed to capture candid moments that tell a story.",
      description: "A guide to the art of candid street photography.",
      readTime: "8 min read",
      authorId: user2.id,
      categoryId: photographyCategory.id,
    },
    {
      title: "Landscape Photography: A Guide to Golden Hour",
      slug: slugify("Landscape Photography: A Guide to Golden Hour"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop",
      content:
        "The first and last light of the day can transform a landscape. Learn how to plan your shoots and make the most of the magical golden hour.",
      description: "Tips and tricks for shooting in the magical golden hour.",
      readTime: "10 min read",
      authorId: user1.id,
      categoryId: photographyCategory.id,
    },
    {
      title: "The Art of the Portrait: Light and Shadow",
      slug: slugify("The Art of the Portrait: Light and Shadow"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
      content:
        "A great portrait is more than just a likeness; it's a story told through light. This post explores classic lighting techniques to create compelling and dramatic portraits.",
      description: "Using light and shadow to create compelling portraits.",
      readTime: "7 min read",
      authorId: user2.id,
      categoryId: photographyCategory.id,
    },
    {
      title: "On the Importance of a Daily Writing Habit",
      slug: slugify("On the Importance of a Daily Writing Habit"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070&auto=format&fit=crop",
      content:
        "Consistency is key in writing. This post explores the benefits of a daily writing practice and how to build a sustainable habit that fuels creativity and productivity.",
      description: "How a daily writing habit can transform your craft.",
      readTime: "7 min read",
      authorId: user1.id,
      categoryId: writingCategory.id,
    },
    {
      title: "Editing Your Own Work: A Guide for Beginners",
      slug: slugify("Editing Your Own Work: A Guide for Beginners"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2071&auto=format&fit=crop",
      content:
        "The editing process can be daunting. This guide provides a step-by-step approach to editing your own writing, from structural changes to line-level polishing.",
      description: "A step-by-step guide to self-editing.",
      readTime: "9 min read",
      authorId: user2.id,
      categoryId: writingCategory.id,
    },
    {
      title: "A Week in Lisbon: Sun, Sea, and Fado",
      slug: slugify("A Week in Lisbon: Sun, Sea, and Fado"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1586493321335-21855f24de2f?q=80&w=1974&auto=format&fit=crop",
      content:
        "Lisbon is a city of vibrant colors, historic trams, and soulful music. Join us for a week-long itinerary exploring the best of Portugal's capital.",
      description: "An itinerary for a week in Portugal's vibrant capital.",
      readTime: "11 min read",
      authorId: user1.id,
      categoryId: travelCategory.id,
    },
    {
      title: "The Hidden Gems of Rural Italy",
      slug: slugify("The Hidden Gems of Rural Italy"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1531823723853-3b52de7374d1?q=80&w=1964&auto=format&fit=crop",
      content:
        "Beyond the famous cities lies a quieter, more authentic Italy. Discover the charming villages, rolling hills, and culinary delights of the Italian countryside.",
      description: "Exploring the charm of the Italian countryside.",
      readTime: "13 min read",
      authorId: user2.id,
      categoryId: travelCategory.id,
    },
    {
      title: "The Joy of Re-reading",
      slug: slugify("The Joy of Re-reading"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2100&auto=format&fit=crop",
      content:
        "Revisiting a beloved book is like meeting an old friend. This post explores the unique joy and new perspectives gained from re-reading.",
      description:
        "Why revisiting your favorite books is a different kind of magic.",
      readTime: "6 min read",
      authorId: user1.id,
      categoryId: booksCategory.id,
    },
    {
      title: "Understanding WebAssembly",
      slug: slugify("Understanding WebAssembly"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1550063873-ab792950096b?q=80&w=2070&auto=format&fit=crop",
      content:
        "WebAssembly (Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable target for compilation of high-level languages like C/C++/Rust, enabling deployment on the web for client and server applications.",
      description:
        "A high-level overview of what WebAssembly is and why it's a game-changer.",
      readTime: "10 min read",
      authorId: user2.id,
      categoryId: techCategory.id,
    },
    {
      title: "The Sound of Cinema: A Tribute to Film Scores",
      slug: slugify("The Sound of Cinema: A Tribute to Film Scores"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop",
      content:
        "A great film score can elevate a movie from good to unforgettable. This article celebrates the composers and scores that have defined cinema.",
      description:
        "From John Williams to Hans Zimmer, a look at how music shapes our favorite movies.",
      readTime: "9 min read",
      authorId: user1.id,
      categoryId: moviesCategory.id,
    },
    {
      title: "Black and White Photography: Seeing in Monochrome",
      slug: slugify("Black and White Photography: Seeing in Monochrome"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
      content:
        "Stripping away color allows us to focus on texture, form, and emotion. This guide offers tips for shooting and editing powerful black and white photographs.",
      description: "Tips for creating powerful black and white images.",
      readTime: "8 min read",
      authorId: user2.id,
      categoryId: photographyCategory.id,
    },
    {
      title: "Overcoming Writer's Block",
      slug: slugify("Overcoming Writer's Block"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
      content:
        "Every writer faces the dreaded blank page. We explore practical strategies, from freewriting to changing your environment, to break through creative slumps.",
      description:
        "Practical strategies to break through creative slumps and get words flowing.",
      readTime: "7 min read",
      authorId: user1.id,
      categoryId: writingCategory.id,
    },
    {
      title: "Backpacking Through Southeast Asia",
      slug: slugify("Backpacking Through Southeast Asia"),
      coverImageUrl:
        "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?q=80&w=2070&auto=format&fit=crop",
      content:
        "A whirlwind tour of the temples, beaches, and bustling cities of Southeast Asia. This guide offers a budget-friendly itinerary for an unforgettable adventure.",
      description:
        "A budget-friendly guide to exploring Thailand, Vietnam, and Cambodia.",
      readTime: "14 min read",
      authorId: user2.id,
      categoryId: travelCategory.id,
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
      { name: "Cinema", slug: "cinema" },
      { name: "Film Review", slug: "film-review" },
      { name: "Sci-Fi", slug: "sci-fi" },
      { name: "Animation", slug: "animation" },
      { name: "Street Photography", slug: "street-photography" },
      { name: "Landscape", slug: "landscape" },
      { name: "Portrait", slug: "portrait" },
      { name: "Creative Writing", slug: "creative-writing" },
      { name: "Editing", slug: "editing" },
      { name: "Portugal", slug: "portugal" },
      { name: "Italy", slug: "italy" },
      { name: "Monochrome", slug: "monochrome" },
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
  const tagCinema = seededTags.find((t) => t.name === "Cinema")!;
  const tagFilmReview = seededTags.find((t) => t.name === "Film Review")!;
  const tagSciFi = seededTags.find((t) => t.name === "Sci-Fi")!;
  const tagAnimation = seededTags.find((t) => t.name === "Animation")!;
  const tagStreetPhotography = seededTags.find(
    (t) => t.name === "Street Photography"
  )!;
  const tagLandscape = seededTags.find((t) => t.name === "Landscape")!;
  const tagPortrait = seededTags.find((t) => t.name === "Portrait")!;
  const tagCreativeWriting = seededTags.find(
    (t) => t.name === "Creative Writing"
  )!;
  const tagEditing = seededTags.find((t) => t.name === "Editing")!;
  const tagPortugal = seededTags.find((t) => t.name === "Portugal")!;
  const tagItaly = seededTags.find((t) => t.name === "Italy")!;
  const tagMonochrome = seededTags.find((t) => t.name === "Monochrome")!;

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
    // Post 16 tags (Inception)
    { postId: seededPosts[15].id, tagId: tagCinema.id },
    { postId: seededPosts[15].id, tagId: tagSciFi.id },
    { postId: seededPosts[15].id, tagId: tagFilmReview.id },
    // Post 17 tags (Blade Runner 2049)
    { postId: seededPosts[16].id, tagId: tagCinema.id },
    { postId: seededPosts[16].id, tagId: tagSciFi.id },
    // Post 18 tags (Studio Ghibli)
    { postId: seededPosts[17].id, tagId: tagAnimation.id },
    { postId: seededPosts[17].id, tagId: tagCinema.id },
    // Post 19 tags (Street Photography)
    { postId: seededPosts[18].id, tagId: tagStreetPhotography.id },
    // Post 20 tags (Landscape Photography)
    { postId: seededPosts[19].id, tagId: tagLandscape.id },
    // Post 21 tags (The Art of the Portrait)
    { postId: seededPosts[20].id, tagId: tagPortrait.id },
    // Post 22 tags (Daily Writing Habit)
    { postId: seededPosts[21].id, tagId: tagProductivity.id },
    { postId: seededPosts[21].id, tagId: tagCreativeWriting.id },
    // Post 23 tags (Editing Your Own Work)
    { postId: seededPosts[22].id, tagId: tagEditing.id },
    { postId: seededPosts[22].id, tagId: tagCreativeWriting.id },
    // Post 24 tags (A Week in Lisbon)
    { postId: seededPosts[23].id, tagId: tagTravel.id },
    { postId: seededPosts[23].id, tagId: tagPortugal.id },
    // Post 25 tags (Hidden Gems of Rural Italy)
    { postId: seededPosts[24].id, tagId: tagTravel.id },
    { postId: seededPosts[24].id, tagId: tagItaly.id },
    // Post 26 tags (The Joy of Re-reading)
    { postId: seededPosts[25].id, tagId: tagReading.id },
    { postId: seededPosts[25].id, tagId: tagLiterature.id },
    // Post 27 tags (Understanding WebAssembly)
    { postId: seededPosts[26].id, tagId: tagTech.id },
    { postId: seededPosts[26].id, tagId: tagWebDev.id },
    // Post 28 tags (The Sound of Cinema)
    { postId: seededPosts[27].id, tagId: tagCinema.id },
    { postId: seededPosts[27].id, tagId: tagFilmReview.id },
    // Post 29 tags (Black and White Photography)
    { postId: seededPosts[28].id, tagId: tagPortrait.id },
    { postId: seededPosts[28].id, tagId: tagMonochrome.id },
    // Post 30 tags (Overcoming Writer's Block)
    { postId: seededPosts[29].id, tagId: tagCreativeWriting.id },
    { postId: seededPosts[29].id, tagId: tagProductivity.id },
    // Post 31 tags (Backpacking Through Southeast Asia)
    { postId: seededPosts[30].id, tagId: tagTravel.id },
    { postId: seededPosts[30].id, tagId: tagLifestyle.id },
  ]);

  console.log("Linked posts and tags.");

  console.log("Database seeding complete.");
}

main().catch((err) => {
  console.error("Error during seeding:", err);
  process.exit(1);
});
