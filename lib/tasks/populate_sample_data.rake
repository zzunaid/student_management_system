task :populate_sample_data, [:number_of_rows] => :environment do |t, args|
  Roster.destroy_all
  puts 'Flushed Roster and Students Data'
  Roster.create(name: "Roster A", description: 'This roster contains information for students from class 1 to class 5.', owner: Faker::Name.name)
  Roster.create(name: "Roster B", description: 'This roster contains information for students from class 6 to class 10.', owner: Faker::Name.name)
  Roster.create(name: "Roster C", description: 'This roster contains information for students from class 11 to class 12.', owner: Faker::Name.name)
  args.number_of_rows.to_i.times do |i|
    puts "Creating row number: #{i}"
    Student.create!(
      first_name: Faker::Name.first_name ,
      last_name: Faker::Name.last_name ,
      phone_number: Faker::PhoneNumber.cell_phone,
      email_id: Faker::Internet.email,
      average: Faker::Number.decimal(1).to_f,
      attendance: Faker::Number.decimal(2).to_f,
      roster_id: Roster.pluck(:id).sample
    )
  end
end
