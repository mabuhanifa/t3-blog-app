# API Requirements for Post Creation

Based on the provided user interface designs for creating a new post, the following API endpoints are required.

## 1. Categories API

This endpoint is needed to populate the category selection buttons at the top of the form.

### `GET /api/categories`

- **Description**: Fetches the list of all available post categories.
- **Success Response**: `200 OK` with a JSON array of category objects.
- **Example Response Body**:
  ```json
  [
    { "id": "cat_1", "name": "Writing", "slug": "writing" },
    { "id": "cat_2", "name": "Books", "slug": "books" },
    { "id": "cat_3", "name": "Photography", "slug": "photography" },
    { "id": "cat_4", "name": "Travel", "slug": "travel" },
    { "id": "cat_5", "name": "Movies", "slug": "movies" }
  ]
  ```

## 2. Posts API

This is the primary endpoint for creating new posts. It must be flexible enough to handle the different form structures for different categories.

### `POST /api/posts`

- **Description**: Creates a new post. The structure of the request body depends on the post's category.
- **Authentication**: Required. The backend will associate the post with the currently logged-in user based on their session.
- **Request Body**: A JSON object containing the post details.

#### Case 1: For "Writing" Posts

This corresponds to the form with the full Markdown/content editor.

- **Required Fields**:
  - `categoryId` (number): The ID for the "Writing" category.
  - `title` (string): The post title.
  - `coverImageUrl` (string, optional): URL for the cover image.
  - `date` (string, optional): The publication date in ISO 8601 format.
  - `content` (string): The full post content in Markdown.
- **Example Request Body**:
  ```json
  {
    "categoryId": 1,
    "title": "My First Article",
    "coverImageUrl": "https://example.com/image.png",
    "date": "2023-10-27T12:00:00Z",
    "content": "## This is a heading\n\nThis is the full content of the article."
  }
  ```

#### Case 2: For "Books", "Photography", "Travel", "Movies" Posts

This corresponds to the form with the "Description / Excerpt" and "Read Time" fields.

- **Required Fields**:
  - `categoryId` (number): The ID for the relevant category (e.g., "Books").
  - `title` (string): The post title.
  - `description` (string): A short description or excerpt.
  - `coverImageUrl` (string, optional): URL for the cover image.
  - `date` (string, optional): The publication date in ISO 8601 format.
  - `readTime` (string, optional): The estimated read time (e.g., "5 min read").
- **Example Request Body**:
  ```json
  {
    "categoryId": 2,
    "title": "Review of 'The Hobbit'",
    "description": "A brief review of the classic fantasy novel by J.R.R. Tolkien.",
    "coverImageUrl": "https://example.com/hobbit-cover.png",
    "date": "2023-10-27T12:00:00Z",
    "readTime": "8 min read"
  }
  ```

## 3. User API (Supporting)

While not directly shown, an endpoint to get the current user's data would be beneficial to pre-fill the "Author Name" and "Author Avatar URL" fields.

### `GET /api/auth/me`

- **Description**: Retrieves the profile of the currently authenticated user.
- **Authentication**: Required.
- **Success Response**: `200 OK` with the user's data.
- **Example Response Body**:
  ```json
  {
    "id": "user_abc",
    "name": "Alex Doe",
    "avatarUrl": "https://example.com/alex.png"
  }
  ```
- **Example Response Body**:
  ```json
  {
    "id": "user_abc",
    "name": "Alex Doe",
    "avatarUrl": "https://example.com/alex.png"
  }
  ```
