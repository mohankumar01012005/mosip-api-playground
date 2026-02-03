const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getAllUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
};

export const getUserById = async (id) => {
  if (!id) return { error: "User ID required" };
  const res = await fetch(`${BASE_URL}/users/${id}`);
  return res.json();
};

export const getPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  return res.json();
};

export const getComments = async () => {
  const res = await fetch(`${BASE_URL}/comments`);
  return res.json();
};
