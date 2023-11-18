import baseURL from "../Api/baseURL";


const useInsertDataWithImage = async (url, params) => {
    const config = {
        headers:{"Content-Type":"multipart/form-data", Authorization: `Bearer ${localStorage.getItem("token")}`}
    }
    try {
        const res = await baseURL.post(url, params, config);
        return res.data;
    } catch (error) {
        // Handle errors here
        console.error('Error in useInsertDataWithImage:', error);
        throw error;
    }
}

const useInsertData = async (url, params) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseURL.post(url, params, config)

    return res
}

export  {useInsertData, useInsertDataWithImage}


