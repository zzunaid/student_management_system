class StudentsController < ApplicationController
  def index
    validate_index_params
    students = Student.where(roster_id: params[:roster_id]).select(:id, :first_name, :last_name, :phone_number, :email_id, :average, :attendance, :roster_id)
    render_response({ students: students }, { message: 'Students in this Roster successfully fetched!' }, :ok)
  end

  def create
    validate_create_params
    student = Student.create!(params.permit(:first_name, :last_name, :phone_number, :email_id, :average, :attendance, :roster_id))
    render_response({ student: student }, { message: 'Student entry successfully created in roster!' }, :ok)
  end

  def destroy
    validate_destroy_params
    status = Student.find(params[:id]).destroy!
    if status.errors.messages.blank?
      render_response({ }, { message: 'Student entry successfully deleted from roster!' }, :ok)
    else
      render_response({ }, { message: status.errors.messages.to_s }, :unprocessable_entity)
    end
  end

  def show
    validate_destroy_params
    student = Student.find(params[:id])
    render_response({ student: student }, { message: 'Student in this Roster successfully fetched!' }, :ok)
  end

  def update
    validate_update_params
    student = Student.find(params[:id])
    student.update_attributes!(params.permit(:first_name, :last_name, :phone_number, :email_id, :average, :attendance, :roster_id))
    render_response({ student: student }, { message: 'Student entry successfully updated in roster!' }, :ok)
  end

  def validate_index_params
    param! :roster_id, Integer, required: true, blank: false
  end

  def validate_create_params
    param! :first_name, String, required: true, blank: false
    param! :last_name, String
    param! :phone_number, String, required: true, blank: false
    param! :email_id, String, required: true, blank: false
    param! :average, Float
    param! :attendance, Float
    param! :roster_id, Integer, required: true, blank: false
  end

  def validate_update_params
    param! :id, Integer, required: true, blank: false
    param! :first_name, String, required: true, blank: false
    param! :last_name, String
    param! :phone_number, String, required: true, blank: false
    param! :email_id, String, required: true, blank: false
    param! :average, Float
    param! :attendance, Float
    param! :roster_id, Integer, required: true, blank: false
  end

  def validate_destroy_params
    param! :id, Integer, required: true, blank: false
  end
end
