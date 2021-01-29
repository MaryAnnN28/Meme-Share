# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Meme.destroy_all
Comment.destroy_all
MemeComment.destroy_all

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

meme1 = Meme.create(title: "Cat meme", likes: 2, description: "Funny cats LOL", img_url: "https://i.pinimg.com/736x/4d/8e/cc/4d8ecc6967b4a3d475be5c4d881c4d9c.jpg", user_id: user6.id)
meme2 = Meme.create(title: "Javascript in a nutshell", likes: 3, description: "This dog GETS it.", img_url: "https://i.barkpost.com/wp-content/uploads/2015/02/featmeme.jpg?q=70&fit=crop&crop=entropy&w=808&h=500", user_id: user2.id)
meme3 = Meme.create(title: "Spider", likes: 11, description: "me irl", img_url: "https://ichef.bbci.co.uk/images/ic/704xn/p072ms6r.jpg", user_id:user6.id)
meme4 = Meme.create(title: "Bern It!", likes: 15, description: "I am once again asking for your meme.", img_url: "https://i.redd.it/vakvnwrlzvc61.jpg", user_id: user3.id)
meme5 = Meme.create(title: "See you next fall!", likes: 33, description: "Got 'eeeeem", img_url: "https://media1.giphy.com/media/3o85xsa8FLvSfcpIKk/giphy.gif", user_id:user8.id)
meme6 = Meme.create(title: "i WaNnA sPeAk To YoUr MaNaGeR!", likes: 1, description: "Retail life be like:", img_url: "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/05/spongebob.jpg", user_id: user5.id)
meme7 = Meme.create(title: "When I receive a 1000 word text", likes: 3, description: "Just reply with 'k'", img_url: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/28/12/evil-kermit-meme.jpg", user_id: user7.id)
meme8 = Meme.create(title: "You were born in 1999?", likes: 9, description: "Tell me how much you love the 90's", img_url: "https://static.stacker.com/s3fs-public/styles/properly_sized_image/s3/2019-03/Screen%20Shot%202019-03-14%20at%2010.49.01%20AM_1.png", user_id: user9.id)
meme9 = Meme.create(title: "Modern Problems", likes: 14, description: "Require Modern Solutions!", img_url: "https://i.pinimg.com/originals/36/f9/6f/36f96fdaeb786fd601eb4e34b6b38ff7.jpg", user_id: user2.id)
meme10 = Meme.create(title: "E", likes: 19, description: "He is BIG", img_url: "https://i.kym-cdn.com/entries/icons/facebook/000/026/008/Screen_Shot_2018-04-25_at_12.24.22_PM.jpg", user_id: user2.id)
meme11 = Meme.create(title: "Debugging Problems", likes: 30, description: "It do be like that sometimes.", img_url: "https://i.imgur.com/p8vbAc2.gif", user_id: user2.id)
meme12 = Meme.create(title: "Feels Good Man", likes: 100, description: "Better Call Raul", img_url: "https://i.imgur.com/yjO0Fkx.jpg", user_id: user2.id)
meme13 = Meme.create(title: "Uh oh", likes: 42, description: "It's a Jim-bouree!", img_url: "https://i.imgur.com/ebMaC1Q.jpg", user_id: user2.id)
meme14 = Meme.create(title: "Young and free", likes: 17, description: "'Java is NOT JavaScript' -Angelo Xenakis", img_url: "https://i.imgur.com/iQKzQqM.jpg", user_id: user2.id)
meme15 = Meme.create(title: "I said I'm fine", likes: 15, description: "'I just find it funny that...'", img_url: "https://i.imgur.com/cuAWmqH.jpg", user_id: user2.id)
meme16 = Meme.create(title: "'And our budget is...'", likes: 20, description: "C'mon Joe, where's my money?", img_url: "https://i.imgur.com/5EiOPsM.jpg", user_id: user2.id)
meme17 = Meme.create(title: "Relatable!", likes: 21, description: "So true, LOL", img_url: "https://i.imgur.com/9AJzOtO.jpg", user_id: user2.id)
meme18 = Meme.create(title: "The hard truth", likes: 3, description: "Time to stay inside", img_url: "https://i.imgur.com/zDZgel1.jpg", user_id: user2.id)
meme19 = Meme.create(title: "But it's not my fault", likes: 14, description: "Why aren't you working!", img_url: "https://i.imgur.com/4iYdAwP.jpg", user_id: user2.id)
meme20 = Meme.create(title: "Furbies!", likes: 100, description: "The four horsement of the apocalypse", img_url: "https://i.imgur.com/kWOapOv.png", user_id: user2.id)
meme21 = Meme.create(title: "HOLD!", likes: 3, description: "GME ALL DAY", img_url: "https://i.imgur.com/yiMNn3F.jpg", user_id: user2.id)
# meme22 = Meme.create(title: "", likes: , description: "", img_url: "", user_id: user2.id)
# meme23 = Meme.create(title: "", likes: , description: "", img_url: "", user_id: user2.id)
# meme24 = Meme.create(title: "", likes: , description: "", img_url: "", user_id: user2.id)
# meme25 = Meme.create(title: "", likes: , description: "", img_url: "", user_id: user2.id)
# meme26 = Meme.create(title: "", likes: , description: "", img_url: "", user_id: user2.id)
# meme27 = Meme.create(title: "", likes: , description: "", img_url: "", user_id: user2.id)
# meme28 = Meme.create(title: "", likes: , description: "", img_url: "", user_id: user2.id)
# meme29 = Meme.create(title: "", likes: , description: "", img_url: "", user_id: user2.id)
# meme30 = Meme.create(title: "", likes: , description: "", img_url: "", user_id: user2.id)
# meme30 = Meme.create(title: "", likes: , description: "", img_url: "", user_id: user2.id)



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





