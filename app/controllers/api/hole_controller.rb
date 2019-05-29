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
    @holes = Hole.where(tournament_id: params[:tournament_id])
    render json: @holes
  end
end
