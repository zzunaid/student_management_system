module Concerns::Errors
  extend ActiveSupport::Concern

  included do
    rescue_from ActiveRecord::RecordInvalid, :with => :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, :with => :render_record_not_found
    rescue_from RailsParam::Param::InvalidParameterError, with: :render_bad_request
  end
end
