class Api::ScoreController < ApplicationController
  def show
  end

  def new
  end

  def create
  end

  def destroy
  end

  def index
    @scores = Tournament.find(score_params[:tournament_id]).scores
    render json: @scores
  end

  def score_params
    params.permit(:score, :player_id, :hole_id, :tournament_id)
  end

end
