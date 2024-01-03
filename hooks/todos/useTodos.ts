export async function getTodos() {
  try {
    const response = await fetch("/api/todos");
    const todos = await response.json();
    return todos.data;
  } catch (error) {
    console.log(error);
  }
}
