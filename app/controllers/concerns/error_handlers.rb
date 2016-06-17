module Concerns::ErrorHandlers
  extend ActiveSupport::Concern

  def render_bad_request(e)
    render json: { meta: { success: false, errors: e.message } }, status: :bad_request
  end

  def render_unprocessable_entity(e)
    render json: { meta: { success: false, errors: e.message } }, status: :unprocessable_entity
  end

  def render_record_not_found(e)
    render json: { meta: { success: false, errors: e.message } }, status: :not_found
  end
end
