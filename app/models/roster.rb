class Roster < ActiveRecord::Base
  has_many :students, :dependent => :destroy
end