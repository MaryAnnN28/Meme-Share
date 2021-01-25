class CreateMemeComments < ActiveRecord::Migration[6.0]
  def change
    create_table :meme_comments do |t|
      t.integer :meme_id
      t.integer :comment_id
      t.timestamps
    end
  end
end
