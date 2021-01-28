class CommentsController < ApplicationController

   def index
      render json: Comment.all.to_json(comment_serializer_options)
   end

   def show 
      comment = Comment.find_by(params[:id])
      # render json: comment
      render json: comment.to_json(comment_serializer_options)
   end 

   def create
      comment = Comment.create(comment_params)
      render json: comment
   end

   def update
      Comment.find(params[:id]).update(comment_params)
      render json: Comment.find(params[:id])
   end

   
   
   private

   def comment_params
      params.permit(:comment, :user_id, :meme_id)
   end


   def comment_serializer_options
      {
         except: [:updated_at, :id]
      }
   end


end
