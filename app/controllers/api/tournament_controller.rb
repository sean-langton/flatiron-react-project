class Api::TournamentController < ApplicationController

  def index
    @tournaments = Tournament.all
    render json: @tournaments
  end

  def show
    @tournament = Tournament.find(params[:id])
    render json: @tournament
  end

  def create
    @tournament = Tournament.create(tournament_params)
    binding.pry
    render json: @tournament
  end

  def tournament_params
    params.permit(:name, :date, :entry_code, :per_team)
  end
end
