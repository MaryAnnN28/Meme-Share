Rails.application.routes.draw do
  resources :meme_comments
  resources :comments
  resources :users
  resources :memes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
