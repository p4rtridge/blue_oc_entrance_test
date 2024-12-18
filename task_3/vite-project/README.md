### How to run

```bash
npm install

npm run dev
```

## How It Works

### 1. **State Management with Redux**
The app uses **Redux Toolkit** to manage the state of posts. The `posts.ts` file defines the Redux slice for posts, which contains:
- **Initial State**: An empty array `[]` for posts.
- **Reducers**: Functions that define how the state is updated. In this app, the primary reducer is `addNewPost`, which adds a new post to the posts array.

Here’s a breakdown of how Redux is used:
- The Redux store is configured with the `postSlice`.
- The state of posts is stored in the Redux store.
- When a new post is added via the form, it gets dispatched to the store and updates the posts state.

### 2. **Adding a New Post**
The **PostForm** component contains a form with two fields: `title` and `body`. When the form is submitted:
- The component reads the `title` and `body` input fields.
- A new post object is created with a `userId`, `id`, `title`, and `body`.
- The new post object is then dispatched to the Redux store using the `addNewPost` action. This action updates the posts array by adding the new post at the beginning (using `unshift`).

### 3. **PostForm Component**
The **PostForm** component is responsible for:
- Displaying the form where users input the post's `title` and `body`.
- Capturing the user’s input via controlled components.
- Dispatching the `addNewPost` action to update the Redux store with the new post.

When the user submits the form:
- It prevents the default form submission.
- It checks if both `title` and `body` are filled.
- It generates a new post object with the user’s input and a unique `id` (using the current timestamp).
- The new post is added to the Redux store, which updates the UI with the new post at the top of the list.