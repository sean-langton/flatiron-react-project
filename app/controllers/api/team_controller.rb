class Api::TeamController < ApplicationController
  def show
  end

  def new
  end

  def create
    binding.pry
    @team = Team.create(team_params)
    binding.pry
    render json: @team
  end

  def destroy
    @team = Team.find(params[:id])
    @team.destroy
    @teams = Team.where(tournament_id: params[:tournament_id])
    render json: @teams
  end

  def index
    @teams = Team.where(tournament_id: params[:tournament_id])
    render json: @teams
  end

  def team_params
    params.permit(:name, :tournament_id)
  end

end
