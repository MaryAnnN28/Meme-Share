class MemesController < ApplicationController

   def index 
      render json: Meme.all
   end


end
