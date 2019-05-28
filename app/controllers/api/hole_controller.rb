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
    @holes = Hole.all
    render json: @holes
  end
end
