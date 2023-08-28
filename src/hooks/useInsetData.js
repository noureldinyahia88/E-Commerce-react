import baseURL from "../Api/baseURL";


const useInsertDataWithImage = async (url, params) => {
    const config = {
        headers:{"Content-Type":"multipart/form-data"}
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

const useInsetData = async (url, params) => {
    const res = await baseURL.post(url, params)

    return res.data
}

export  {useInsetData, useInsertDataWithImage}


