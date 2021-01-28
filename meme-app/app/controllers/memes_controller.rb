class MemesController < ApplicationController

   def index 
      render json: Meme.all.to_json(meme_serializer_options)
   end

   def show
      meme = Meme.find(params[:id])
      render json: meme.to_json(meme_serializer_options) 
   end

   # Need to test out creating with user_id 
   def create
      meme = Meme.create(meme_params)
      render json: meme
   end

   def update
      Meme.find(params[:id]).update(meme_params)
      render json: Meme.find(params[:id])
   end
 
   private

   def meme_params
      params.require(:meme).permit(:title, :likes, :description, :img_url, :user_id)
   end

   def meme_serializer_options()
      {
         include: {
            comments: {
               except: [:updated_at, :meme_id, :id]
            }
         }, 
         except: [:created_at, :updated_at]
      }
   end


end
