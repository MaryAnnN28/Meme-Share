class MemeComment < ApplicationRecord
   belongs_to :meme
   belongs_to :comment
end
