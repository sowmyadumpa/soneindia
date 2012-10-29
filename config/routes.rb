Soneindia::Application.routes.draw do
  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
  match '/index' => 'home#index', :as => :index
  match '/bangalore' => 'home#bangalore',  :as => :banglore
  match '/hyderabad' => 'home#hyderabad', :as => :hyderabad
  match '/speakerlist' => 'home#speakerlist', :as => :speakerlist
  match '/travel' => 'home#travel', :as => :travel
  match '/venue' => 'home#venue', :as => :venue
  match '/xtravel' => 'home#xtravel', :as => :xtravel
  match '/agenda' => 'home#agenda', :as => :agenda
  match '/register' => 'home#register', :as => :register
  match '/about' => 'home#about', :as => :about

  match '/springone/event_schedule_2' => 'springone#event_schedule_2' , :as => :event_schedule_2
  match '/springone/event_springones_2' => 'springone#event_springones_2', :as => :event_springones_2
  match '/springone/print_schedule_2' => 'springone#print_schedule_2', :as => :print_schedule_2
  match '/springone/event_schedule_3' => 'springone#event_schedule_3', :as => :event_schedule_3
  match '/springone/event_sessions_3' => 'springone#event_sessions_3', :as => :event_sessions_3
  match '/springone/event_springones_3' => 'springone#event_springones_3', :as => :event_springones_3
  match '/springone/print_schedule_3' => 'springone#print_schedule_3', :as => :print_schedule_3
  match '/springone/event_sessions_2' => 'springone#event_sessions_2', :as => :event_sessions_2
  match '/springone/event_schedule' => 'springone#event_schedule', :as => :event_schedule
  match '/springone/event_sessions' => 'springone#event_sessions', :as => :event_sessions
  match '/springone/event_springones' => 'springone#event_springones', :as => :event_springones
  match '/springone/print_schedule' => 'springone#print_schedule', :as => :print_schedule
  match '/springone/event_speakers' => 'springone#event_speakers', :as => :event_speakers
  match '/springone/event_speakers_2' => 'springone#event_speakers_2', :as => :event_speakers
  match '/springone/event_speakers_3' => 'springone#event_speakers_3', :as => :event_speakers
  
  match '/speaker/chris_richardson' => 'speaker#chris_richardson' , :as => :chris_richardson
  match '/speaker/gary_russell' => 'speaker#gary_russell' , :as => :gary_russell
  match '/speaker/jeremy_grelle' => 'speaker#jeremy_grelle' , :as => :jeremy_grelle
  match '/speaker/list' => 'speaker#list' , :as => :list
  match '/speaker/costin_leau' => 'speaker#costin_leau' , :as => :costin_leau
  match '/speaker/jennifer_hickey' => 'speaker#jennifer_hickey' , :as => :jennifer_hickey
  match '/speaker/josh_long' => 'speaker#josh_long' , :as => :josh_long
  match '/speaker/oliver_gierke' => 'speaker#oliver_gierke' ,:as => :oliver_gierke
  match '/speaker/costin_leau' => 'speaker#costin_leau' ,:as => :costin_leau
  root :to => 'home#index'
  

end
