import baseUrl from '../Api/baseURL'


const useInUpdateDataWithImage = async (url, params) => {
    const config = {
        headers: { "Content-Type": "multipart/form-data" }
    }
    const res = await baseUrl.put(url, params, config);
    console.log(res.status)
    return res;
}

const useInsUpdateData = async (url, params) => {
    const res = await baseUrl.put(url, params);
    return res;
}

export { useInUpdateDataWithImage, useInsUpdateData };