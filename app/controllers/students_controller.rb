class StudentsController < ApplicationController
  def index
    validate_index_params
    students = Student.where(roster_id: params[:roster_id]).select(:id, :first_name, :last_name, :phone_number, :email_id, :average, :attendance, :roster_id)
    render_response({ students: students }, { message: 'Students in this Roster successfully fetched!' }, :ok)
  end

  def create

  end

  def destroy

  end

  def update

  end

  def validate_index_params
    param! :roster_id, Integer, required: true, blank: false
  end
end