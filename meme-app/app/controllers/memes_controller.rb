class MemesController < ApplicationController

   def index 
      render json: Meme.all.to_json(meme_serializer_options)
   end

   def show
      meme = Meme.find(params[:id])
      render json: meme.to_json(meme_serializer_options) 
   end

   def create
      meme = Meme.new(meme_params)
      meme.user_id = User.first.id
      meme.save
      render json: meme
   end


   def update
      Meme.find(params[:id]).update(meme_params)
      render json: Meme.find(params[:id])
   end

  
   def destroy
      meme = Meme.find(params[:id]).destroy
      render json: Meme.all.to_json(meme_serializer_options)
   end


   private

   def meme_params
      # params.require(:meme).permit(:title, :likes, :description, :img_url, :user_id)
      params.require(:meme).permit(:title, :likes, :description, :img_url, :user_id, :created_at)
   end

   def meme_serializer_options()
      {
         include: {
            comments: {
               except: [:updated_at, :meme_id]
            }
         }, 
         # except: [:updated_at]
         # except: [:created_at, :updated_at]
      }
   end
   
   


end
