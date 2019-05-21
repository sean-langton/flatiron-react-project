class Api::TeamController < ApplicationController
  def show
  end

  def new
  end

  def create
  end

  def destroy
  end

  def index
    @teams = Team.all
    render json: @teams
  end

end
