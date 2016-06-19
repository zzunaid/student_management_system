class RostersController < ApplicationController
  def index
    rosters = Roster.all
    result = rosters.map do |roster|
      roster_with_count = roster.attributes.merge(total_students: roster.students.count)
      roster_with_count
    end
    render_response({ rosters: result }, { message: 'Rosters successfully fetched!' }, :ok)
  end

  def destroy
    validate_destroy_params
    status = Roster.find(params[:id]).destroy!
    if status.errors.messages.blank?
      render_response({ }, { message: 'Roster successfully deleted!' }, :ok)
    else
      render_response({ }, { message: status.errors.messages.to_s }, :unprocessable_entity)
    end
  end

  def validate_destroy_params
    param! :id, Integer, required: true, blank: false
  end
end
