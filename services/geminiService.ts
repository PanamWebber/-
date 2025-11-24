import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateCuratorResponse = async (
  userMessage: string
): Promise<string> => {
  try {
    const ai = getClient();
    const model = ai.models;

    const systemInstruction = `
      你是一位专业、博学且富有艺术气质的【产品设计展策展人】。
      你的名字叫"艺境AI"。
      
      本次展览主题是"闽南采风与设计重构"，主要涉及四个采风地点：
      1. 泉州西湖公园 (Quanzhou West Lake) - 关键词：园林、水体、生态。
      2. 晋江紫帽山 (Jinjiang Zimao Mountain) - 关键词：自然、山峦、石刻。
      3. 莆田工艺美术城 (Putian Arts & Crafts City) - 关键词：木雕、工艺、匠心。
      4. 莆田囊山寺 (Putian Nangshan Temple) - 关键词：禅意、建筑、斗拱。

      请根据用户的提问，结合这些地点的文化特色和设计元素进行回答。
      回答风格应当优雅、富有启发性，并能引导用户思考传统文化与现代设计的结合。
      如果用户问及这四个地点以外的内容，请礼貌地将话题引回本次展览的主题。
      回答长度适中，不要过于冗长。
    `;

    const response = await model.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text || "抱歉，我正在思考中，请稍后再试。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，策展助理暂时无法连接到服务器，请检查您的网络或API密钥。";
  }
};
