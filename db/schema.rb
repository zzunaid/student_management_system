# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160617101049) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "rosters", force: :cascade do |t|
    t.string   "name",                      null: false
    t.boolean  "is_active",  default: true
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "rosters", ["name"], name: "index_rosters_on_name", using: :btree

  create_table "students", force: :cascade do |t|
    t.string   "first_name",   null: false
    t.string   "last_name"
    t.string   "phone_number", null: false
    t.string   "email_id",     null: false
    t.float    "average"
    t.float    "attendance"
    t.integer  "roster_id",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "students", ["email_id"], name: "index_students_on_email_id", using: :btree
  add_index "students", ["first_name"], name: "index_students_on_first_name", using: :btree
  add_index "students", ["phone_number"], name: "index_students_on_phone_number", using: :btree
  add_index "students", ["roster_id"], name: "index_students_on_roster_id", using: :btree

end
