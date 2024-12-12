require 'rails_helper'

RSpec.describe "Home", type: :feature do
  it 'returns as expected' do
    visit '/messages'

    expect(page).to have_text('Messages')
  end
end