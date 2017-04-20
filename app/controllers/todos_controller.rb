class TodosController < ApplicationController

  before_action :set_todo, only: [:update, :destory]

  def index
    render json: Todo.all
  end

  private

  def set_todo
    @todo = Todo.find(params[:id])
  end

end