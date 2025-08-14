"use server"

function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}

export async function createPost(formData: FormData) {
  // Simulate saving a post
  await wait(600)
  const values = Object.fromEntries(formData.entries())
  console.log("createPost()", values)
  return {
    success: true,
    message: "Post saved (simulated). Check console output.",
    values,
  }
}
