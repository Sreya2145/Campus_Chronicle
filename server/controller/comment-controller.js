
import Comment from '../model/comment.js';
export const  newComment =async (request, response)=>{
    try{
        const comment = await new Comment(request.body);
        comment.save();

        response.status(200).json({msg: 'Comment saved successfully'})
    } catch(error){
         response.status(500).json({error: error.message})
    }
}

// export const getComments = async (request, response) => {
//     try {
//         const comments = await Comment.find({ postId: request.params.id });
        
//         response.status(200).json(comments);
//     } catch (error) {
//         response.status(500).json(error)
//     }
// }

export const deleteComment = async (request, response) => {
    try {
        const comment = await Comment.findByIdAndDelete(request.params.id); // Use findByIdAndDelete to directly delete the comment
        if (!comment) {
            return response.status(404).json({ message: "Comment not found" }); // Check if comment is not found
        }
        response.status(200).json({ message: 'Comment deleted successfully' }); // Respond with a JSON object containing a message
    } catch (error) {
        response.status(500).json({ message: error.message }); // Respond with a JSON object containing the error message
    }
}