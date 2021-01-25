class CreateMemes < ActiveRecord::Migration[6.0]
  def change
    create_table :memes do |t|
      

      t.string :title
      t.string :description
      t.integer :likes
      t.string :img_url
      t.integer :user_id
      
      t.timestamps
    end
  end
end
