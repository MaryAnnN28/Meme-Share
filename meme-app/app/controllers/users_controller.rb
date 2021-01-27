class UsersController < ApplicationController

   def index
      # render json: User.all
      render json: User.all.to_json(user_serializer_options)
   end

   def show 
      user = User.find(params[:id])
      # render json: user 
      render json: user.to_json(user_serializer_options) 
   end


   private

   def user_serializer_options()
      {
         include: {
            comments: {
               except: [:updated_at, :meme_id, :id, :user_id]
            }
         }, 
         except: [:created_at, :updated_at]
      }
   end




end
