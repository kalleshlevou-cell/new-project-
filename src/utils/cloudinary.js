import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

 cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });
    
const uplodeOnCloudinary = async (localFilepath) => {
    try{
        if(!localFilepath) return null;
        const result = await cloudinary.uploader.uplode(localFilepath, {
            resource_type: 'auto',
        });
        console.log("File uploaded to cloudinary successfully",response.url);
        return response
    }
    catch(err){
        fs.unlinkSync(localFilepath);// remove the local saved temporory file
        return null;
    }
}

export default uplodeOnCloudinary;