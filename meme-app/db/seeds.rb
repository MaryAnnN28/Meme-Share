# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: "Brian")
user2 = User.create(name: "Alec")
user3 = User.create(name: "Mary")
user4 = User.create(name: "George")
user5 = User.create(name: "Bob")
user6 = User.create(name: "Sarah")
user7 = User.create(name: "Chris")
user8 = User.create(name: "Elanor")
user9 = User.create(name: "Ace")
user10 = User.create(name: "Naruto")
user11 = User.create(name: "Goku")
user12 = User.create(name: "Spike")

meme1 = Meme.create(title: "Cat meme", likes: 0, description: "Funny cats LOL", img_url: "https://i.pinimg.com/736x/4d/8e/cc/4d8ecc6967b4a3d475be5c4d881c4d9c.jpg", user_id: user6.id)
meme2 = Meme.create(title: "Javascript in a nutshell", likes: 0, description: "This dog GETS it.", img_url: "https://i.barkpost.com/wp-content/uploads/2015/02/featmeme.jpg?q=70&fit=crop&crop=entropy&w=808&h=500", user_id: user2.id)
meme3 = Meme.create(title: "Spider", likes: 0, description: "me irl", img_url: "https://ichef.bbci.co.uk/images/ic/704xn/p072ms6r.jpg", user_id:user6.id)
meme4 = Meme.create(title: "Bern It!", likes: 0, description: "I am once again asking for your meme.", img_url: "https://i.redd.it/vakvnwrlzvc61.jpg", user_id: user3.id)
meme5 = Meme.create(title: "See you next fall!", likes: 0, description: "Got 'eeeeem", img_url: "https://i.redd.it/vakvnwrlzvc61.jpg", user_id:user8.id)
meme6 = Meme.create(title: "Wonka meme", likes: 0, description: "insert meme text for meme6", img_url: "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/05/spongebob.jpg", user_id:user5.id)
meme7 = Meme.create(title: "Spongebob meme", likes: 0, description: "insert meme text for meme7", img_url: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/28/12/evil-kermit-meme.jpg", user_id: user7.id)
meme8 = Meme.create(title: "Kermit meme", likes: 0, description: "insert meme text for meme8", img_url: "https://static.stacker.com/s3fs-public/styles/properly_sized_image/s3/2019-03/Screen%20Shot%202019-03-14%20at%2010.49.01%20AM_1.png", user_id: user9.id)

comment1 = Comment.create(comment: "LOL so funny", user_id: user1.id, meme_id: meme1.id )
comment2 = Comment.create(comment: "HHAHAHAHAHAHAH", user_id: user2.id, meme_id: meme2.id)
comment3 = Comment.create(comment: "LMAO", user_id: user3.id, meme_id: meme3.id)
comment4 = Comment.create(comment: "ROFL", user_id: user4.id, meme_id: meme4.id)
comment5 = Comment.create(comment: "I agree", user_id: user1.id, meme_id: meme1.id)
comment6 = Comment.create(comment: "So true", user_id: user2.id, meme_id: meme2.id)
comment7 = Comment.create(comment: "WOW!", user_id: user3.id, meme_id: meme3.id)
comment8 = Comment.create(comment: "ROFLMAO", user_id: user4.id, meme_id: meme4.id)
comment9 = Comment.create(comment: "LUL", user_id: user5.id, meme_id: meme5.id)

meme_comment1 = MemeComment.create(meme_id: meme1.id , comment_id: comment1.id)
meme_comment2 = MemeComment.create(meme_id: meme2.id, comment_id: comment2.id)
meme_comment3 = MemeComment.create(meme_id: meme3.id, comment_id: comment3.id)
meme_comment4 = MemeComment.create(meme_id: meme4.id, comment_id: comment4.id)
meme_comment5 = MemeComment.create(meme_id: meme5.id, comment_id: comment5.id)
meme_comment6 = MemeComment.create(meme_id: meme6.id, comment_id: comment6.id)
meme_comment7 = MemeComment.create(meme_id: meme7.id, comment_id: comment1.id)
meme_comment8 = MemeComment.create(meme_id: meme8.id, comment_id: comment2.id)
meme_comment9 = MemeComment.create(meme_id: meme5.id, comment_id: comment3.id)
meme_comment10 = MemeComment.create(meme_id: meme4.id, comment_id: comment7.id)
meme_comment12 = MemeComment.create(meme_id: meme1.id, comment_id: comment8.id)
meme_comment13 = MemeComment.create(meme_id: meme2.id, comment_id: comment9.id)
meme_comment14 = MemeComment.create(meme_id: meme5.id, comment_id: comment4.id)
meme_comment15 = MemeComment.create(meme_id: meme6.id, comment_id: comment4.id)
meme_comment16 = MemeComment.create(meme_id: meme7.id, comment_id: comment5.id)




