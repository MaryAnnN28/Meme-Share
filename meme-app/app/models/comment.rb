class Comment < ApplicationRecord
   has_many :meme_comments
   has_many :memes, through: :meme_comments

   belongs_to :meme
   belongs_to :user
end
