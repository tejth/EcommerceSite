import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLODINARY_CLOUD_NAME,
    api_key: process.env.CLODINARY_API_KEY,
    api_secret: process.env.CLODINARY_API_SECRET_KEY
});

const uploadImageClodinary = async (image) => {
    if (!image || !image.buffer) {
        throw new Error("No image buffer found");
    }

    // if image.buffer does not exist (for some environments)
    const buffer = image.buffer || Buffer.from(await image.arrayBuffer());

    const uploadResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: "TusharElectricals" },
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            }
        );
        stream.end(buffer);
    });

    return uploadResult;
};

export default uploadImageClodinary;
