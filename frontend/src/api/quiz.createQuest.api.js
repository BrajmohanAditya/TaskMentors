import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const createQuizQuestionApi = async (payload) => {
    const res = await axios.post(`${baseUrl}/quizQuestion/create`, 
        payload, 
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    );
    return res.data;
};

export const getQuizQuestionsApi = async (quizId) => {
    const res = await axios.get(`${baseUrl}/quizQuestion/get/${quizId}`, 
        {
            withCredentials: true
        }
    );
    return res.data;
};
