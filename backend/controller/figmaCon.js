import axios from "axios";
const fileKey=process.env.fileKey;
const accessToken=process.env.accessToken;

const figmaConnect=async()=>{
    
    try {
        const response= await axios.get(`https://api.figma.com/v1/files/${fileKey}`,{
        headers:{
            'X-Figma-Token': accessToken
        }
    });
    const data= response.data;
    console.log("-------starting here-----");
    console.log(JSON.stringify(data, null, 2));
    console.log("------ ending here-----");
    } catch (error) {
        console.log(error)
    }
}
export default figmaConnect;