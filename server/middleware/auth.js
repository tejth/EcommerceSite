import jwt from "jsonwebtoken";

const auth = async(request, response, next) => {
  try {
    const token =
      request.cookies?.accessToken ||
      request.headers?.authorization?.split(" ")[1];

    if (!token) {
      return response.status(401).json({
        message: "Unauthorized: No token provided",
        error: true,
        success: false
      });
    }

    // Verify token
    const decode = await jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);

    console.log('decode' , decode);

    if(!decode){
      return response.status(401).json({
        message: "unauthorized access",
        error : true,
        success : false
      })
    }

    // Attach decoded user data to request object
    request.userId = decode.id

   

    next(); // <--- IMPORTANT
  } catch (error) {
    return response.status(401).json({
      message: "Invalid or expired token",
      error: true,
      success: false,
    });
  }
};

export default auth;
