class MemesController < ApplicationController

   def index  
      render json: Meme.all.to_json({
         include:{
            comments:{
               execpt: [:updated_at]
            }
         },
         except: [:created_at, :updated_at]
      })
   end

   def create
      meme = Meme.create(meme_params)
      render json: meme
   end

   def meme_params
      params.require(:meme).permit(:title, :description, :img_url)

   end


end
