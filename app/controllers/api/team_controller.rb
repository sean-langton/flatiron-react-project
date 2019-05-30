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
    @teams = Team.where(tournament_id: params[:tournament_id])
    render json: @teams
  end

end
