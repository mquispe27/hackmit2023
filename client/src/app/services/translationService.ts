export const translate = async (
  inputText: string,
  inputLanguage: string,
  outputLanguage: string
) => {
  try {
    const response = await fetch("/api/basicTranslateRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: inputText,
        languageInput: inputLanguage,
        languageOutput: outputLanguage,
      }),
    });

    if (response.ok) {
      const translationResult = await response.json();
      return translationResult;
    } else {
      // Handle error here
      console.error(
        "API request failed:",
        response.status,
        response.statusText
      );
      return null;
    }
  } catch (error) {
    // Handle fetch or other errors
    console.error("API request error:", error);
    return null;
  }
};
