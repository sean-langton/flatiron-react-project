class Api::HoleController < ApplicationController
  def show
    binding.pry
  end

  def new
  end

  def create
  end

  def destroy
  end

  def index
    binding.pry
    @tournament = Tournament.find(params[:tournament_id])
    render :json => @tournament, include: 'hole'
  end
end
