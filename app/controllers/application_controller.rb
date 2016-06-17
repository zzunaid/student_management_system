class ApplicationController < ActionController::API
  include Concerns::Errors
  include Concerns::ErrorHandlers

  def render_response(payload, meta, status_code)
    render json: {
      payload: payload,
      meta: meta
    }, status_code: status_code
  end
end
