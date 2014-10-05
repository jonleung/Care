class WishesController < ApplicationController
  before_filter :allow_cross_origin

  def index
    @wishes = Wish.all
    render :json => @wishes
  end
  def create
    wish = Wish.new
    wish.message = params[:message]
    wish.save
    render :json => wish
  end
  
  private

    def allow_cross_origin
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
      headers['Access-Control-Request-Method'] = '*'
      headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    end
end