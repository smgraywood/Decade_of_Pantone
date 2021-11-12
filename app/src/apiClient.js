import _fetch from "isomorphic-fetch";

export const getPosts = () => _get("/api/posts");
export const addPost = (name) => _post("/api/posts", { name });
export const fetchColorData = () => _get("/api/colors");
const _get = async (url) => (await _fetch(url)).json();

const _post = async (url, body) => {
  const response = await _fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}

  return result;
};
