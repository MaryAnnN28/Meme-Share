class CommentsController < ApplicationController

   def index
      comments = Comment.all
      render json: comments.to_json(include: [:comment, :user_id, :meme_id])
   end

   # def show 
   #    comment = Comment.find_by(id: params[:id])
   #    render json: comment.to_json 
   # end 

end
