const API_URL = "http://localhost:5000/api/v1";

export const getHeartbeat = async (): Promise<string> => {
  const response = await fetch(`${API_URL}/emojis`);
  const content = await response.json();

  if (response.ok) {
    // fixme: simulate a slow response
    await new Promise(resolve => setTimeout(resolve, 1000));

    return content;
  } else {
    throw new Error(content.message);
  }
};
