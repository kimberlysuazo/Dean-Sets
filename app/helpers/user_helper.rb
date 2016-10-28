module UserHelper

  def valid_sets(games)
      games.inject(0) {|sum, game| sum + game.sets}
  end

  def invalid_sets(games)
      games.inject(0) {|sum, game| sum + game.invalid_sets}
  end

end
