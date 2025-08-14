# API Requirements

This document outlines the required API endpoints for the North Blog application, based on a detailed, file-by-file analysis of the frontend code in `app/(site)`.

## 1. Posts API

This is the primary content delivery endpoint. The post objects returned must include nested `author: {name}` and `category: {name, slug}` objects, as required by `PostCard.tsx`.

### `GET /api/posts`

- **Description**: A versatile endpoint to fetch lists of posts based on various criteria.
- **Consumed By**:
  - `app/(site)/page.tsx` (Homepage)
  - `app/(site)/posts/page.tsx` (All Posts)
  - `app/(site)/category/[slug]/page.tsx` (Category-specific posts)
  - `app/(site)/search/page.tsx` (Search results)
  - `app/(site)/profile/page.tsx` (Posts by the logged-in user)
- **Query Parameters**:
  - `limit` (number): Used by the homepage to get the latest 3 posts.
  - `category` (string): Slug of the category to filter by. Used by the category page.
  - `q` (string): Search term. Used by the search page.
  - `authorId` (string): ID of the user. Used by the profile page to show the user's own posts.
  - `page` (number, optional): For paginating results on any of the above pages.
- **Success Response**: `200 OK` with a JSON object containing `data` (an array of post objects) and pagination metadata.

### `GET /api/posts/:slug`

- **Description**: Fetches a single post for its detail page.
- **Consumed By**: `app/(site)/posts/[slug]/page.tsx`.
- **URL Parameters**:
  - `slug`: The unique slug of the post.
- **Success Response**: `200 OK` with a single post object.
- **Error Response**: `404 Not Found`.

### Content Management (Authenticated)

These endpoints are for authenticated users to create and manage their own posts, likely from the `/profile` page.

### `POST /api/posts`

- **Description**: Creates a new blog post.
- **Authentication**: Required. The post will be associated with the logged-in user.
- **Request Body**: `{ "title": "...", "content": "...", "categoryId": "..." }`.
- **Success Response**: `201 Created` with the new post object.

### `PATCH /api/posts/:slug`

- **Description**: Updates an existing blog post.
- **Authentication**: Required. User must be the author of the post.
- **URL Parameters**:
  - `slug`: The slug of the post to update.
- **Request Body**: `{ "title": "...", "content": "...", "categoryId": "..." }` (all fields optional).
- **Success Response**: `200 OK` with the updated post object.
- **Error Response**: `403 Forbidden` if user is not the author, `404 Not Found`.

### `DELETE /api/posts/:slug`

- **Description**: Deletes a blog post.
- **Authentication**: Required. User must be the author of the post.
- **URL Parameters**:
  - `slug`: The slug of the post to delete.
- **Success Response**: `204 No Content`.
- **Error Response**: `403 Forbidden` if user is not the author, `404 Not Found`.

## 2. Category API

Provides data for category navigation and category-specific pages.

### `GET /api/categories`

- **Description**: Fetches all categories for the main navigation.
- **Consumed By**: `app/(site)/components/Header.tsx`.
- **Success Response**: `200 OK` with an array of `{ name, slug }` objects.

### `GET /api/categories/:slug`

- **Description**: Fetches the details of a single category for its page title/header.
- **Consumed By**: `app/(site)/category/[slug]/page.tsx`.
- **URL Parameters**:
  - `slug`: The slug of the category.
- **Success Response**: `200 OK` with a single category object.
- **Error Response**: `404 Not Found`.

## 3. Comments API

Manages comments on post detail pages.

### `GET /api/posts/:slug/comments`

- **Description**: Fetches all comments for a specific post.
- **Consumed By**: `app/(site)/posts/[slug]/components/Comments.tsx`.
- **URL Parameters**:
  - `slug`: The post's slug.
- **Success Response**: `200 OK` with an array of comment objects.

### `POST /api/posts/:slug/comments`

- **Description**: Allows an authenticated user to add a comment.
- **Consumed By**: `app/(site)/posts/[slug]/components/CommentForm.tsx`.
- **Authentication**: Required.
- **URL Parameters**:
  - `slug`: The post's slug.
- **Request Body**: `{ "content": "..." }`.
- **Success Response**: `201 Created`.

## 4. Authentication & User API

Handles user identity and session management.

### `POST /api/auth/signup`

- **Description**: Registers a new user account.
- **Consumed By**: `app/(site)/signup/page.tsx`.
- **Request Body**: `{ "name": "...", "email": "...", "password": "..." }`.
- **Success Response**: `201 Created`.

### `POST /api/auth/signin`

- **Description**: Authenticates a user and creates a session.
- **Consumed By**: `app/(site)/signin/page.tsx`.
- **Request Body**: `{ "email": "...", "password": "..." }`.
- **Success Response**: `200 OK`.

### `POST /api/auth/signout`

- **Description**: Terminates the user's session.
- **Consumed By**: `app/(site)/components/UserNav.tsx`.
- **Success Response**: `200 OK`.

### `GET /api/auth/me`

- **Description**: Retrieves the profile of the currently authenticated user.
- **Consumed By**:
  - `app/(site)/components/UserNav.tsx` (to display user info in the header).
  - `app/(site)/profile/page.tsx` (to get the user's ID for fetching their posts).
- **Authentication**: Required.
- **Success Response**: `200 OK` with the user object (`{ id, name, email, ... }`).
- **Error Response**: `401 Unauthorized`.

### `PATCH /api/auth/me`

- **Description**: Allows the authenticated user to update their own profile information.
- **Consumed By**: `app/(site)/profile/page.tsx` (in a hypothetical "Edit Profile" form).
- **Authentication**: Required.
- **Request Body**: `{ "name": "...", "email": "..." }` (fields are optional).
- **Success Response**: `200 OK` with the updated user object.
- **Error Response**: `401 Unauthorized`.

## 5. Miscellaneous API

### `POST /api/contact`

- **Description**: Handles the submission from the contact form.
- **Consumed By**: `app/(site)/contact/page.tsx`.
- **Request Body**: `{ "name": "...", "email": "...", "message": "..." }`.
- **Success Response**: `202 Accepted`.
