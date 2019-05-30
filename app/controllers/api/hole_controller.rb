class Api::HoleController < ApplicationController
  def show
    binding.pry
  end

  def new
  end

  def create
    binding.pry
    @hole = Hole.create(hole_params)
    binding.pry
    render json: @hole
  end

  def destroy
    binding.pry
  end

  def index
    @holes = Hole.where(tournament_id: params[:tournament_id])
    render json: @holes
  end

  def hole_params
    params.permit(:name, :duration, :start_time, :par, :birdie, :eagle, :tournament_id)
  end
end
