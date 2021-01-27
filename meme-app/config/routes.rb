Rails.application.routes.draw do
  resources :meme_comments
  resources :comments
  resources :users
  resources :memes
  
  # CUSTOM ROUTES 

  # get '/memes', to: 'memes#index'
  # get '/memes/:id', to: 'memes#show'
  # post '/memes', to: 'memes#create'
  # get '/users', to: 'users#index'
  # get '/users/:id', to: 'users#show'
  # get '/comments', to: 'comments#index'
  # post '/comments', to: 'comments#create'


end
