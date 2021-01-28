class Meme < ApplicationRecord
   has_many :meme_comments
   has_many :comments, through: :meme_comments
   belongs_to :user 

   has_many :comments
end
